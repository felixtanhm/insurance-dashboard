"use client";

import ButtonIcon from "@/components/ButtonIcon";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
  DropdownMenuShortcut,
} from "@/components/ui/dropdown-menu";
import { ExitIcon } from "@radix-ui/react-icons";
import { useState, useEffect } from "react";

function TopBar() {
  const [currentPath, setCurrentPath] = useState("");

  useEffect(() => {
    setCurrentPath(window.location.pathname);
  }, []);

  return (
    <div className="flex justify-between p-4">
      <ButtonIcon
        content={"Add Policy"}
        href={"/policies/add"}
        className="invisible"
      />
      <DropdownMenu>
        <DropdownMenuTrigger className="bg-white text-slate-900 p-2 rounded-full w-10 h-10 border">
          EM
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className=" bg-white min-w-64">
          <DropdownMenuLabel>My Account</DropdownMenuLabel>
          <DropdownMenuSeparator className="bg-slate-200" />
          <DropdownMenuItem className="hover:bg-slate-100 rounded-md cursor-pointer hover:text-blue-600 hover:font-medium">
            <ExitIcon className="mr-2 h-4 w-4" />
            Log out
            <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}

export default TopBar;
