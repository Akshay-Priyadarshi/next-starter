import React from "react"

const Menubar = () => {
  return (
    <ul className="hidden md:flex md:justify-between md:items-center">
      <li className="mr-8">
        <a href="/">Home</a>
      </li>
      <li>
        <a href="/about">About</a>
      </li>
    </ul>
  )
}

export default Menubar
