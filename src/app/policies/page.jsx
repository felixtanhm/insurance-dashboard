import { columns } from "./columns";
import { DataTable } from "./dataTable";
import { db } from "@/db";

async function getData() {
  // Fetch data from your API here.
  const items = await db.insurance_policies.findMany();
  return items;
}

export default async function DemoPage() {
  const data = await getData();

  return (
    <div className="px-4">
      <div className="p-4 bg-white rounded-md flex flex-col gap-6">
        <div>
          <h1 className="text-2xl font-bold">Insurance Policies</h1>
          <p className="text-slate-500">
            Critical details of insurance policies
          </p>
        </div>
        <DataTable columns={columns} data={data} />
      </div>
    </div>
  );
}
