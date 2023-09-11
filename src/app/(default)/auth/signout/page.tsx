'use client'

import { signOut } from 'next-auth/react'

export default function Page() {
  return (
    <div>
      <p>Are you want to sign out?</p>
      <button onClick={() => signOut({ redirect: true, callbackUrl: '/' })}>
        Sign out
      </button>
    </div>
  )
}
