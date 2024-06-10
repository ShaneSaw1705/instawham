// components/CreatePostClient.tsx
'use client';

import React, { useState } from 'react';
import { PostData } from '../models/post';

export default function CreatePostClient({ userId }) {
  const [post, setPost] = useState<PostData>({
    title: '',
    content: '',
    user_id: userId
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPost((prevPost) => ({
      ...prevPost,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(post);
    // Add your post submission logic here
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="title">
        Title
        <input id='title' name='title' type="text" value={post.title} onChange={handleChange} />
      </label>
      <label htmlFor="content">
        Content
        <input id='content' name='content' type="text" value={post.content} onChange={handleChange} />
      </label>
      <button type="submit">Post</button>
    </form>
  );
}
