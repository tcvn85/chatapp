'use client'

import Link from 'next/link'
import { signIn, useSession } from 'next-auth/react'
import { redirect } from 'next/navigation'

export default function Page() {
  const { data: session } = useSession()

  if (session) {
    redirect('/')
  }

  return (
    <div>
      <h1 className="mb-5 text-center text-xl">Login</h1>

      <button
        onClick={() => signIn()}
        className="mb-5 block w-full rounded-lg bg-blue-700 px-5 py-2.5 text-center text-sm font-medium text-white"
      >
        Login with Github
      </button>

      <button
        onClick={() => signIn()}
        className="mb-5 block w-full rounded-lg bg-blue-700 px-5 py-2.5 text-center text-sm font-medium text-white"
      >
        Login with Google
      </button>

      <button
        onClick={() => signIn()}
        className="mb-5 block w-full rounded-lg bg-blue-700 px-5 py-2.5 text-center text-sm font-medium text-white"
      >
        Login with email & password
      </button>

      <div>
        <Link href="/signup">Sign Up</Link>
        {' | '}
        <Link href="/forgot-pass">Forgot password</Link>
      </div>
    </div>
  )
}
