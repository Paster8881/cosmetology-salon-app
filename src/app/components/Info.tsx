import { LucideIcon, MessageSquareMore, Gift, BrushCleaning, Award  } from "lucide-react"
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
      title: "Book anytime",
      describe: "Message us on WhatsApp to book an appointment, and we will find a convenient time for you."
    },
    {
      icon: Gift,
      title: "Gift Certificates",
      describe: "Give the gift of beauty and care. We’ll help you select the perfect option for any occasion."
    },
    {
      icon: BrushCleaning,
      title: "Commitment to Safety",
      describe: "Every tool is thoroughly disinfected, and only advanced, certified equipment is used to deliver the highest standards of care."
    },
    {
      icon: Award ,
      title: "Experienced Specialist",
      describe: "With years of hands-on experience, we provide professional care tailored to your individual needs."
    },
  ]
  return (
    <>
      <section className="bg-primary py-16 lg:py-40">
        <Container>
          <ul className="flex flex-col gap-8 list-none md:grid md:grid-cols-2 md:gap-16 lg:grid lg:grid-cols-4 lg:gap-16">
            {infoDatas.map((infodata, index) => {
              const Icon = infodata.icon;

              return (
                <li key={index}>
                  <div className="flex items-start gap-4 lg:gap-6">

                    <div className="p-4 bg-secondary rounded-xl shadow-lg">
                      <Icon
                        className="w-5 h-5 text-neutral-700 lg:w-7 lg:h-7"
                        strokeWidth={1.25}
                        fill="#EAD0C9"
                      />
                    </div>

                    <div className="max-w-md lg:max-w-5xl">
                      <div className="font-cormorant text-xl text-neutral-950 md:text-2xl mb-2 font-medium leading-6 ">
                        {infodata.title}
                      </div>

                      <div className="font-sans text-sm text-neutral-600 leading-7 md:text-base font-normal lg:text-xl">
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