"use client";

import { Button } from "@/components/ui/button";
import { ColumnDef } from "@tanstack/react-table";
import { ArrowUpDown, MoreHorizontal } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Link from "next/link";
import { Dispatch, SetStateAction } from "react";

export type UserDetails = {
  id: string;
  user: string;
  name: string;
  description: string;
  createdAt: Date;
  updatedAt: Date;
  amount: number;
};

export type Props = {
  onDelete?: (id: string) => void;
  openDialog?: Dispatch<SetStateAction<boolean>>;
};
export const getColumns = ({openDialog, onDelete}: Props) => {
  const columns: ColumnDef<UserDetails, any>[] = [
    {
      accessorKey: "name",
      size: 100,
      header: ({ column }) => {
        return (
          <Button
            variant="ghost"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
            className="pl-0"
          >
            Name
            <ArrowUpDown className="h-4 w-4 ml-2" />
          </Button>
        );
      },
    },
    {
      accessorKey: "description",
      header: "Description",
      size: 100,
    },
    {
      accessorKey: "amount",
      size: 100,
      header: ({ column }) => {
        return (
          <Button
            variant="ghost"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
            className="pl-0"
          >
            Amount
            <ArrowUpDown className="h-4 w-4 ml-2" />
          </Button>
        );
      },
      cell: ({ row }) => {
        return <>0</>;
      },
    },
    {
      id: "actions",
      cell: ({ row }) => {
        return (
          <div className="flex flex-row-reverse">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="h-8 w-8 p-0">
                  <span className="sr-only">Open menu</span>
                  <MoreHorizontal className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <Link href={`/dashboard/clients/${row.original.id}`}>
                  <DropdownMenuItem>Edit</DropdownMenuItem>
                </Link>
                <DropdownMenuItem onClick={() => {onDelete?.(row.original.id); openDialog?.(true)}}>Delete</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        );
      },
    },
  ];
  return columns;
};
