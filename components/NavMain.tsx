"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { type Icon } from "@tabler/icons-react";
import {
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "./ui/sidebar";

export type NavItem = {
  title: string;
  url: string;
  icon?: Icon;
};

export type NavMainProps = {
  items: NavItem[];
};

export default function NavMain({ items }: NavMainProps) {
  const pathname = usePathname();
  return (
    <SidebarGroup>
      <SidebarGroupContent className="flex flex-col gap-2">
        <SidebarMenu>
          {items.map((item) => {
            const isActive = pathname === item.url;

            return (
              <SidebarMenuItem key={item.title}>
                <SidebarMenuButton
                  tooltip={item.title}
                  data-active={isActive}
                  className="
                  text-muted-foreground
                    data-[active=true]:bg-neutral-950
                    data-[active=true]:text-neutral-50
                  "
                >
                  <Link href={item.url} className="flex items-center gap-2">
                    {item.icon && <item.icon className="h-4 w-4" />}
                    <span>{item.title}</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            );
          })}
        </SidebarMenu>
      </SidebarGroupContent>
    </SidebarGroup>
  );
}
