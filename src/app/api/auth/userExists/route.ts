import { connectMongoDB } from '@/libs/mongodb'
import User from '@/models/user'
import { NextRequest, NextResponse } from 'next/server'

export default async function POST(req: NextRequest) {
  try {
    const { email } = await req.json()
    await connectMongoDB()
    const user = await User.findOne({ email }).select('_id')
    return NextResponse.json({ user })
  } catch (error) {
    console.log(error)
  }
}
