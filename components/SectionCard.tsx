"use client";

import CountUp from "react-countup";
import Link from "next/link";
import { IconTrendingUp, IconTrendingDown } from "@tabler/icons-react";
import {
  Card,
  CardAction,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";

const SectionCard = () => {
  return (
    <section className=" grid grid-cols-1 gap-4 px-4  lg:px-6 @xl/main:grid-cols-2 @5xl/main:grid-cols-4">
      <Card className="@container/card font-inter text-neutral-950">
        <CardHeader>
          <CardDescription>Net Worth</CardDescription>

          <CardTitle className="text-2xl font-semibold">
            <CountUp
              end={12758.67}
              duration={2}
              separator=","
              decimals={2}
              decimal="."
              prefix="$"
            />
          </CardTitle>

          <CardAction>
            <Badge variant="outline">
              <Link href="/net-worth">View</Link>
            </Badge>
          </CardAction>
        </CardHeader>
        <CardFooter className="flex-col items-start text-sm">
          <div className="line-clamp-1 flex gap-2 font-medium items-center">
            <IconTrendingUp className="size-4 text-green-500" />
            <div>
              <span className="text-green-500">2.3%</span>&nbsp;up from last
              month
            </div>
          </div>
        </CardFooter>
      </Card>
      <Card className="@container/card font-inter text-neutral-950">
        <CardHeader>
          <CardDescription>Spending</CardDescription>
          <CardTitle className="text-2xl font-semibold ">
            <CountUp
              end={685}
              duration={2}
              separator=","
              decimals={2}
              decimal="."
              prefix="$"
            ></CountUp>
          </CardTitle>
          <CardAction>
            <Badge variant="outline">
              <Link href="/spending">View</Link>
            </Badge>
          </CardAction>
        </CardHeader>
        <CardFooter className="flex-col items-start text-sm">
          <div className="line-clamp-1 flex gap-2 font-medium items-center">
            <IconTrendingUp className="size-4 text-red-500" />
            <div>
              <span className="text-red-500">$373</span>&nbsp;above last month
            </div>
          </div>
        </CardFooter>
      </Card>
    </section>
  );
};

export default SectionCard;
