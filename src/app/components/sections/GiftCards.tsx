
import Container from "../ui/Container";
import Image from "next/image";


export default function GiftCards() {
  

  return (

    <section className="py-20 bg-primary">
      <Container>
        <div className="grid grid-cols-1 gap-10 md:grid-cols-[1fr_1fr] lg:grid-cols-[1fr_1.2fr] ">

          {/* LEFT - TEXT */}
          <div className="max-w-105">

            <p className="uppercase tracking-[0.2em] text-sm text-[#a87c7c] lg:text-2xl">
              Gift certificates
            </p>

            <h2 className="text-3xl md:text-4xl font-cormorant mt-4">
              The perfect gift for any occasion
            </h2>

            <p className="mt-6 text-neutral-600 lg:text-base">
              Give your loved ones the experience of beauty and care.
              Our gift certificates can be used for any service in our salon.
            </p>

            <button className="mt-8 px-6 py-3 bg-[#a87c7c] text-white rounded-lg hover:opacity-90 transition">
              Buy gift card
            </button>

          </div>

          {/* RIGHT - IMAGE */}
          <div className="relative w-full">

            <div className="relative w-full h-90 md:h-80 lg:h-120 overflow-hidden rounded-xl">
              <Image
                src="/hz.png"
                alt="Gift card"
                fill
                className="object-cover"
              />
            </div>

          </div>

        </div>
      </Container>





    </section>

  )
}