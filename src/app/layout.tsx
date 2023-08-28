import '@/styles/globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Provider from '@/utils/provider'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'App Chat',
  description: 'App Chat',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Provider>
          <main>{children}</main>
        </Provider>
      </body>
    </html>
  )
}
