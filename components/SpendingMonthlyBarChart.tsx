"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

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

import { Button } from "./ui/button";
import { Bar, BarChart, CartesianGrid, XAxis } from "recharts";

/* 🔹 Dummy data (can grow later) */
const chartData = [
  { month: "January", income: 186, expense: 80 },
  { month: "February", income: 305, expense: 200 },
  { month: "March", income: 237, expense: 120 },
  { month: "April", income: 73, expense: 190 },
  { month: "May", income: 209, expense: 130 },
  { month: "June", income: 214, expense: 140 },
  { month: "July", income: 260, expense: 180 },
  { month: "August", income: 310, expense: 220 },
  { month: "September", income: 290, expense: 210 },
  { month: "October", income: 330, expense: 240 },
  { month: "November", income: 360, expense: 260 },
  { month: "December", income: 390, expense: 280 },
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

const PAGE_SIZE = 6;

const SpendingMonthlyBarChart = () => {
  const [page, setPage] = useState(0);

  const start = page * PAGE_SIZE;
  const end = start + PAGE_SIZE;

  const visibleData = chartData.slice(start, end);

  const canGoBack = start > 0;
  const canGoForward = end < chartData.length;

  return (
    <Card className="@container/card">
      <CardHeader className="space-y-2">
        <div className="flex items-center justify-between">
          <div>
            <CardTitle>Monthly Income</CardTitle>
            <CardDescription>6-month history</CardDescription>
          </div>

          {/* 🔹 Arrow Controls */}
          <div className="flex items-center gap-1">
            <Button
              variant="ghost"
              size="icon"
              disabled={!canGoBack}
              onClick={() => setPage((p) => p - 1)}
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              disabled={!canGoForward}
              onClick={() => setPage((p) => p + 1)}
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </CardHeader>

      <CardContent className="px-2 pt-4 sm:px-6 sm:pt-6">
        <ChartContainer
          config={chartConfig}
          className="aspect-auto h-[275px] w-full"
        >
          <BarChart accessibilityLayer data={visibleData}>
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="month"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <ChartTooltip cursor content={<ChartTooltipContent />} />
            <ChartLegend content={<ChartLegendContent />} />
            <Bar dataKey="income" fill="var(--color-income)" radius={4} />
            <Bar dataKey="expense" fill="var(--color-expense)" radius={4} />
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
};

export default SpendingMonthlyBarChart;
