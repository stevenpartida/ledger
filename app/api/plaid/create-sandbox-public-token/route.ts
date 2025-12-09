// app/api/plaid/create-sandbox-public-token/route.ts
import { NextResponse } from "next/server";
import { plaidClient } from "@/lib/plaid/plaid";
import { Products } from "plaid";

export async function POST() {
  try {
    const plaidResponse = await plaidClient.sandboxPublicTokenCreate({
      institution_id: "ins_109508", // a common Sandbox test institution
      initial_products: [Products.Transactions],
    });

    const public_token = plaidResponse.data.public_token;

    return NextResponse.json({ public_token });
  } catch (error) {
    console.error("Error creating sandbox public_token:", error);
    return NextResponse.json(
      { error: "Failed to create sandbox public_token" },
      { status: 500 }
    );
  }
}
