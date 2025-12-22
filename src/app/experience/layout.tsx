import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '../globals.css'
import Navbar from '../navbar'


const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: "Experience",
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
