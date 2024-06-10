import { NextRequest, NextResponse } from 'next/server'
import { PrismaClient } from '@prisma/client'
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