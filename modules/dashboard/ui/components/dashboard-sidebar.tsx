"use client";

import { UserButton } from "@clerk/nextjs";
import {
  CreditCardIcon,
  InboxIcon,
  LayoutDashboardIcon,
  LibraryBigIcon,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Sidebar, SidebarContent, SidebarFooter, SidebarGroup, SidebarGroupContent, SidebarGroupLabel, SidebarHeader, SidebarMenu, SidebarMenuButton, SidebarMenuItem, SidebarRail } from "@/components/ui/sidebar";
import { cn } from "@/lib/utils";
import { ThemeToggle } from "./theme-toggle";

const mainItems = [
  {
    title: "Conversations",
    url: "/dashboard/conversations",
    icon: InboxIcon,
  },
  {
    title: "Knowledge Base",
    url: "/dashboard/files",
    icon: LibraryBigIcon,
  },
  {
    title: "Integrations",
    url: "/dashboard/integrations",
    icon: LayoutDashboardIcon,
  },
];

export const DashboardSidebar = () => {
  const pathname = usePathname();
  const isActive = (url: string) => {
    if (url === "/") {
      return pathname === "/";
    }
    return pathname.startsWith(url);
  };
  return (
    <Sidebar className="group" collapsible="icon">
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton asChild size="lg">
                <Link href="/dashboard" className="flex items-center gap-2">
                    <CreditCardIcon className="size-4" />
                    Relayys
                </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>

      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Menu</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {mainItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton
                    asChild
                    isActive={isActive(item.url)}
                    className={cn(
                      isActive(item.url) &&
                        "bg-gradient-to-b from-sidebar-primary to-sidebar-primary/80! text-sidebar-primary-foreground! hover:to-sidebar-primary/70! dark:to-sidebar-primary/90! dark:hover:to-sidebar-primary/80!"
                    )}
                    tooltip={item.title}
                  >
                    <Link href={item.url}>
                      <item.icon className="size-4" />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
        <SidebarMenu>
          <SidebarMenuItem>
            <ThemeToggle />
          </SidebarMenuItem>
          <SidebarMenuItem>
            <UserButton
              showName
              appearance={{
                elements: {
                  rootBox: "w-full! h-8!",
                  userButtonTrigger:
                    "w-full! p-2! hover:bg-sidebar-accent! hover:text-sidebar-accent-foreground! group-data-[collapsible=icon]:size-8! group-data-[collapsible=icon]:p-2!",
                  userButtonBox:
                    "w-full! flex-row-reverse! justify-end! gap-2! group-data-[collapsible=icon]:justify-center! text-sidebar-foreground!",
                  userButtonOuterIdentifier:
                    "pl-0! group-data-[collapsible=icon]:hidden!",
                  avatarBox: "size-4! rounded-sm!",
                },
              }}
            />
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
};