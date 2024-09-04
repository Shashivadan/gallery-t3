"use client"

import "~/styles/globals.css";

import { GeistSans } from "geist/font/sans";
import TopNav from "~/components/top-nav";
import { ClerkProvider } from "@clerk/nextjs";


export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <ClerkProvider>
      <html lang="en" className={`${GeistSans.variable}`}>

        <body>
          <TopNav />
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
