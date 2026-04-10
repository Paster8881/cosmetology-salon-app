import { LucideIcon, MessageSquareMore, Gift, BrushCleaning } from "lucide-react"
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
        <div className="mx-auto max-w-4xl px-4 flex flex-col items-start">
          <ul className="flex flex-col gap-8 list-none">
            {infoDatas.map((infodata, index) => {
              const Icon = infodata.icon;

              return (
                <li key={index}>
                  <div className="flex items-start gap-4">

                    <div className="p-3 bg-secondary rounded-xl shadow-sm">
                      <Icon
                        className="w-5 h-5 text-neutral-700"
                        strokeWidth={1.25}
                      />
                    </div>

                    <div className="max-w-md">
                      <div className="font-cormorant text-xl text-neutral-950 ">
                        {infodata.title}
                      </div>

                      <div className="font-sans text-sm text-neutral-600 leading-7">
                        {infodata.describe}
                      </div>
                    </div>

                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </section>
    </>
  )
}