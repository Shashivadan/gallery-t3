"user client"

import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/nextjs'
import React from 'react'

export default function TopNav() {
  return (
    <div className=' w-full p-6 border-solid border-b-[1px] border-white h-[68px] flex items-center justify-between'>
      <div>
        Gallery
      </div>
      <div>
        <SignedOut>
          <SignInButton />
        </SignedOut>
        <SignedIn>
          <UserButton />
        </SignedIn>
      </div>
    </div>
  )
}

