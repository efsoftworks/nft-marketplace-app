import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

import Navbar from './component/navbar'
import { Web3ModalProvider } from './context/web3ModalConfig'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'NFT marketplace inspired by OpenSea',
  description: 'This project, marketplace-app, introduces a distinctive NFT marketplace inspired by OpenSea. With powerful smart contracts, complete customization, and secure transactions, it offers a unique platform tailored to your brand. Connect with us to explore the possibilities of this NFT marketplace.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <html lang="en">
        <body className={inter.className}>
          <Web3ModalProvider>
            <Navbar />
            {children}
          </Web3ModalProvider>
        </body>
      </html>
    </>
  )
}
