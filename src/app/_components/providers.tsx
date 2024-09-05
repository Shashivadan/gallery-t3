"use client"
import { ClerkProvider, useAuth, useUser } from '@clerk/nextjs';
import React, { useEffect, type PropsWithChildren } from 'react';
import { Toaster } from 'sonner';


import posthog, { PostHog } from 'posthog-js'
import { PostHogProvider } from 'posthog-js/react'
import { userInfo } from 'os';

if (typeof window !== 'undefined') {
  posthog.init(process.env.NEXT_PUBLIC_POSTHOG_KEY!, {
    api_host: process.env.NEXT_PUBLIC_POSTHOG_HOST,
    person_profiles: 'identified_only', // or 'always' to create profiles for anonymous users as well
  })
}


export default function Providers({ children }: PropsWithChildren) {
  return (
    <>
      <ClerkProvider>
        <PostHogProvider>
          <PostHogAuthProvider>
            <Toaster />
            {children}
          </PostHogAuthProvider>
        </PostHogProvider>
      </ClerkProvider>

    </>
  );
}


function PostHogAuthProvider({ children }: PropsWithChildren) {
  const auth = useAuth()
  const user = useUser()
  useEffect(() => {
    if (user.user) {
      posthog.identify(user.user.id, { email: user.user.emailAddresses[0]?.emailAddress })
    } else if (!auth.isSignedIn) {
      posthog.reset()

    }
  }, [auth, user])


  return <>{children}</>
}

