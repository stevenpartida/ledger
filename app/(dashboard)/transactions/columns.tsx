// app/(...)/transactions/columns.ts
"use client";
import Image from "next/image";
import { ColumnDef } from "@tanstack/react-table";
import { Badge } from "@/components/ui/badge";
import { Dot } from "lucide-react";

export type Transaction = {
  id: string;
  merchant_name: string | null;
  amount: number;
  date: string;
  pending: boolean;
  category_primary: string;
  logo_url?: string | null;
  payment_channel: string;
};

const categoryConfig: Record<
  string,
  {
    label: string;
    className: string;
  }
> = {
  FOOD_AND_DRINK: {
    label: "Food & Drink",
    className: "text-fuchsia-600 border-fuchsia-600",
  },
  GENERAL_MERCHANDISE: {
    label: "Shopping",
    className: "text-pink-500 border-pink-500",
  },
  TRAVEL: {
    label: "Travel",
    className: "text-blue-600 border-blue-600",
  },
  ENTERTAINMENT: {
    label: "Entertainment",
    className: "text-yellow-500 border-yellow-500",
  },
  INCOME: {
    label: "Income",
    className: "text-green-600 border-green-600",
  },
  TRANSFER: {
    label: "Transfer",
    className: "bg-slate-500/15 text-slate-400",
  },
};

export const columns: ColumnDef<Transaction>[] = [
  // Transaction column logo + merchant name
  {
    accessorKey: "merchant_name",
    header: "Transaction",
    cell: ({ row }) => {
      const transaction = row.original;
      const displayName = transaction.merchant_name;

      return (
        <div className="flex items-center gap-2">
          {transaction.logo_url ? (
            <Image
              src={transaction.logo_url}
              alt={`${displayName}`}
              width={32}
              height={32}
              className="rounded-full object-fill"
            ></Image>
          ) : (
            <div className="h-6 w-6 rounded-full bg-muted flex items-center justify-center text-xs text-foreground/70">
              {displayName?.charAt(0)}
            </div>
          )}
          <span>{displayName}</span>
        </div>
      );
    },
  },

  // Amount Column
  {
    accessorKey: "amount",
    header: "Amount",
    cell: ({ row }) => {
      const amount = row.original.amount;
      const formatted = amount.toFixed(2);

      return (
        <span
          className={
            amount < 0
              ? "text-red-500 font-medium"
              : "text-green-500 font-medium"
          }
        >
          {amount < 0 ? `- $${Math.abs(amount)}` : `+ $${formatted}`}
        </span>
      );
    },
  },

  // Status Column
  {
    accessorKey: "pending",
    header: "Status",
    cell: ({ row }) => {
      const pending = row.original.pending;

      return pending ? (
        <Badge
          variant="secondary"
          className="text-gray-700 bg-gray-100 font-medium"
        >
          <span>•</span>
          Processing
        </Badge>
      ) : (
        <Badge
          variant="secondary"
          className="text-emerald-700 bg-emerald-100 font-medium"
        >
          <span>•</span>
          Success
        </Badge>
      );
    },
  },

  // Date Column
  {
    accessorKey: "date",
    header: "Date",
    cell: ({ getValue }) => {
      const date = getValue() as string;
      return <span>{new Date(date).toLocaleDateString()}</span>;
    },
  },

  // Category Column
  {
    accessorKey: "category_primary",
    header: "Category",
    cell: ({ row }) => {
      const category = row.original.category_primary;

      const config = categoryConfig[category] ?? {
        label: category.replace(/_/g, " "),
        className: "bg-muted text-muted-foreground",
      };

      return (
        <Badge
          variant="outline"
          className={`${config.className} bg-transparent border`}
        >
          <span>•</span>
          {config.label}
        </Badge>
      );
    },
  },
];
