'use client';
import Link from "next/link"
import {
  CircleUser,
  Menu,
  Package2,
  Search,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Input } from "@/components/ui/input"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import "./globals.css";
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import { Toaster } from "@/components/ui/toaster";
import { usePathname } from 'next/navigation'


const items = [{
  name: "Dashboard",
  link: "/dashboard",
}, {
  name: "Clients",
  link: "/dashboard/clients",
}, {
  name: "Invoices",
  link: "/dashboard/invoices",
}]

const dropDownItems = [{
  name: "Settings",
  link: "/settings"
}, {
  name: "Support",
  link: "/support"
}, {
  name: "",
  link: ""
}, {
  name: "Logout",
  link: "/logout",
}]

const queryClient = new QueryClient();
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname()
  return (
    <html lang="en">
      <body className={"h-screen"}>
        {
          pathname === "/logout"
            ? <>{children}</>
            : <div className="flex min-h-screen w-full flex-col">
              <header className="sticky top-0 flex h-16 items-center gap-4 border-b bg-background px-4 md:px-6">
                <nav className="hidden flex-col gap-6 text-lg font-medium md:flex md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-6">
                  <Link
                    href="/dashboard"
                    className="flex items-center gap-2 text-lg font-semibold md:text-base"
                  >
                    <Package2 className="h-6 w-6" />
                    <span className="sr-only">Acme Inc</span>
                  </Link>
                  {
                    items.map(item => (<Link
                      href={item.link}
                      className="text-foreground transition-colors hover:text-foreground"
                      key={item.name}
                    >
                      {item.name}
                    </Link>))
                  }
                </nav>
                <Sheet>
                  <SheetTrigger asChild>
                    <Button
                      variant="outline"
                      size="icon"
                      className="shrink-0 md:hidden"
                    >
                      <Menu className="h-5 w-5" />
                      <span className="sr-only">Toggle navigation menu</span>
                    </Button>
                  </SheetTrigger>
                  <SheetContent side="left">
                    <nav className="grid gap-6 text-lg font-medium">
                      <Link
                        href="/dashboard"
                        className="flex items-center gap-2 text-lg font-semibold"
                      >
                        <Package2 className="h-6 w-6" />
                        <span className="sr-only">Acme Inc</span>
                      </Link>
                      {
                        items.map(item => (
                          <Link href={item.link} className="hover:text-foreground" key={item.name}>
                            {item.name}
                          </Link>
                        ))
                      }
                    </nav>
                  </SheetContent>
                </Sheet>
                <div className="flex w-full items-center gap-4 md:ml-auto md:gap-2 lg:gap-4">
                  <form className="ml-auto flex-1 sm:flex-initial">
                    <div className="relative">
                      <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                      <Input
                        type="search"
                        placeholder="Search products..."
                        className="pl-8 sm:w-[300px] md:w-[200px] lg:w-[300px]"
                      />
                    </div>
                  </form>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="secondary" size="icon" className="rounded-full">
                        <CircleUser className="h-5 w-5" />
                        <span className="sr-only">Toggle user menu</span>
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      {
                        dropDownItems.map(item => {
                          if (item.name === "") {
                            return <DropdownMenuSeparator key={item.name} />;
                          }
                          return <Link key={item.name} href={item.link}><DropdownMenuLabel key={item.name}>{item.name}</DropdownMenuLabel></Link>
                        })
                      }
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
              </header>
              <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-8">
                <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
                <Toaster />
              </main>
            </div>
        }
      </body>
    </html>
  )
}