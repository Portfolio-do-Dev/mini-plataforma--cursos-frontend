// app/layout.tsx
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Header from "./components/header"
import Footer from "./components/footer"

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
      <body className={`${inter.className} bg-gray-50 text-gray-900`}>
        {/* Header global */}
        <Header />

        {/* Conteúdo principal */}
        <main className="min-h-screen max-w-6xl mx-auto px-4 py-8">
          {children}
        </main>

        {/* Footer global */}
        <Footer />
      </body>
    </html>
  )
}
