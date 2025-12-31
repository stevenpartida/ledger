import AssetsSummaryCard from "@/components/AssetsSummaryCard";
import IncomeExpenseBarChart from "@/components/IncomeExpenseBarChart";
import SectionCard from "@/components/SectionCard";

import { RecentTransactionsTable } from "@/components/transactions/RecentTransactionsTable";
import { createClient } from "@/lib/supabase/server";

async function getRecentTransactions() {
  const supabase = await createClient();
  const { data, error } = await supabase
    .from("transactions")
    .select(
      "id, merchant_name, amount, date, logo_url, pending, category_primary, payment_channel"
    )
    .order("date", { ascending: false })
    .limit(5);

  if (error) throw error;
  return data ?? [];
}
export default async function Dashboard() {
  const transactions = await getRecentTransactions();

  return (
    <section className="flex flex-1 flex-col bg-white">
      <div className="@container/main flex flex-1 flex-col gap-2">
        <div className="flex flex-col gap-4 py-4 md:gap-6 md:py-6">
          <SectionCard />
          <div className="px-4 lg:px-6">
            <IncomeExpenseBarChart />
          </div>
          <div className="grid grid-cols-1 gap-4 px-4  lg:px-6 @xl/main:grid-cols-2">
            <RecentTransactionsTable data={transactions} />
            <AssetsSummaryCard />
          </div>
        </div>
      </div>
    </section>
  );
}
