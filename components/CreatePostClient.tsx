// components/CreatePostClient.tsx
'use client';

import React, { useState } from 'react';
import { PostData } from '../models/post';
import request from 'superagent';
import { useRouter } from 'next/navigation';

interface Props {
  userId: string
}

export default function CreatePostClient(props: Props) {
  const [post, setPost] = useState<PostData>({
    title: '',
    content: '',
    user_id: props.userId
  });
  const router = useRouter()

  const handleChange = (e: { target: { name: any; value: any; }; }) => {
    const { name, value } = e.target;
    setPost((prevPost) => ({
      ...prevPost,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    console.log(post);
    try {
      await request.post('/api/posts').send(post)
      console.log(`Added ${post} to the database`)
      router.push('/')
    } catch(err) {
      console.error(err)
    }
  };

  return (
    <div className='w-full h-screen flex items-center justify-center'>
      <form onSubmit={handleSubmit} className=' flex flex-col gap-2 bg-cyan-800 text-white px-4 py-14 w-[300px]'>
        <label htmlFor="title" className='flex flex-col justify-center items-center'>
          Title
          <input className='text-black rounded-md' id='title' name='title' type="text" value={post.title} onChange={handleChange} />
        </label>
        <label htmlFor="content" className='flex flex-col justify-center items-center'>
          Content
          <input className='text-black flex flex-col items-start justify-start text-start rounded-md h-28' id='content' name='content' type="text" value={post.content} onChange={handleChange} />
        </label>
        <button type="submit">Post</button>
      </form>
    </div>
  );
}
