import dynamic from 'next/dynamic'

const Header = dynamic(() => import('@/components/header'))
const Footer = dynamic(() => import('@/components/footer'))

export default function DefaultLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  )
}
