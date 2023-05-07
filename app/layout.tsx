"use client"
import { ChakraProvider } from '@chakra-ui/react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] })

//export const metadata = {
//  title: 'ChakraUI Test',
//  description: 'Created by Joseph Williams',
//}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ChakraProvider>
          <Navbar />
          {children}
          <Footer />
          </ChakraProvider>
      </body>
    </html>
  )
}