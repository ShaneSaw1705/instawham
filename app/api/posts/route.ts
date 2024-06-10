import { NextRequest, NextResponse } from 'next/server'
import { PrismaClient } from '@prisma/client'
import { PostData } from '@/models/post'
const prisma = new PrismaClient()

export async function GET() {
  try {
    const res = await prisma.post.findMany()
    return NextResponse.json(res)
  } catch(err) {
    console.error(err)
    return new NextResponse('Internal server error', {status : 500})
  }
}

export async function POST(req: NextRequest) {
  try {
    const postData: PostData = await req.json()
    const post = await prisma.post.create({ data: postData })
    return NextResponse.json(post)
  }catch(err) {
    return new NextResponse('Internal server error', {status : 500})
  }
}