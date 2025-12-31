import { TransactionsTable } from "@/components/transactions/TransactionsTable";
import { createClient } from "@/lib/supabase/server";

async function getTransactions() {
  const supabase = await createClient();
  const { data, error } = await supabase
    .from("transactions")
    .select(
      "id, merchant_name, amount, date, logo_url, pending, category_primary, payment_channel"
    )
    .order("date", { ascending: false });

  if (error) throw error;
  return data ?? [];
}

export default async function Transactions() {
  const transactions = await getTransactions();

  return (
    <section className="flex flex-col p-4 lg:p-6">
      <div className="@container/main felx gap-2">
        <div>
          <TransactionsTable data={transactions} />
        </div>
      </div>
    </section>
  );
}
