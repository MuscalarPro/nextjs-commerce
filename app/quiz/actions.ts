"use server";

import { createCustomer, createCustomerAccessToken } from "lib/shopify";

export async function submitQuizAction(
  email: string,
  password?: string,
  answers?: Record<number, string>,
) {
  try {
    let accessToken: string | undefined;

    if (!password) {
      return { success: false, error: "Password is required" };
    }

    // Try to login directly first
    let tokenData = await createCustomerAccessToken({
      input: { email, password },
    });

    if (tokenData?.customerUserErrors?.length) {
      // If login fails, try to create the account
      const createData = await createCustomer({
        input: { email, password },
      });

      if (createData?.customerUserErrors?.length) {
        return {
          success: false,
          error:
            createData.customerUserErrors[0]?.message ||
            "Failed to create account",
        };
      }

      // Try login again
      tokenData = await createCustomerAccessToken({
        input: { email, password },
      });

      if (tokenData?.customerUserErrors?.length) {
        return {
          success: false,
          error:
            tokenData.customerUserErrors[0]?.message ||
            "Failed to login after account creation",
        };
      }
    }

    accessToken = tokenData?.customerAccessToken?.accessToken;

    if (!accessToken) {
      return { success: false, error: "Failed to authenticate with Shopify" };
    }

    if (!answers) {
      return { success: false, error: "No answers provided" };
    }

    // Format answers for the Quiz API
    const formattedAnswers = Object.entries(answers).map(
      ([questionId, value]) => ({
        questionId: parseInt(questionId, 10),
        value,
      }),
    );

    // Post to Quiz API
    const response = await fetch(
      "https://muscalar-pro-ai.vercel.app/api/quiz",
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${accessToken}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ answers: formattedAnswers }),
      },
    );

    if (!response.ok) {
      const errData = await response.json().catch(() => ({}));
      return {
        success: false,
        error: errData.error || "Failed to save quiz responses",
      };
    }

    const data = await response.json();
    return { success: true, data };
  } catch (error: any) {
    console.error("Quiz submission error:", error);
    return {
      success: false,
      error: error.message || "An unexpected error occurred",
    };
  }
}
