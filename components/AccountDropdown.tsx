// components/account-dropdown.tsx
"use client";

import * as React from "react";
import { CreditCard, ChevronDown } from "lucide-react";

import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";

type Account = {
  id: string;
  label: string;
};

const accounts: Account[] = [
  { id: "chase-savings", label: "Chase • Savings" },
  { id: "bofa-credit", label: "Bank of America • Credit" },
  { id: "bofa-savings", label: "Bank of America • Savings" },
];

export function AccountDropdown() {
  // same initial state on server & client
  const [selectedId, setSelectedId] = React.useState<string | null>(
    accounts[0]?.id ?? null
  );

  const selected = accounts.find((a) => a.id === selectedId) ?? null;

  return (
    <section className="w-full ">
      <DropdownMenu>
        <DropdownMenuTrigger className="inline-flex items-center gap-2 rounded-md border px-4 py-2 text-sm font-medium bg-background">
          <CreditCard className="h-4 w-4 text-blue-500" />
          <span>{selected ? selected.label : "Select Account"}</span>
          <ChevronDown className="h-4 w-4 opacity-70" />
        </DropdownMenuTrigger>

        <DropdownMenuContent align="start">
          {accounts.map((account) => (
            <DropdownMenuItem
              key={account.id}
              onClick={() => {
                setSelectedId(account.id);
                // later: trigger transaction filtering here
              }}
            >
              {account.label}
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    </section>
  );
}
