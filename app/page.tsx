import { currentUser } from '@clerk/nextjs/server'
import React from 'react'
import { SignedIn, SignedOut } from '@clerk/nextjs'
import request from 'superagent'
import { Post } from '@/models/post'

export default async function Home() {
  const user = await currentUser()
  const res = await fetch('http://localhost:3000/api/posts')
  const posts: Post[] = await res.json()
  const mostRecent = posts.reverse()

  return (
    <>
    <SignedIn>
      <div className='w-full h-full flex flex-col justify-start items-center'>
        <h1 className='text-5xl'>Main feed:</h1>
        <ul>
          {mostRecent.map(post => <li key={post.id}>{post.title}</li>)}
        </ul>
      </div>
    </SignedIn>
    <SignedOut>
      <h1>please sign in to contiune</h1>
    </SignedOut>
    </>
  )
}
