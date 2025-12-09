import NetWorthLineChart from "@/components/NetWorthLineChart";
import MonthlyIncomeExpenseChart from "../../components/MonthlyIncomeExpenseChart";
import CategoriesPieChart from "@/components/CategoriesPieChart";

export default function Home() {
  return (
    <section className="font-inter min-h-screen w-full p-4 space-y-4">
      {/* Row of charts */}
      <div className="flex gap-4 items-stretch">
        <div className="flex-2">
          <MonthlyIncomeExpenseChart />
        </div>
        <div className="flex-1">
          <NetWorthLineChart />
        </div>
        <div className="flex-1">
          <CategoriesPieChart />
        </div>
      </div>

      {/* Table */}
      <div>Transaction History Table</div>
    </section>
  );
}
