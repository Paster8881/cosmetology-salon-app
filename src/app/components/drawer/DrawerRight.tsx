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
import { useState } from "react"
import CalendarDrawer from "./CalendarDrawer"
import { Category } from "../../types/сategory"

type Props = {
  open: boolean,
  categories: Category[]
  setOpen: (value: boolean) => void
}

export default function DrawerRight({ open, setOpen , categories }: Props) {
  const [stepSubmit, setStepSubmit] = useState<'service' | 'calendar'>('service')

  function hundleSubmit() {
    setStepSubmit('calendar')
  }
  function hundleBack() {
    setStepSubmit('service')
  }
  function handleClose() {
    setOpen(false);
  }
  return (
    <>
      <Drawer direction="right" open={open} onOpenChange={setOpen}>
        <DrawerContent  >
          <DrawerHeader onClick={hundleBack}>
            <DrawerTitle className="font-cormorant lg:text-2xl ">Beauty Salon</DrawerTitle>
            <DrawerDescription>adress exaple</DrawerDescription>
          </DrawerHeader>

          {stepSubmit === 'service'
            ?
            <div className="no-scrollbar overflow-y-auto px-4">

              <h3 className="lg:text-2xl">Chosee service</h3>
              <ServiceList categories={categories}></ServiceList>
            </div>
            :
            <CalendarDrawer />}

          <DrawerFooter>
            <Button onClick={hundleSubmit}>Submit</Button>
            <DrawerClose asChild>
              <Button variant="outline" onClick={handleClose}>Cancel</Button>
            </DrawerClose>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  )
}