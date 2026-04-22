import { Phone, Send, MessageCircle, LucideIcon } from "lucide-react";
import Container from "./ui/Container";
type IconsData = {
  title: string,
  icon: LucideIcon
}
export default function Contact() {
  const IconsData: IconsData[] = [
    {
      title: "Viber",
      icon: Phone
    },
    {
      title: "Telegram",
      icon: Send
    },
    {
      title: "WhatsApp",
      icon: MessageCircle
    },
  ]
  return (
    <section className="py-16 bg-primary md:py-24">
      <Container>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1fr] gap-16 items-center">
          <div>
            <div className="flex flex-col items-center gap-4 text-center">
              <h3 className=" text-2xl  uppercase tracking-widest font-cormorant font-medium md:text-3xl mb-2">Feel free to call us</h3>
              <p className="font-cormorant text-center    text-neutral-800 text-xl md:text-2xl" >We are always happy to help you book or answer any questions</p>
              <a
                href="tel:+13054444444"
                className="text-4xl md:text-5xl font-medium tracking-wide md:tracking-wider transition hover:text-[#a87c7c] mt-2"
              >
                +1 305 444 4444
              </a>
            </div>


            <div className="flex justify-center gap-16 pt-12">

              {IconsData.map((icon, index) => {
                const Icon = icon.icon;
                return (
                  <a href="#" className="flex flex-col items-center gap-2 group" key={index}>
                    <div className="w-14 h-14 flex items-center justify-center rounded-full border border-[#c79d90] text-[#A88989] transition-colors duration-300 group-hover:bg-[#A88989] group-hover:text-white group-hover:shadow-md">

                      <Icon className="w-6 h-6 md:w-8 md:h-8"
                        strokeWidth={1.5}
                      />
                    </div>
                    <span className="text-sm tracking-wide text-gray-700 transition-colors duration-300 group-hover:text-[#A88989]">{icon.title}</span>
                  </a>
                )
              })}


            </div>
          </div>

         <div >
  
  

</div>
        </div>
      </Container>
    </section>
  );
}