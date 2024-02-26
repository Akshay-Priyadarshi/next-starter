import Link from "next/link"
import React from "react"

const Menubar = () => {
  return (
    <ul className="hidden md:flex md:justify-between md:items-center">
      <li className="mr-8">
        <Link href={"/"}>Home</Link>
      </li>
      <li>
        <Link href={"/about"}>About</Link>
      </li>
    </ul>
  )
}

export default Menubar
