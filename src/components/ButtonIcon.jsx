import Link from "next/link";
import { PlusCircledIcon } from "@radix-ui/react-icons";
import { Button } from "@/components/ui/button";

export function ButtonIcon() {
  return (
    <Button asChild>
      <Link
        href="/policies/add"
        className="bg-blue-600 text-white hover:bg-blue-900"
      >
        <PlusCircledIcon className="mr-2 h-4 w-4" /> Add Policy
      </Link>
    </Button>
  );
}

export default ButtonIcon;
