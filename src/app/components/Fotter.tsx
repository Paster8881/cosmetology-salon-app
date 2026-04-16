import { Clock6, Smartphone, MapPin, LucideIcon } from "lucide-react"
import Container from "./ui/Container"
type IconData = {
  icon: LucideIcon,
  title: string,
  descriptions: string[]
}
export default function Footer() {
  const iconsData: IconData[] = [
    {
      icon: Clock6,
      title: "Time",
      descriptions: [
        "Mon-Sat",
        "From 8am To 5pm",
      ]
    },
    {
      icon: Smartphone,
      title: "Contact",
      descriptions: [
        "P:+1 305 444 4444",
        "Inst:@instexaple",
        "Telegram:@teaxaple",
      ]
    },
    {
      icon: MapPin,
      title: "Adress",
      descriptions: [
        " Key West",
        "some adress exaple",
      ]
    }
  ]
  return (
    <section className="bg-secondary py-12 md:py-30">
      <Container>
        <div className="px-4 flex flex-col items-center gap-15 md:flex md:flex-row md:items-start md:gap-18">

          {iconsData.map((icon, index) => {
            const Icon = icon.icon;
            return (
              <div className="flex flex-col items-center gap-2  md:gap-2" key={index}>
                <div className="flex flex-col items-center  ">
                  <Icon
                    width={34}
                    height={43}
                    strokeWidth={1.5}
                    fill="#EAD0C9"
                    className="md:w-10 md:h-13"
                  />
                </div>
                <h6 className="font-semibold uppercase tracking-widest text-gray-700 md:text-lg">{icon.title}</h6>
                <div className="flex flex-col items-center gap-1 mt-1">
                  {icon.descriptions.map((desciption, index) => (
                    <div key={index}>
                      <p className="tracking-widest text-base ">
                        <a className="ml-1.5" href="./">
                          {desciption}
                        </a>
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )
          })}

        </div>
      </Container>
    </section>
  )
}