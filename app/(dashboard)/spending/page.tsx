import SpendingMonthlyBarChart from "@/components/SpendingMonthlyBarChart";
import React from "react";

const Spending = () => {
  return (
    <section className="flex flex-1 flex-col bg-white">
      <div className="@container/main flex flex-1 flex-col gap-2">
        <div className="flex flex-col gap-4 p-4 md:gap-6 md:p-6">
          <SpendingMonthlyBarChart />
        </div>
      </div>
    </section>
  );
};

export default Spending;
