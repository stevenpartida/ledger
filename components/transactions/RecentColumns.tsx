import { Transaction } from "@/lib/types/transaction";
import { ColumnDef } from "@tanstack/react-table";
import Image from "next/image";

export const RecentColumns: ColumnDef<Transaction>[] = [
  {
    accessorKey: "merchant_name",
    header: "Transcation",
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
              : "text-green-500 font font-medium"
          }
        >
          {amount < 0 ? `- $${Math.abs(amount)}` : `+ $${formatted}`}
        </span>
      );
    },
  },
  {
    accessorKey: "date",
    header: "Date",
    cell: ({ row }) => {
      const date = new Date(row.original.date);

      return (
        <span className="text-muted-foreground">
          {date.toLocaleDateString(undefined, {
            month: "short",
            day: "numeric",
          })}
        </span>
      );
    },
  },
];
