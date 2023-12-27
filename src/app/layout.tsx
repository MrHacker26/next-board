import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { siteConfig } from '../../config/site'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: 'Next-Board is a task management tool for teams.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
