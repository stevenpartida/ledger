"use client";

import React, { useEffect, useState } from "react";
import HeaderBox from "@/components/HeaderBox";
import { AccountDropdown } from "@/components/AccountDropdown";
import { DataTable } from "./data-table";
import { columns, Transaction } from "./columns";

const TransactionHistory = () => {
  const [transactions, setTransactions] = useState<Transaction[]>([]);

  useEffect(() => {
    const fetchTransactions = async () => {
      try {
        const res = await fetch("/api/supabase/transactions");
        if (!res.ok) {
          console.error("Error Fetching: ", res.status);
          return;
        }

        const data = await res.json();
        console.log("🔥 FETCHED TRANSACTIONS:", data); // <--- IMPORTANT STEP
        setTransactions(data);
      } catch (err) {
        console.error("Request failed:", err);
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
        <DataTable columns={columns} data={transactions} />
      </div>
    </section>
  );
};

export default TransactionHistory;
