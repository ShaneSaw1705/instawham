'use client'
import React from 'react';
import { Post } from '@/models/post';
import axios from 'axios';
import { useRouter } from 'next/navigation';

interface Props {
  post: Post
  currentUserId: any
}

const PostComponent: React.FC<Props> = ({ post, currentUserId }) => {
  const router = useRouter()
  const handleDelete = async () => {
    await axios.delete(`api/posts/${post.id}`);
    router.refresh()
  };

  return (
    <div className='flex flex-col w-[70%] m-auto my-3 min-h-[300px] bg-slate-400 text-slate-100 px-3 py-2'>
      <h1 className='border-b-2 border-cyan-800'>{post.title}</h1>
      <p>{post.content}</p>
      {post.user_id === currentUserId && (
        <button onClick={handleDelete} className='hover:text-red-500'>
          delete post
        </button>
      )}
    </div>
  );
};

export default PostComponent;
