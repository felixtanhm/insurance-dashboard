"use client";

import SideBarToolTip from "./SidebarTooltip";
import { useState, useEffect } from "react";
import React from "react";

function SideBar() {
  const [currentPath, setCurrentPath] = useState("");

  useEffect(() => {
    setCurrentPath(window.location.pathname);
  }, []);

  return (
    <aside className="fixed inset-y-0 left-0 z-10 hidden w-14 flex-col border-r bg-white sm:flex">
      <nav className="flex flex-col items-center gap-4 px-2 sm:py-5 mt-10">
        <SideBarToolTip
          href={"/"}
          content={"Home"}
          isActive={currentPath === "/"}
        />
        <SideBarToolTip
          href={"/policies"}
          content={"Policies"}
          isActive={currentPath === "/policies"}
        />
        <SideBarToolTip
          href={"/customers"}
          content={"Customers"}
          isActive={currentPath === "/customers"}
        />
      </nav>
    </aside>
  );
}

export default SideBar;
