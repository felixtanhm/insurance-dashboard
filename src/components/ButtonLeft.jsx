import { ChevronLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

<Button
  formAction={prevPage}
  variant="ghost"
  size="sm"
  type="submit"
  disabled={offset === customersPerPage}
>
  <ChevronLeft className="mr-2 h-4 w-4" />
  Prev
</Button>;
