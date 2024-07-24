"use client"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { useLogin } from "@/db/mutations/useLogin"
import { useToast } from "@/components/ui/use-toast"

const formSchema = z.object({
  email: z.string().min(3, {
    message: "Email must be at least 2 characters.",
  }).refine((val) => /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(val ?? ""), "Please enter a valid email address"),
})
export function Dashboard() {
  const { toast } = useToast()
  const loginMutation = useLogin();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
    },
  });

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    loginMutation.mutate({email: 'test'})
    console.log(values);
    toast({description: 'test value'})
    
  }
  return (
    <div className="w-full h-full flex justify-center">
      <div className="flex items-center justify-center py-12">
        <div className="mx-auto grid w-[350px] gap-6">
          <Card>
            <CardHeader>
              <div className="grid gap-2 text-center">
                <h1 className="text-3xl font-bold">Login</h1>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4">
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Email</FormLabel>
                          <FormControl>
                            <Input placeholder="example@domain.com" {...field} />
                          </FormControl>
                          <FormMessage className="text-xs" />
                        </FormItem>
                      )}
                    />
                    <Button type="submit" className="w-full">Submit</Button>
                  </form>
                </Form>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

export default Dashboard
