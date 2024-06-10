import React from 'react'
import { Post } from '@/models/post'

interface Props {
  post: Post
}

export default function PostComponent(props: Props) {
  return (
    <div className='flex flex-col w-[70%] m-auto my-3 min-h-[300px] bg-slate-400 text-slate-100 px-3 py-2'>
      <h1 className=' border-b-2 border-cyan-800'>{props.post.title}</h1>
      <p>{props.post.content}</p>
    </div>
  )
}
