/** @format */
"use client";
import React from "react";
import {
  Sidebar,
  SidebarContent,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarTrigger,
  useSidebar,
} from "../ui/sidebar";

import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

export default function DashboardSidebar() {
  const { state } = useSidebar();

  const isCollapsed = state === "collapsed";
  return (
    <>
      {/* mobile menu button */}
      <div className="fixed top-4 left-4 z-40 md:hidden">
        <SidebarTrigger />
      </div>

      {/* Sidebar content goes here */}
      <Sidebar
        className="border-r-0 border-transparent bg-white"
        collapsible="icon"
      >
        <SidebarContent>
          <div
            className={`flex items-center justify-center px-0 md:px-2 py-6 relative ${
              isCollapsed ? "px-2" : "gap-2"
            }`}
          >
            <div className="flex gap-2">
              {isCollapsed ? (
                <h1 className="mt-2 font-bold text-xl text-red-800 rounded-full px-2 border-2 border-red-800">
                  B
                </h1>
              ) : (
                <div className="flex items-center gap-2">
                  <Image src="/logo.png" alt="Logo" width={70} height={70} />
                </div>
              )}
            </div>
            {/* Toggle button for mobile */}

            {/* Collapse button for desktop */}
            <div
              className={`absolute top-1 hidden md:block ${
                isCollapsed ? "right-0" : "right-0"
              }`}
            >
              <SidebarTrigger />
            </div>
          </div>
        </SidebarContent>
      </Sidebar>
    </>
  );
}

interface NavItemProps {
  href: string;
  icon: React.ElementType;
  label: string;
  active: boolean;
  collapsed?: boolean;
}

function NavItem({
  href,
  icon: Icon,
  label,
  active,
  collapsed = false,
}: NavItemProps) {
  return (
    <SidebarMenuItem>
      <SidebarMenuButton asChild>
        <Link
          href={href}
          className={cn(
            collapsed
              ? "flex items-center justify-center px-2 py-3 transition-colors rounded-full w-12 h-12 mx-auto"
              : "flex items-center gap-3 px-4 py-3 transition-colors rounded-md",
            active
              ? "bg-orange-100 text-orange-500 hover:bg-orange-100! hover:text-orange-500! font-medium"
              : "bg-transparent text-black hover:bg-orange-50! hover:text-orange-500! font-medium"
          )}
        >
          <Icon size={collapsed ? 20 : 18} />
          {!collapsed && <span className="text-base">{label}</span>}
        </Link>
      </SidebarMenuButton>
    </SidebarMenuItem>
  );
}
// ...existing code...
