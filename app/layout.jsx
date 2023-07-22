import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Globaliti Robotic',
  description: 'Globaliti Robotics Engineering and Development [ GRED ] adalah komunitas robotik yang berada di sekolah SMKTI Bali Global Denpasar',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
