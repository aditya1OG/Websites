import './globals.css'
import { Inter } from 'next/font/google'
import TopNavbar from '@/components/TopNavbar'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Foody',
  description: 'Explore delicious journeys at Tasty Tales – a place where each dish shares a yummy story on your plate.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body id='home' className={inter.className}>
        <TopNavbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
