'use client'

import { useSearchParams } from 'next/navigation'

export default async function Page() {
  const searchParams = useSearchParams()

  const error = searchParams.get('error')

  return <div>{error}</div>
}
