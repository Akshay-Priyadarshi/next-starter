import { HamburgerMenuIcon, Cross1Icon } from "@radix-ui/react-icons"
import React from "react"
import Menubar from "./menubar"
import { ModeToggle } from "./mode-toggle"
import { Button } from "./ui/button"
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetFooter,
  SheetClose
} from "./ui/sheet"

const ModalMenubar = () => {
  return (
    <Sheet>
      <div className={"flex flex-row space-x-4"}>
        <ModeToggle />
        <SheetTrigger asChild>
          <Button className={"md:hidden"} variant={"outline"} size={"icon"}>
            <HamburgerMenuIcon />
          </Button>
        </SheetTrigger>
      </div>
      <SheetContent
        className={"bg-popover opacity-90 h-fit py-20"}
        side={"right"}
      >
        <Menubar className={"flex flex-col space-y-10"} />
        <SheetFooter>
          <SheetClose asChild>
            <Button
              className={"absolute top-8 right-8"}
              variant={"outline"}
              size={"icon"}
            >
              <Cross1Icon />
            </Button>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  )
}

export default ModalMenubar
