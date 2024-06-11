import React from 'react'
import { SignedIn, SignedOut, SignInButton } from '@clerk/nextjs'
import { currentUser } from '@clerk/nextjs/server'
import { Post } from '@/models/post'
import PostComponent from '@/components/PostComponent'

export default async function MyPosts() {
  const user = await currentUser()
  const res = await fetch(`http://localhost:3000/api/posts/users/?user_id=${user?.id}`)
  const posts: Post[] = await res.json()
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
              {posts.map(post => <PostComponent currentUserId={user?.id} key={post.id} post={post} />)}
            </ul>
          </div>
        </div>
      </SignedIn>
    </div>
  )
}
