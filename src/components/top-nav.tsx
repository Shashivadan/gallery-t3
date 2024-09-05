"use client";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import React from "react";
import { UploadButton } from "../utils/uploadthing";
import { useRouter } from "next/navigation";
import SampleUploadButton from "~/app/_components/simple-uploadthing-button";

export default function TopNav() {
  const router = useRouter();
  return (
    <div className="flex h-[68px] w-full items-center justify-between border-b-[1px] border-solid border-white p-6">
      <div>Gallery</div>
      <div className="flex flex-row gap-4">
        <SignedOut>
          <SignInButton />
        </SignedOut>
        <SignedIn>
          <SampleUploadButton />
          <UserButton />
        </SignedIn>
      </div>
    </div>
  );
}
