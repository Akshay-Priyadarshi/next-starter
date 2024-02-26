import Image from "next/image"
import React from "react"
import BrandLogo from "../../public/next.svg"
import Menubar from "./menubar"
import { ModeToggle } from "./mode-toggle"

const Navbar = () => {
  return (
    <nav className="w-full flex justify-between items-center mb-8">
      <Image
        className="w-28 dark:invert"
        src={BrandLogo}
        alt="brand-logo"
        priority
      />
      <Menubar />
      <ModeToggle />
    </nav>
  )
}

export default Navbar
