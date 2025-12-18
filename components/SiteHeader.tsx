"use client";

import { SidebarTrigger } from "@/components/ui/sidebar";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";

import { IconSun } from "@tabler/icons-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

import { usePathname } from "next/navigation";

const ROUTE_TITLES: Record<string, string> = {
  "/": "Dashboard",
  "/transactions": "Transactions",
  "/net-worth": "Net Worth",
  "/spending": "Spending",
};

const SiteHeader = () => {
  const pathname = usePathname();

  const title =
    ROUTE_TITLES[pathname] ??
    pathname
      .split("/")
      .filter(Boolean)
      .at(-1)
      ?.replace(/-/g, " ")
      .replace(/\b\w/g, (c) => c.toUpperCase()) ??
    "Dashboard";
  return (
    <header className="flex h-(--header-height) shrink-0 items-center gap-2 border-b transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-(--header-height)">
      <div className="flex w-full items-center gap-1 px-4 lg:gap-2 lg:px-6">
        <SidebarTrigger className="-ml-1" />
        <Separator
          orientation="vertical"
          className="mx-2 data-[orientation=vertical]:h-4"
        />

        <h1 className="text-xl font-medium tracking-tight">{title}</h1>

        <div className="ml-auto flex items-center gap-2">
          <Button variant="ghost">
            <IconSun />
          </Button>

          <Separator
            orientation="vertical"
            className="mx-2 data-[orientation=vertical]:h-4"
          />
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png"></AvatarImage>
            <AvatarFallback>OP</AvatarFallback>
          </Avatar>
        </div>
      </div>
    </header>
  );
};

export default SiteHeader;
