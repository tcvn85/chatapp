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

      <div className="mb-6">
        <label
          htmlFor="email"
          className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
        >
          Your email
        </label>
        <input
          type="email"
          id="email"
          className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
          placeholder="name@yourmail.com"
          required
        />
      </div>
      <div className="mb-6">
        <label
          htmlFor="password"
          className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
        >
          Your password
        </label>
        <input
          type="password"
          id="password"
          className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
          required
        />
      </div>
      <div className="mb-6 flex items-start">
        <div className="flex h-5 items-center">
          <input
            id="remember"
            type="checkbox"
            value=""
            className="focus:ring-3 h-4 w-4 rounded border border-gray-300 bg-gray-50 focus:ring-blue-300 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-blue-600 dark:focus:ring-offset-gray-800"
            required
          />
        </div>
        <label
          htmlFor="remember"
          className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
        >
          Remember me
        </label>
      </div>

      <button
        type="submit"
        className="mb-5 w-full rounded-lg bg-blue-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 sm:w-auto"
      >
        Submit
      </button>

      <div>
        <Link href="/signup">Sign Up</Link>
        {' | '}
        <Link href="/forgot-pass">Forgot password</Link>
      </div>
    </div>
  )
}
