"use client";
import {
  Card,
  CardHeader,
  CardTitle,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
} from "./ui/card";
import { Badge } from "./ui/badge";
import Link from "next/link";
import CountUp from "react-countup";
import { IconPointFilled } from "@tabler/icons-react";

import { Bar, BarChart, XAxis, YAxis } from "recharts";

import { ChartConfig, ChartContainer } from "./ui/chart";

const chartData = [
  {
    investments: 8450,
    checkings: 1420.49,
    savings: 2262.71,
    other: 2197.93,
  },
];

const chartConfig = {
  investments: {
    label: "Investments",
    color: "var(--chart-4)",
  },
  checkings: {
    label: "Checkings",
    color: "var(--chart-3)",
  },
  savings: {
    label: "Savings",
    color: "var(--chart-2)",
  },
  other: {
    label: "Other Assets",
    color: "var(--chart-1)",
  },
} satisfies ChartConfig;

const AssetsSummaryCard = () => {
  return (
    <Card className="@container/card font-inter text-neutral-950">
      <CardHeader>
        <CardTitle>Assets</CardTitle>
        <CardAction>
          <Badge variant="outline">
            <Link href="/net-worth">View</Link>
          </Badge>
        </CardAction>
      </CardHeader>
      <CardContent>
        <CardDescription className="mb-2">Total Assets</CardDescription>
        <CardTitle className="text-2xl font-semibold mb-1 p-0">
          <CountUp
            end={14532.13}
            duration={2}
            separator=","
            decimals={2}
            decimal="."
            prefix="$"
          />
        </CardTitle>
        <ChartContainer config={chartConfig} className="h-8 w-full">
          <BarChart data={chartData} layout="vertical" stackOffset="expand">
            <XAxis type="number" hide />
            <YAxis type="category" dataKey="name" hide />
            <Bar
              dataKey="investments"
              stackId="a"
              fill="var(--color-investments)"
              radius={[8, 0, 0, 8]}
            ></Bar>
            <Bar
              dataKey="checkings"
              stackId="a"
              fill="var(--color-checkings)"
            ></Bar>
            <Bar
              dataKey="savings"
              stackId="a"
              fill="var(--color-savings)"
            ></Bar>
            <Bar
              dataKey="other"
              stackId="a"
              fill="var(--color-other)"
              radius={[0, 8, 8, 0]}
            ></Bar>
          </BarChart>
        </ChartContainer>
      </CardContent>
      <CardFooter>
        <div className="font-inter w-full flex flex-col gap-4">
          <div className="flex flew-row justify-between">
            <span className="flex fle-row gap-2 items-center">
              <IconPointFilled className="size-6 text-[var(--chart-4)]" />
              Investments
            </span>
            $8,450
          </div>
          <div className="flex flew-row justify-between">
            <span className="flex fle-row gap-2 items-center">
              <IconPointFilled className="size-6 text-[var(--chart-3)]" />
              Checkings
            </span>
            $1,420.49
          </div>
          <div className="flex flew-row justify-between">
            <span className="flex fle-row gap-2 items-center">
              <IconPointFilled className="size-6 text-[var(--chart-2)]" />
              Savings
            </span>
            $2,262.71
          </div>
          <div className="flex flew-row justify-between">
            <span className="flex fle-row gap-2 items-center">
              <IconPointFilled className="size-6 text-[var(--chart-1)]" />
              Other Assets
            </span>
            $2,197.93
          </div>
        </div>
      </CardFooter>
    </Card>
  );
};

export default AssetsSummaryCard;
