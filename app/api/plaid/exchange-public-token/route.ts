import { NextResponse } from "next/server";
import { plaidClient } from "@/lib/plaid/plaid";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const public_token = body.public_token;

    if (!public_token) {
      return NextResponse.json(
        { error: "Missing public_token" },
        { status: 400 }
      );
    }

    const plaidResponse = await plaidClient.itemPublicTokenExchange({
      public_token,
    });

    const accessToken = plaidResponse.data.access_token;
    const itemId = plaidResponse.data.item_id;

    // Supabase logic for storing access token and item id will go here.

    return NextResponse.json({
      access_token: accessToken,
      item_id: itemId,
    });
  } catch (error) {
    console.error("Error exchanging public token:", error);
    return NextResponse.json(
      { error: "Failed to exchange public token" },
      { status: 500 }
    );
  }
}
