'use client'

import dynamic from 'next/dynamic'

const Header = dynamic(() => import('@/components/header'))
const Footer = dynamic(() => import('@/components/footer'))

export default function Error() {
  return (
    <>
      <Header />
      <div>Server error</div>
      <Footer />
    </>
  )
}
