import { connectMongoDB } from '@/libs/mongodb'
import User from '@/models/user'
import { NextRequest, NextResponse } from 'next/server'

export default async function POST(req: NextRequest) {
  try {
    const { name, email, password, image } = await req.json()
    await connectMongoDB()

    await User.create({ name, email, password, image, provider: 'Credential' })
    return NextResponse.json({
      status: 201,
      message: 'User registerd',
    })
  } catch (error) {
    return NextResponse.json({
      error: 500,
      message: 'An error occured while registered the user',
    })
  }
}
