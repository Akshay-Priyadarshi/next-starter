import Image from "next/image"
import React from "react"
import BrandLogo from "../../public/next.svg"
import Menubar from "./menubar"

const Navbar = () => {
  return (
    <nav className="w-full flex justify-between items-center mb-8">
      <Image className="w-28" src={BrandLogo} alt="brand-logo" />
      <Menubar />
    </nav>
  )
}

export default Navbar
