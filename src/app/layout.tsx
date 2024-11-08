import localFont from "next/font/local";
import { cookies } from "next/headers";
import { Analytics } from "@vercel/analytics/react";
import { SidebarProvider } from "@/client/components/ui/sidebar";

import type { Metadata } from "next";

import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900"
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900"
});

export const metadata: Metadata = {
  title: {
    template: "%s | Nest.js + Next.js | Minimal UI - Dashboard",
    default: "Nest.js + Next.js | Minimal UI - Dashboard"
  },
  description: "Generated by create Next.js 15"
};

export default async function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  const cookieStore = await cookies();
  const defaultOpen = cookieStore.get("sidebar:state")?.value === "true";

  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} relative antialiased`}
      >
        <SidebarProvider defaultOpen={defaultOpen}>{children}</SidebarProvider>
      </body>
      <Analytics />
    </html>
  );
}
