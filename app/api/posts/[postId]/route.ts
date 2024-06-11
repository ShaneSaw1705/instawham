import { NextRequest, NextResponse } from 'next/server'
import { PrismaClient } from '@prisma/client'
import { PostData } from '@/models/post'
const prisma = new PrismaClient()

export async function DELETE(req: NextRequest) {
  try {
    const path = req.nextUrl.pathname
    const delId = path.split('/').pop();
    const del = await prisma.post.delete({
      where: {
        id: Number(delId)
      }
    })
    return NextResponse.json(del)
  } catch(err) {
    return new NextResponse('Internal server error', {status:500})
  }
}