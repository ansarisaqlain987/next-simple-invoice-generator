"use client";
import { Button } from "@/components/ui/button";
import { DataTable } from "./data-table";
import { useRouter } from "next/navigation";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { getColumns } from "./columns";
import { useState } from "react";
import { deleteClient } from "@/app/actions/clients";
import { useAlertDialog } from "@/app/hooks/useAlertDialog";
import { useGetInvoices } from "@/db/queries/useGetInvoices";

const ClientPage = () => {
  const router = useRouter();
  const { data: invoiceData, refetch } = useGetInvoices();
  console.log(invoiceData);
  const [dId, setDId] = useState<string | null>(null);
  const onDelete = (id: string) => {
    setDId(id);
  };

  const onDeleteClick = () => {
    if (dId) {
      deleteClient(dId).then(() => refetch());
    }
  };
  const { isOpen, setIsOpen } = useAlertDialog();
  const columns = getColumns({ openDialog: setIsOpen, onDelete }) as any;
  return (
    <div>
      <AlertDialog open={isOpen} onOpenChange={setIsOpen}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
            <AlertDialogDescription>
              This action cannot be undone. This will permanently delete your
              account and remove your data from our servers.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction onClick={onDeleteClick}>
              Continue
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
      <div className="flex mb-4">
        <div className="flex flex-1 text-xl items-center font-semibold">
          <div>Invoices</div>
        </div>
        <Button
          className="px-6"
          onClick={() => {
            router.push("/dashboard/clients/new");
          }}
        >
          Add
        </Button>
      </div>
      <div className="h-[80vh] overflow-auto mt-4">
        <DataTable columns={columns} data={[]} />
      </div>
    </div>
  );
};

export default ClientPage;
