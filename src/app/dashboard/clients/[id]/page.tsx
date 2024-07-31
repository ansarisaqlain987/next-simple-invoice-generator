"use client";
import { Button } from "@/components/ui/button";
import { useParams, useRouter, useSearchParams } from "next/navigation";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useCreateOrUpdateClient } from "@/db/mutations/useCreateOrUpdateClient";
import { createOrUpdateClient } from "@/app/actions/createOrUpdateClient";
import { useToast } from "@/components/ui/use-toast";

const formSchema = z.object({
  name: z.string().min(2).max(100),
  description: z.string().max(400),
});
type Props = {
  id: string | null;
};
const ClientForm = ({ id }: Props) => {
  const mutation = useCreateOrUpdateClient();
  const router = useRouter();
  const { toast } = useToast();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      description: "",
    },
  });

  // 2. Define a submit handler.
  async function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    // await createOrUpdateClient({
    //   id,
    //   name: values.name,
    //   description: values.description,
    // });
    mutation
      .mutateAsync({ id, name: values.name, description: values.description })
      .then((value) => {
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

  return (
    <div className="flex flex-col  w-full  my-6">
      <div className=" w-1/2">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Name</FormLabel>
                  <FormControl>
                    <Input placeholder="Client Name" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="description"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Description</FormLabel>
                  <FormControl>
                    <Input placeholder="Description" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="flex gap-4 ">
              <Button type="submit">Submit</Button>
              <Button
                onClick={() => {
                  router.back();
                }}
                variant={"outline"}
              >
                Cancel
              </Button>
            </div>
          </form>
        </Form>
      </div>
    </div>
  );
};

const EditCarrierPage = () => {
  const { id } = useParams();
  return (
    <>
      {id !== "new" ? "Edit" : "Add New"} Client
      <ClientForm id={id !== "new" ? (id as string) : null} />
    </>
  );
};
export default EditCarrierPage;
