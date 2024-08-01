'use client'
import { Button } from "@/components/ui/button";
import { Payment, columns } from "./columns";
import { DataTable } from "./data-table"
import { useRouter } from 'next/navigation'
import { useGetClients } from "@/db/queries/useGetClients";

const data: Payment[] = [
    {
        id: "728ed52f",
        amount: 100,
        status: "pending",
        email: "q@example.com",
    },
    {
        id: "728ed52f",
        amount: 100,
        status: "pending",
        email: "a@example.com",
    },
    {
        id: "728ed52f",
        amount: 100,
        status: "pending",
        email: "v@example.com",
    },
    {
        id: "728ed52f",
        amount: 100,
        status: "pending",
        email: "b@example.com",
    },
    {
        id: "728ed52f",
        amount: 100,
        status: "pending",
        email: "q@example.com",
    },
    {
        id: "728ed52f",
        amount: 100,
        status: "pending",
        email: "a@example.com",
    },
    {
        id: "728ed52f",
        amount: 100,
        status: "pending",
        email: "v@example.com",
    },
    {
        id: "728ed52f",
        amount: 100,
        status: "pending",
        email: "b@example.com",
    },
    {
        id: "728ed52f",
        amount: 100,
        status: "pending",
        email: "q@example.com",
    },
    {
        id: "728ed52f",
        amount: 100,
        status: "pending",
        email: "a@example.com",
    },
    {
        id: "728ed52f",
        amount: 100,
        status: "pending",
        email: "v@example.com",
    },
    {
        id: "728ed52f",
        amount: 100,
        status: "pending",
        email: "b@example.com",
    },
    {
        id: "728ed52f",
        amount: 100,
        status: "pending",
        email: "q@example.com",
    },
    {
        id: "728ed52f",
        amount: 100,
        status: "pending",
        email: "a@example.com",
    },
    {
        id: "728ed52f",
        amount: 100,
        status: "pending",
        email: "v@example.com",
    },
    {
        id: "728ed52f",
        amount: 100,
        status: "pending",
        email: "b@example.com",
    },
    {
        id: "728ed52f",
        amount: 100,
        status: "pending",
        email: "q@example.com",
    },
    {
        id: "728ed52f",
        amount: 100,
        status: "pending",
        email: "a@example.com",
    },
    {
        id: "728ed52f",
        amount: 100,
        status: "pending",
        email: "v@example.com",
    },
    {
        id: "728ed52f",
        amount: 100,
        status: "pending",
        email: "b@example.com",
    },
    {
        id: "728ed52f",
        amount: 100,
        status: "pending",
        email: "q@example.com",
    },
    {
        id: "728ed52f",
        amount: 100,
        status: "pending",
        email: "a@example.com",
    },
    {
        id: "728ed52f",
        amount: 100,
        status: "pending",
        email: "v@example.com",
    },
    {
        id: "728ed52f",
        amount: 100,
        status: "pending",
        email: "b@example.com",
    },
    // ...
]

const ClientPage = () => {
    const router = useRouter();
    const {data: clientData} = useGetClients();
    console.log(clientData)
    return <div>
        <div className="flex mb-4">
            <div className="flex flex-1 text-xl items-center font-semibold">
                <div>Clients</div>
            </div>
            <Button className="px-6" onClick={() => {
                router.push('/dashboard/clients/new');
            }}>Add</Button>
        </div>
        <div className="h-[80vh] overflow-auto mt-4">
            <DataTable columns={columns} data={clientData?.data ?? []} />
        </div>
    </div>
}

export default ClientPage;