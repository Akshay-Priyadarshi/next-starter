import Link from "next/link"
import React from "react"
import { Button } from "./ui/button"

interface MenubarProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLUListElement>,
    HTMLUListElement
  > {}

const Menubar = ({ ...props }: MenubarProps) => {
  return (
    <ul {...props}>
      <Button variant={"link"} asChild>
        <Link href={"/"}>
          <p className={"text-lg"}>Home</p>
        </Link>
      </Button>
      <Button variant={"link"} asChild>
        <Link href={"/about"}>
          <p className={"text-lg"}>About</p>
        </Link>
      </Button>
    </ul>
  )
}

export default Menubar
