import { ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

<Button
  formAction={nextPage}
  variant="ghost"
  size="sm"
  type="submit"
  disabled={offset + customersPerPage > totalCustomers}
>
  Next
  <ChevronRight className="ml-2 h-4 w-4" />
</Button>;
