import Image from "next/image"
import React from "react"
import BrandLogo from "../../public/next.svg"
import Link from "next/link"
import ModalMenubar from "./modal-menubar"
import Menubar from "./menubar"

const Navbar = () => {
  return (
    <nav className="w-full flex justify-between items-center mb-8">
      <Link href={"/"}>
        <Image
          className="w-24 dark:invert"
          src={BrandLogo}
          alt="brand-logo"
          priority
        />
      </Link>
      <div className={"flex flex-row items-center space-x-8"}>
        <ModalMenubar />
        <Menubar className="hidden md:flex space-x-8" />
      </div>
    </nav>
  )
}

export default Navbar
