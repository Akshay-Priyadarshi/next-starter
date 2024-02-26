import type { Metadata } from "next"
import { Poppins, Raleway } from "next/font/google"
import "./globals.css"
import { cn } from "@/lib/utils"

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
      <body className={cn(raleway.className, poppins.className, "mx-20")}>
        {children}
      </body>
    </html>
  )
}
