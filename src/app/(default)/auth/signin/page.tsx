import { getProviders } from 'next-auth/react'
import { getServerSession } from 'next-auth/next'
import { redirect } from 'next/navigation'
import ButtonLogin from '@/components/buttonLogin'

export default async function SignIn() {
  const session = await getServerSession()
  if (session) {
    redirect('/')
  }

  const providers = await getProviders()

  return (
    <>
      {providers
        ? Object.values(providers).map((provider) => (
            <div key={provider.id}>
              <ButtonLogin provider={provider} />
            </div>
          ))
        : null}
    </>
  )
}
