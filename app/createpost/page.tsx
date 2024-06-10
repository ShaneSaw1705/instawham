// pages/CreatePost.tsx
import React from 'react';
import { currentUser } from '@clerk/nextjs/server';
import CreatePostClient from '../../components/createPostClient';

export default async function CreatePost() {
  const user = await currentUser();

  return <CreatePostClient userId={user?.id || ''} />;
}
