import { columns } from "./columns";
import { DataTable } from "./dataTable";
import { db } from "@/db";

async function getData() {
  // Fetch data from your API here.
  const items = await db.policy_holders.findMany();
  return items;
}

export default async function CustomersPage() {
  const data = await getData();

  return (
    <div className="px-4">
      <div className="p-4 bg-white rounded-md flex flex-col gap-6">
        <div>
          <h1 className="text-2xl font-bold">Policy Holders</h1>
          <p className="text-slate-500">
            Personal details of all policy holders
          </p>
        </div>
        <DataTable columns={columns} data={data} />
      </div>
    </div>
  );
}
