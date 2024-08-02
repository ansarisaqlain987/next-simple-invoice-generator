"use client";
import { useParams, useRouter } from "next/navigation";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useCreateOrUpdateClient } from "@/db/mutations/useCreateOrUpdateClient";
import { useToast } from "@/components/ui/use-toast";
import { CreateOrEditClientsForm, formSchema } from "./createOrEditForm";
import { useGetClientsById } from "@/db/queries/useGetClientById";
import { useEffect } from "react";

type Props = {
  id: string | null;
};
const ClientForm = ({ id }: Props) => {
  const { data, isLoading } = useGetClientsById(id);
  const defaultFormValues = {
    name: "",
    description: "",
  };
  const mutation = useCreateOrUpdateClient();
  const router = useRouter();
  const { toast } = useToast();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: data?.data || defaultFormValues,
  });

  useEffect(() => {
    if (id && data?.data) {
      form.reset(data.data);
    }
  }, [id, data?.data, form]);

  // 2. Define a submit handler.
  async function onSubmit(values: z.infer<typeof formSchema>) {
    mutation
      .mutateAsync({ id, name: values.name, description: values.description })
      .then((value) => {
        console.log("value", value);
        if (value?.error) {
          toast({
            title: "Error",
            description: value.error.message,
            variant: "destructive",
          });
        } else {
          router.back();
        }
      });
  }

  return !isLoading ? (
    <div className="flex flex-col w-full  my-6">
      <div className="w-1/2">
        <CreateOrEditClientsForm
          form={form}
          onSubmit={onSubmit}
          onCancel={() => router.back()}
        />
      </div>
    </div>
  ) : (
    <>Loading</>
  );
};

const EditCarrierPage = () => {
  const { id } = useParams();
  return (
    <>
      {id !== "new" ? "Edit" : "Add New"} Client
      <ClientForm id={id !== "new" ? (id as string) : ""} />
    </>
  );
};
export default EditCarrierPage;
