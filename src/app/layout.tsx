import 'src/styles/tailwind.css'

import { Nunito } from 'next/font/google'
const nunito = Nunito({ subsets: ['latin'], display: 'swap' })

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={nunito.className}>
        <main  className="purple-dark text-foreground bg-background">
       {children}</main>
      </body>
    </html>
  )
}
