import "~/styles/globals.css";
import "@uploadthing/react/styles.css";
import { GeistSans } from "geist/font/sans";
import { type Metadata } from "next";
import Providers from "./_components/providers";
import TopNav from "~/components/top-nav";
import { NextSSRPlugin } from "node_modules/@uploadthing/react/next-ssr-plugin/index.cjs";
import { extractRouterConfig } from "uploadthing/server";
import { ourFileRouter } from "./api/uploadthing/core";
import React from "react";
export const metadata: Metadata = {
  title: "gallary",
  description: "gallery",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
  modal,
}: Readonly<{ children: React.ReactNode; modal: React.ReactNode }>) {
  return (
    <html lang="en" className={`${GeistSans.variable}`}>
      <NextSSRPlugin routerConfig={extractRouterConfig(ourFileRouter)} />
      <Providers>
        <body>
          <TopNav />
          {children}
          {modal}
          <div id="modal-root" />
        </body>
      </Providers>
    </html>
  );
}
