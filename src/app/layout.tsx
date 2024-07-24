import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Invoice App",
  description: "Simple invoice app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={"h-screen"}>{children}</body>
    </html>
  );
}
