import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { email, goals } = await req.json();

    if (!email) {
      return NextResponse.json({ error: "Email is required" }, { status: 400 });
    }

    const privateKey = process.env.KLAVIYO_PRIVATE_API_KEY;
    const listId = process.env.KLAVIYO_LIST_ID;

    if (!privateKey || !listId) {
      console.error(
        "Klaviyo API Key or List ID is missing in environment variables",
      );
      return NextResponse.json(
        { error: "Klaviyo configuration is missing" },
        { status: 500 },
      );
    }

    // Klaviyo API v3: Subscribe profiles to a list
    const response = await fetch(
      "https://a.klaviyo.com/api/profile-subscription-bulk-create-jobs/",
      {
        method: "POST",
        headers: {
          Authorization: `Klaviyo-API-Key ${privateKey}`,
          Accept: "application/json",
          "Content-Type": "application/json",
          Revision: "2024-02-15",
        },
        body: JSON.stringify({
          data: {
            type: "profile-subscription-bulk-create-job",
            attributes: {
              custom_source: "Welcome Popup",
              profiles: {
                data: [
                  {
                    type: "profile",
                    attributes: {
                      email: email,
                      properties: {
                        "Health Goals": goals,
                      },
                    },
                  },
                ],
              },
            },
            relationships: {
              list: {
                data: {
                  type: "list",
                  id: listId,
                },
              },
            },
          },
        }),
      },
    );

    if (!response.ok) {
      const errorData = await response.json();
      console.error("Klaviyo API error:", errorData);
      return NextResponse.json(
        { error: "Failed to subscribe to Klaviyo" },
        { status: response.status },
      );
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Klaviyo subscription error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 },
    );
  }
}
