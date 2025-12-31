"use client";

import { IconPointFilled } from "@tabler/icons-react";
import {
  ChartConfig,
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
} from "./ui/chart";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Bar, BarChart, CartesianGrid, XAxis } from "recharts";

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
    color: "var(--chart-1)",
  },
  expense: {
    label: "Total Spend",
    color: "var(--chart-3)",
  },
} satisfies ChartConfig;

const IncomeExpenseBarChart = () => {
  return (
    <Card className="@container/card">
      <CardHeader>
        <CardTitle>Monthly Income</CardTitle>
        <CardDescription>Last 6 Months</CardDescription>
      </CardHeader>
      <CardContent className="px-2 pt-4 sm:px-6 sm:pt-6">
        <ChartContainer
          config={chartConfig}
          className="aspect-auto h-[275px] w-full"
        >
          <BarChart accessibilityLayer data={chartData}>
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="month"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <ChartTooltip cursor={true} content={<ChartTooltipContent />} />
            <ChartLegend content={<ChartLegendContent />} />
            <Bar dataKey="income" fill="var(--color-income)" radius={4} />
            <Bar dataKey="expense" fill="var(--color-expense)" radius={4} />
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
};

export default IncomeExpenseBarChart;
