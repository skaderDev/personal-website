import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Navbar from '../navbar'
import '../globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: "About",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div lang="en">
      <Navbar />
      <div className={inter.className}>{children}</div>
    </div>
  )
}
