"use client";

import * as React from "react";
import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarFooter,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
} from "@/components/ui/sidebar";

import {
  IconHome,
  IconReceipt,
  IconChartBar,
  IconCashBanknote,
  IconSettings,
  IconTrendingUp,
} from "@tabler/icons-react";
import { url } from "inspector";
import Link from "next/link";
import NavMain from "./NavMain";

const data = {
  user: {
    name: "Opium",
    email: "opm@gmail.com",
    avatar: "",
  },
  navMain: [
    {
      title: "Dashboard",
      url: "/",
      icon: IconHome,
    },
    {
      title: "Transactions",
      url: "/transactions",
      icon: IconReceipt,
    },
    {
      title: "Spending",
      url: "/spending",
      icon: IconCashBanknote,
    },
    {
      title: "Net Worth",
      url: "/net-worth",
      icon: IconChartBar,
    },
  ],
  navSecondary: [
    {
      title: "Settings",
      url: "#",
      icon: IconSettings,
    },
  ],
};

export default function AppSidebar(
  props: React.ComponentProps<typeof Sidebar>
) {
  return (
    <Sidebar variant="inset" collapsible="offcanvas" {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton
              asChild
              className="data-[slot=sidebar-menu-button]:!p-1.5"
            >
              <Link
                href="/"
                className="font-base font-medium font-inter text-neutral-950"
              >
                <IconTrendingUp />
                Personal Ledger
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
      </SidebarContent>
    </Sidebar>
  );
}
