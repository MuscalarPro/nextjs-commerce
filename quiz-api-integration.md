# Quiz API Integration Guide

## Base URL

```
https://muscalar-pro-ai.vercel.app
```

## Authentication

All endpoints require a **Shopify Customer Access Token** sent as a Bearer token.

The external app authenticates users via the **same Shopify store's Storefront API**, then sends that token to this API. The API verifies it against Shopify to resolve the customer identity.

### How to get a customer access token

Call the Shopify Storefront API `customerAccessTokenCreate` mutation:

```graphql
mutation {
  customerAccessTokenCreate(
    input: { email: "customer@example.com", password: "their-password" }
  ) {
    customerAccessToken {
      accessToken
      expiresAt
    }
    customerUserErrors {
      code
      message
    }
  }
}
```

Send this to your Shopify Storefront API endpoint:

```
POST https://{your-store}.myshopify.com/api/2025-01/graphql.json
Headers:
  Content-Type: application/json
  X-Shopify-Storefront-Access-Token: {your-storefront-access-token}
```

The returned `accessToken` is what you send to the Quiz API.

---

## Endpoints

### Save Quiz Responses

```
POST /api/quiz
```

**Headers:**

```
Authorization: Bearer {shopify-customer-access-token}
Content-Type: application/json
```

**Body:**

```json
{
  "answers": [
    { "questionId": 1, "value": "longevity" },
    { "questionId": 2, "value": "unclear" },
    { "questionId": 3, "value": "family" },
    { "questionId": 4, "value": "wearable" },
    { "questionId": 5, "value": "data-insights" },
    { "questionId": 6, "value": "biomarkers" }
  ]
}
```

**Success Response (200):**

```json
{
  "success": true,
  "userId": "7654321",
  "message": "Quiz responses saved"
}
```

**Error Responses:**
| Status | Body | Cause |
|--------|------|-------|
| 401 | `{ "error": "Unauthorized — send Shopify customer access token as Bearer token" }` | Missing/invalid/expired token |
| 400 | `{ "error": "Invalid quiz data", "details": {...} }` | Bad payload (see validation rules below) |
| 400 | `{ "error": "Invalid request body" }` | Malformed JSON |
| 500 | `{ "error": "Failed to save quiz responses" }` | Server error |

---

### Get Quiz Responses

```
GET /api/quiz
```

**Headers:**

```
Authorization: Bearer {shopify-customer-access-token}
```

**Success Response (200) — user has completed quiz:**

```json
{
  "userId": "7654321",
  "answers": [
    { "questionId": 1, "value": "longevity" },
    { "questionId": 2, "value": "unclear" }
  ],
  "completedAt": "2026-04-24T16:30:00.000Z"
}
```

**Success Response (200) — user has NOT completed quiz:**

```json
{
  "answers": null
}
```

---

## Validation Rules

| Field                  | Rule                               |
| ---------------------- | ---------------------------------- |
| `answers`              | Array of 1–6 answer objects        |
| `answers[].questionId` | Must be one of: `1, 2, 3, 4, 5, 6` |
| `answers[].value`      | String, max 50 characters          |

Partial submissions are allowed (e.g. only 3 of 6 questions answered).

---

## Valid Question IDs and Values

| ID  | Question                                           | Valid Values                                                                      |
| --- | -------------------------------------------------- | --------------------------------------------------------------------------------- |
| 1   | What's your primary health focus?                  | `longevity`, `energy`, `recovery`, `metabolic`, `preventive`, `other`             |
| 2   | What's held you back from your health goals?       | `unclear`, `inconsistent`, `cost`, `accountability`, `no-results`, `other`        |
| 3   | What triggered your interest in longevity science? | `family`, `event`, `age`, `research`, `performance`, `other`                      |
| 4   | How do you currently track your health?            | `bloodwork`, `wearable`, `doctor`, `self`, `none`, `other`                        |
| 5   | What's your ideal health support?                  | `data-insights`, `personalized`, `science-tools`, `community`, `premium`, `other` |
| 6   | Where do you want to be in 2 years?                | `biomarkers`, `energy`, `vitality`, `prevention`, `performance`, `other`          |

---

## Behavior

- **Upsert**: Submitting again for the same user overwrites previous answers.
- **User identity**: Derived from Shopify customer ID (verified server-side). Same customer = same record regardless of which app submits.
- **Storage**: MongoDB collection `quiz_responses` in the `muscular_storage` database.

---

## CORS

The API accepts cross-origin requests from:

- `https://www.muscalarpro.com`
- `https://muscalarpro.com`

If your app runs on a different domain, let the backend team know so they can add it to the allowlist.

---

## Example (JavaScript fetch)

```javascript
const QUIZ_API = "https://muscalar-pro-ai.vercel.app/api/quiz";

// Save answers
async function submitQuiz(customerAccessToken, answers) {
  const res = await fetch(QUIZ_API, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${customerAccessToken}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ answers }),
  });

  if (!res.ok) {
    const err = await res.json();
    throw new Error(err.error);
  }

  return res.json();
}

// Fetch saved answers
async function getQuizAnswers(customerAccessToken) {
  const res = await fetch(QUIZ_API, {
    headers: {
      Authorization: `Bearer ${customerAccessToken}`,
    },
  });

  if (!res.ok) {
    const err = await res.json();
    throw new Error(err.error);
  }

  return res.json();
}

// Usage
const token = "shpca_xxxxxxxxxxxxxxxx"; // from Shopify login
await submitQuiz(token, [
  { questionId: 1, value: "longevity" },
  { questionId: 2, value: "unclear" },
  { questionId: 3, value: "family" },
  { questionId: 4, value: "wearable" },
  { questionId: 5, value: "data-insights" },
  { questionId: 6, value: "biomarkers" },
]);
```
