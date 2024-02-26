import type { Metadata } from "next"
import { Poppins, Raleway } from "next/font/google"
import "./globals.css"
import { cn } from "@/lib/utils"
import Navbar from "@/components/navbar"
import Providers from "./providers"

const poppins = Poppins({ subsets: ["latin"], weight: ["400", "700"] })
const raleway = Raleway({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Next Starter",
  description: "Created by Akshay Priyadarshi"
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={cn(raleway.className, poppins.className, "m-8")}>
        <Providers>
          <Navbar />
          {children}
        </Providers>
      </body>
    </html>
  )
}
