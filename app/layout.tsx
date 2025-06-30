import type { Metadata } from 'next'
import { ChakraProvider } from '@chakra-ui/react'
import { Inter } from 'next/font/google'
import '@fontsource/sora'
import '@fontsource/iosevka/800.css'
import './globals.css'
import customTheme from '@/styles/theme'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Vincent Arlou - Developer, writer, a stranger',
  description: 'Fullstack developer with a focus on designing and building scalable, maintainable and accessible solutions on the web.',
  authors: [{ name: 'Vincent Arlou', url: 'https://vincentarlou.com' }],
  keywords: ['developer', 'fullstack', 'react', 'nextjs', 'typescript'],
  openGraph: {
    title: 'Vincent Arlou - Developer, writer, a stranger',
    description: 'Fullstack developer with a focus on designing and building scalable, maintainable and accessible solutions on the web.',
    url: 'https://vincentarlou.com',
    siteName: 'Vincent Arlou',
    images: [
      {
        url: 'https://vincentarlou.com/static/images/banner.png',
        width: 1200,
        height: 630,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Vincent Arlou - Developer, writer, a stranger',
    description: 'Fullstack developer with a focus on designing and building scalable, maintainable and accessible solutions on the web.',
    images: ['https://vincentarlou.com/static/images/banner.png'],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ChakraProvider theme={customTheme}>
          {children}
        </ChakraProvider>
      </body>
    </html>
  )
}