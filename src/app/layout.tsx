'use client';
import type { Metadata } from "next";
import "./globals.css";
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import { Toaster } from "@/components/ui/toaster";

// export const metadata: Metadata = {
//   title: "Invoice App",
//   description: "Simple invoice app",
// };

const queryClient = new QueryClient();

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={"h-screen"}>
        <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
        <Toaster />
      </body>
    </html>
  );
}
