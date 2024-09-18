import Link from "next/link";
import { Home, Wallet, Users2 } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
  TooltipProvider,
} from "@/components/ui/tooltip";

function SideBarToolTip({ href, content, isActive }) {
  const classes = isActive
    ? "bg-blue-50 text-blue-600"
    : "hover:text-blue-600 hover:bg-blue-50 text-slate-900 bg-white";

  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Link
            href={href}
            className={
              classes +
              " flex h-9 w-9 items-center justify-center rounded-lg transition-colors md:h-8 md:w-8"
            }
          >
            {content === "Home" && <Home className="h-5 w-5" />}
            {content === "Policies" && <Wallet className="h-5 w-5" />}
            {content === "Customers" && <Users2 className="h-5 w-5" />}
          </Link>
        </TooltipTrigger>
        <TooltipContent
          side="right"
          className="bg-white text-slate-900 font-medium"
        >
          {content}
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}

export default SideBarToolTip;
