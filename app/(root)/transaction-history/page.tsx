// app/(...)/transactions/page.tsx (or wherever TransactionHistory lives)
"use client";

import React, { useEffect, useState } from "react";
import HeaderBox from "@/components/HeaderBox";
import { AccountDropdown } from "@/components/AccountDropdown";
import { DataTable } from "./data-table";
import {
  columns,
  Transaction,
  TransactionStatus,
  TransactionCategory,
} from "./columns";

// Shape returned by your /api/transactions route:
type ApiTransaction = {
  id: number;
  name: string;
  amount: string | number;
  status: string | null;
  transaction_date: string;
  category: string | null;
  account_id: string;
  plaid_transaction_id: string | null;
};

const mapStatus = (status: string | null): TransactionStatus => {
  if (status === "pending") return "pending";
  if (status === "posted") return "success"; // treat posted as success
  return "processing";
};

const mapCategory = (category: string | null): TransactionCategory => {
  if (!category) return "other";

  const normalized = category.toLowerCase();

  if (normalized.includes("subscription")) return "subscriptions";
  if (normalized.includes("grocery") || normalized.includes("groceries"))
    return "groceries";
  if (normalized.includes("income") || normalized.includes("paycheck"))
    return "income";
  if (
    normalized.includes("food") ||
    normalized.includes("pizza") ||
    normalized.includes("burger")
  )
    return "food-and-dining";

  return "other";
};

const TransactionHistory = () => {
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTransactions = async () => {
      try {
        const res = await fetch("/api/transactions");
        const data: ApiTransaction[] = await res.json();

        const mapped: Transaction[] = data.map((t) => ({
          id: String(t.id),
          accountId: t.account_id,
          name: t.name,
          amount: Number(t.amount), // supabase numeric -> string, so coerce
          status: mapStatus(t.status),
          date: t.transaction_date, // you can format when rendering
          category: mapCategory(t.category),
        }));

        setTransactions(mapped);
      } catch (error) {
        console.error("Failed to fetch transactions", error);
      } finally {
        setLoading(false);
      }
    };

    fetchTransactions();
  }, []);

  return (
    <section className="font-inter min-h-screen w-full p-4 space-y-6">
      <div className="flex w-full items-start justify-between p-8">
        <div>
          <HeaderBox
            title="Transaction History"
            subtext="Manage and Track Your Transaction History"
          />
        </div>
        <div>
          <AccountDropdown />
        </div>
      </div>

      <div className="p-8">
        {loading ? (
          <div className="text-sm text-muted-foreground">
            Loading transactions…
          </div>
        ) : (
          <DataTable columns={columns} data={transactions} />
        )}
      </div>
    </section>
  );
};

export default TransactionHistory;
