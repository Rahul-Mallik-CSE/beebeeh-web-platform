/** @format */

import React from "react";
import { SidebarTrigger } from "../ui/sidebar";

export default function DashboardSidebar() {
  return (
    <>
      {/* mobile menu button */}
      <div className="fixed top-4 left-4 z-40 md:hidden">
        <SidebarTrigger />
      </div>

      
    </>
  );
}
