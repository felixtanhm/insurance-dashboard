"use client";

import Link from "next/link";
import { PlusCircledIcon } from "@radix-ui/react-icons";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";

export function ButtonIcon({ content, href }) {
  const [pathName, setPathName] = useState("");

  useEffect(() => {
    setPathName(window.location.pathname);
  }, []);

  const displayClass = pathName === "/" ? "invisible" : "visible";

  return (
    <Button asChild>
      <Link
        href={href}
        className={displayClass + " bg-blue-600 text-white hover:bg-blue-900"}
      >
        <PlusCircledIcon className="mr-2 h-4 w-4" />
        {content}
      </Link>
    </Button>
  );
}

export default ButtonIcon;
