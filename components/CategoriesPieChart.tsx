"use client";

import * as React from "react";
import { Label, Pie, PieChart } from "recharts";

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
  { category: "software", spent: 275, fill: "var(--color-software)" },
  {
    category: "transportation",
    spent: 200,
    fill: "var(--color-transportation)",
  },
  { category: "entertainment", spent: 287, fill: "var(--color-entertainment)" },
  { category: "dining", spent: 173, fill: "var(--color-dining)" },
  { category: "other", spent: 190, fill: "var(--color-other)" },
];

const chartConfig = {
  spent: {
    label: "Total Spent",
  },
  software: {
    label: "Software",
    color: "var(--chart-1)",
  },
  transportation: {
    label: "Transportation",
    color: "var(--chart-2)",
  },
  entertainment: {
    label: "Entertainment",
    color: "var(--chart-3)",
  },
  dining: {
    label: "Dining",
    color: "var(--chart-4)",
  },
  other: {
    label: "Other",
    color: "var(--chart-5)",
  },
} satisfies ChartConfig;

const CategoriesPieChart = () => {
  const totalSpent = React.useMemo(() => {
    return chartData.reduce((acc, curr) => acc + curr.spent, 0);
  }, []);

  return (
    <Card className="h-full flex flex-col">
      <CardHeader className="items-center pb-2">
        <CardTitle>Pie Chart - Categories</CardTitle>
        <CardDescription>January - June 2024</CardDescription>
      </CardHeader>

      {/* Let flexbox size this area & center the pie */}
      <CardContent className="flex-1 flex items-center justify-center pb-2">
        <ChartContainer
          config={chartConfig}
          className="aspect-square w-full max-w-[260px]"
        >
          <PieChart>
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Pie
              data={chartData}
              dataKey="spent"
              nameKey="category"
              innerRadius={60}
              strokeWidth={5}
            >
              <Label
                content={({ viewBox }) => {
                  if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                    return (
                      <text
                        x={viewBox.cx}
                        y={viewBox.cy}
                        textAnchor="middle"
                        dominantBaseline="middle"
                      >
                        <tspan
                          x={viewBox.cx}
                          y={viewBox.cy}
                          className="fill-foreground text-3xl font-bold"
                        >
                          {totalSpent.toLocaleString()}
                        </tspan>
                        <tspan
                          x={viewBox.cx}
                          y={(viewBox.cy || 0) + 24}
                          className="fill-muted-foreground"
                        >
                          Total Spent
                        </tspan>
                      </text>
                    );
                  }
                  return null;
                }}
              />
            </Pie>
          </PieChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
};

export default CategoriesPieChart;
