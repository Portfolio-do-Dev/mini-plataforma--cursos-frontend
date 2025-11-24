// app/layout.tsx
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Header from "../components/header"
import Footer from "../components/footer"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "CNV Courses",
  description: "Soluções digitais e sites profissionais com Next.js e Tailwind.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-gray-50 text-gray-900 min-h-screen flex flex-col`}>
        {/* Header global */}
        <Header />

        {/* Conteúdo principal */}
        <main className="flex-1 w-full">
          {children}
        </main>

        {/* Footer global */}
        <Footer />
      </body>
    </html>
  )
}
