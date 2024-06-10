import { currentUser } from '@clerk/nextjs/server'
import React from 'react'
import { SignedIn, SignedOut } from '@clerk/nextjs'

export default async function Home() {
  const user = await currentUser()
  return (
    <>
    <SignedIn>
      <div className='w-full h-full flex flex-col justify-start items-center'>
        <h1 className='text-5xl'>Main feed:</h1>
      </div>
    </SignedIn>
    <SignedOut>
      <h1>please sign in to contiune</h1>
    </SignedOut>
    </>
  )
}
