import './globals.css'
import { Inter } from 'next/font/google'
import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import TopNavbar from '@/components/Topnavbar'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Portfolio',
  description: "Welcome to my front-end developer portfolio. I'm a passionate and aspiring front-end developer showcasing my projects and dedication to creating engaging web experiences. Explore my work in HTML, CSS, and JavaScript,  and modern front-end frameworks and libraries like(Reactjs, Next.js and Tailwind), and also witness my journey as I learn and grow in the world of web development. Let's connect and collaborate to bring fresh ideas to the digital realm."
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <TopNavbar/>
        {children}
        <Footer />
      </body>
    </html>
  )
}
