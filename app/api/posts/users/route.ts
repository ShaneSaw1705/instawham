import { NextRequest, NextResponse } from 'next/server'
import { PrismaClient } from '@prisma/client'
import { PostData } from '@/models/post'
const prisma = new PrismaClient()

export async function GET(req: NextRequest) {
  try {
    const userId = req.nextUrl.searchParams.get('user_id')
    const posts = await prisma.post.findMany({
      where: {
        user_id: userId || ''
      }
    })
    return NextResponse.json(posts)
  } catch(err) {
    console.error(err)
    return new NextResponse('Internal server error', {status:500})
  }
}