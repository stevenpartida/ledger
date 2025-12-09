"use client";

import { Area, AreaChart, CartesianGrid, XAxis } from "recharts";

import {
  Card,
  CardContent,
  CardDescription,
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
  { month: "January", netWorth: 186 },
  { month: "February", netWorth: 305 },
  { month: "March", netWorth: 237 },
  { month: "April", netWorth: 73 },
  { month: "May", netWorth: 209 },
  { month: "June", netWorth: 214 },
];

const chartConfig = {
  netWorth: {
    label: "Net Worth",
    color: "#60a5fa",
  },
} satisfies ChartConfig;

const NetWorthLineChart = () => {
  return (
    <Card className="h-full flex flex-col">
      <CardHeader className="pb-2">
        <CardTitle>Net Worth</CardTitle>
        <CardDescription>January – June 2024</CardDescription>
      </CardHeader>

      {/* Let Flexbox size the chart area */}
      <CardContent className="flex-1">
        <ChartContainer config={chartConfig} className="h-full w-full">
          <AreaChart
            accessibilityLayer
            data={chartData}
            margin={{ left: 12, right: 12 }}
          >
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="month"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              tickFormatter={(value) => value.slice(0, 3)}
            />

            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent indicator="line" />}
            />

            <Area
              dataKey="netWorth"
              type="monotone"
              fill="var(--color-netWorth)"
              fillOpacity={0.4}
              stroke="var(--color-netWorth)"
            />
          </AreaChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
};

export default NetWorthLineChart;
