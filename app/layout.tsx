import type { Metadata } from 'next'
import { Inter, Poppins } from 'next/font/google'
import './globals.css'
import Chatbot from '@/components/Chatbot'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
})

const poppins = Poppins({ 
  weight: ['600', '700', '800'],
  subsets: ['latin'],
  variable: '--font-poppins',
})

export const metadata: Metadata = {
  title: 'ABC Pvt Ltd - Digital Solutions & Branding',
  description: 'We create stunning web experiences, powerful mobile apps, and memorable brands that drive growth and engagement.',
  keywords: 'web development, app development, branding, digital solutions',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} ${poppins.variable} font-sans antialiased`}>
        {children}
        <Chatbot />
      </body>
    </html>
  )
}
