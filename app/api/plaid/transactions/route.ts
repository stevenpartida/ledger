import { NextResponse } from "next/server";
import { plaidClient } from "@/lib/plaid/plaid";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const access_token = body.access_token;

    if (!access_token) {
      return NextResponse.json(
        { error: "Missing access_token" },
        { status: 400 }
      );
    }

    // Test
    const response = await plaidClient.transactionsGet({
      access_token,
      start_date: "2023-01-01", // temp hard-coded test range
      end_date: "2025-12-31",
      options: {
        count: 3,
        offset: 0,
      },
    });

    return NextResponse.json({
      accounts: response.data.accounts,
      transactions: response.data.transactions,
      total_transactions: response.data.total_transactions,
    });
  } catch (error) {
    console.error("Error fetching transactions:", error);
    return NextResponse.json(
      { error: "Failed to fetch transactions" },
      { status: 500 }
    );
  }
}
