import { Payment, columns } from "./columns";
import { DataTable } from "./data-table"

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
    // ...
]

const ClientPage = () => {
    return <>
        <DataTable columns={columns} data={data} /></>
}

export default ClientPage;