import { NextResponse } from "next/server";
import { plaidClient } from "@/lib/plaid/plaid";
import { CountryCode, Products } from "plaid";

export async function POST() {
  try {
    const plaidResponse = await plaidClient.linkTokenCreate({
      user: {
        client_user_id: "demo-user-123",
      },
      client_name: "Finance Ledger",
      products: [Products.Transactions],
      language: "en",
      country_codes: [CountryCode.Us],
    });

    return NextResponse.json({
      link_token: plaidResponse.data.link_token,
    });
  } catch (error) {
    console.error("Error creating link token: ", error);
    return NextResponse.json(
      { error: "Failed to create link token" },
      { status: 500 }
    );
  }
}
