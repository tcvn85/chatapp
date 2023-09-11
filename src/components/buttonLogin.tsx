'use client'

import { signIn } from 'next-auth/react'
export default function ButtonLogin({ provider }: any) {
  console.log(provider)
  return (
    <button onClick={() => signIn(provider.id)}>
      Sign in with {provider.name}
    </button>
  )
}
