import { LucideIcon, MessageSquareMore, Gift, BrushCleaning } from "lucide-react"
import Container from "./ui/Container"
type InfoDatas = {
  icon: LucideIcon;
  title: string;
  describe: string;
}

export default function Info() {
  const infoDatas: InfoDatas[] = [
    {
      icon: MessageSquareMore,
      title: "Make appoitment any time",
      describe: "Text us any timy and we can chose perfect time for you"
    },
    {
      icon: Gift,
      title: "Make appoitment any time",
      describe: "Text us any timy and we can chose perfect time for you"
    },
    {
      icon: BrushCleaning,
      title: "Make appoitment any time",
      describe: "Text us any timy and we can chose perfect time for you"
    },
    {
      icon: BrushCleaning,
      title: "Make appoitment any time",
      describe: "Text us any timy and we can chose perfect time for you"
    },
  ]
  return (
    <>
      <section className="bg-primary py-16">
        <Container>
          <ul className="flex flex-col gap-8 list-none md:grid md:grid-cols-2 md:gap-16">
            {infoDatas.map((infodata, index) => {
              const Icon = infodata.icon;

              return (
                <li key={index}>
                  <div className="flex items-start gap-4">

                    <div className="p-4 bg-secondary rounded-xl shadow-lg">
                      <Icon
                        className="w-5 h-5 text-neutral-700"
                        strokeWidth={1.25}
                      />
                    </div>

                    <div className="max-w-md">
                      <div className="font-cormorant text-xl text-neutral-950 md:text-2xl mb-2 font-medium leading-6 ">
                        {infodata.title}
                      </div>

                      <div className="font-sans text-sm text-neutral-500 leading-7 md:text-base font-normal">
                        {infodata.describe}
                      </div>
                    </div>

                  </div>
                </li>
              );
            })}
          </ul>
        </Container>
      </section>
    </>
  )
}