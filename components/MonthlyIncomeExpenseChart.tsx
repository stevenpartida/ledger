"use client";

import { Bar, BarChart, CartesianGrid, XAxis } from "recharts";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

const chartData = [
  { month: "January", income: 186, expense: 80 },
  { month: "February", income: 305, expense: 200 },
  { month: "March", income: 237, expense: 120 },
  { month: "April", income: 73, expense: 190 },
  { month: "May", income: 209, expense: 130 },
  { month: "June", income: 214, expense: 140 },
];

const chartConfig = {
  income: {
    label: "Income",
    color: "#60a5fa",
  },
  expense: {
    label: "Total Spend",
    color: "#2563eb",
  },
} satisfies ChartConfig;

const MonthlyIncomeExpenseChart = () => {
  return (
    <Card className="h-full flex flex-col">
      <CardHeader className="pb-2">
        <CardTitle className="font-bold font-inter text-2xl text-slate-950">
          Spending
        </CardTitle>
        <CardDescription className="font-semibold font-inter ">
          Last 3 months
        </CardDescription>
      </CardHeader>

      {/* Let flexbox give this area the remaining height */}
      <CardContent className="flex-1">
        <ChartContainer config={chartConfig} className="h-full w-full">
          <BarChart accessibilityLayer data={chartData}>
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="month"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent indicator="dashed" />}
            />
            <Bar dataKey="income" fill="var(--color-income)" radius={4} />
            <Bar dataKey="expense" fill="var(--color-expense)" radius={4} />
          </BarChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex flex-row gap-2 items-center justify-center font-inter text-muted-foreground">
        <div className="gap-2">
          <span className="text-xl text-[#60a5fa]">•</span> Income
        </div>
        <div>
          <span className="text-xl text-[#2563eb]">•</span> Total Spend
        </div>
      </CardFooter>
    </Card>
  );
};

export default MonthlyIncomeExpenseChart;
