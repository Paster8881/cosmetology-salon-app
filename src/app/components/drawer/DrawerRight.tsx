import { Button } from "@/src/app/components/ui/button"
import ServiceList from "./ServiceList"

import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
} from "@/src/app/components/ui/drawer"

type Props = {
  open: boolean,
  setOpen: (value: boolean) => void
}

export default function DrawerRight({ open, setOpen }: Props) {
  function handleClose() {
    setOpen(false);
  }
  return (
    <>
      <Drawer direction="right" open={open} onOpenChange={setOpen}>
        <DrawerContent>
          <DrawerHeader>
            <DrawerTitle className="font-cormorant lg:text-2xl ">Beauty Salon</DrawerTitle>
            <DrawerDescription>adress exaple</DrawerDescription>
          </DrawerHeader>
          <div className="no-scrollbar overflow-y-auto px-4">
            <h3 className="lg:text-2xl">Chosee service</h3>
            <div className="relative">
              <input
                type="text"
                placeholder="Find Service"
                className="w-full pl-10 pr-4 py-2 rounded-xl border bg-gray-50 outline-none"
              />
            </div>
            <ServiceList></ServiceList>
            
           
            
          </div>
          <DrawerFooter>
            <Button>Submit</Button>
            <DrawerClose asChild>
              <Button variant="outline" onClick={handleClose}>Cancel</Button>
            </DrawerClose>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  )
}