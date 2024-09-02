import './globals.css'
import type { Metadata } from 'next'

import Footer from './components/Footer'
import Header from './components/Header'
import Link from 'next/link'

//const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
    title: 'WikiTree',
    description: 'custom wiki front based on wikipedia API',
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
            <body className="flex flex-col justify-center min-h-screen ">
                <Header title="WikiRocket" />
                {children}
                <Footer />
            </body>
        </html>
    )
}
