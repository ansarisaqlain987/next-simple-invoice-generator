"use client";
import { Button } from "@/components/ui/button";
import { DataTable } from "./data-table";
import { useRouter } from "next/navigation";
import { useGetClients } from "@/db/queries/useGetClients";
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
import { useAlertDialog } from "@/app/hooks/useAlertDIalog";
import { useState } from "react";
import { deleteClient } from "@/app/actions/clients";

const ClientPage = () => {
  const router = useRouter();
  const { data: clientData, refetch } = useGetClients();
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
          <div>Clients</div>
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
        <DataTable columns={columns} data={clientData?.data ?? []} />
      </div>
    </div>
  );
};

export default ClientPage;
