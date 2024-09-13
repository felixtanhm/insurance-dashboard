import Link from "next/link";
import { Home, Wallet, Users2 } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
  TooltipProvider,
} from "@/components/ui/tooltip";

function SideBarToolTip({ href }) {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Link
            href={href}
            className="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8 bg-accent text-black"
          >
            {href === "/" && <Home className="h-5 w-5" />}
            {href === "/policies" && <Wallet className="h-5 w-5" />}
            {href === "/customers" && <Users2 className="h-5 w-5" />}
          </Link>
        </TooltipTrigger>
        <TooltipContent side="right">Home</TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}

export default SideBarToolTip;
