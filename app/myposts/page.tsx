import React from 'react'
import { SignedIn, SignedOut, SignInButton } from '@clerk/nextjs'
import { currentUser } from '@clerk/nextjs/server'

export default async function MyPosts() {
  const user = await currentUser()
  return (
    <div>
      <SignedOut>
        <div className='w-full h-full flex flex-col items-center justify-center'>
          <h1>Youre not signed in, sign in <SignInButton>now?</SignInButton></h1>
        </div>
      </SignedOut>
      <SignedIn>
        <div>
          <div>
            <h1>{user?.fullName}</h1>
          </div>
          <div>
            <h1>Previous posts.</h1>
            <ul>
            </ul>
          </div>
        </div>
      </SignedIn>
    </div>
  )
}
