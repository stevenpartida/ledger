// app/(...)/transactions/columns.ts
"use client";

import { ColumnDef } from "@tanstack/react-table";

export type TransactionStatus =
  | "pending"
  | "processing"
  | "success"
  | "declined";

export type TransactionCategory =
  | "subscriptions"
  | "deposit"
  | "income"
  | "groceries"
  | "food-and-dining"
  | "other"
  // temporarily allow anything else coming from DB:
  | (string & {});

export type Transaction = {
  id: string; // we'll convert number -> string
  accountId: string; // from account_id
  name: string;
  amount: number; // from numeric (string) -> number
  status: TransactionStatus; // we'll map "posted" -> "success"
  date: string; // from transaction_date
  category: TransactionCategory;
};

export const columns: ColumnDef<Transaction>[] = [
  { accessorKey: "name", header: "Transaction" },
  { accessorKey: "amount", header: "Amount" },
  { accessorKey: "status", header: "Status" },
  { accessorKey: "date", header: "Date" },
  { accessorKey: "category", header: "Category" },
];
