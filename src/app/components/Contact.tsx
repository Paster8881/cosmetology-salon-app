import { Phone, Send, MessageCircle } from "lucide-react";
export default function Contact() {
  return (
    <section className="py-16 bg-primary md:py-24">
      <div className="mx-auto max-w-4xl px-4 flex flex-col items-center gap-6">
        <div className="flex flex-col items-center gap-4 text-center">
          <h3 className=" text-2xl  uppercase tracking-widest font-cormorant font-medium">Feel free to call us</h3>
          <p className="font-cormorant text-center   text-neutral-800 text-xl" >We are always happy to help you book or answer any questions</p>
          <a
            href="tel:+13054444444"
            className="text-4xl md:text-5xl font-medium tracking-wide transition hover:text-[#a87c7c]"
          >
            +1 305 444 4444
          </a>
        </div>


        <div className="flex justify-center gap-8">

          {/* Viber */}
          <a href="#" className="flex flex-col items-center gap-2 group">
            <div className="w-14 h-14 flex items-center justify-center rounded-full border border-[#D6BFB8] text-[#A88989] transition-colors duration-300 group-hover:bg-[#A88989] group-hover:text-white group-hover:shadow-md">
              <Phone 
              size={22}
              strokeWidth={1.5}
              />
            </div>
            <span className="text-sm text-neutral-500 transition-colors duration-300 group-hover:text-[#A88989]">Viber</span>
          </a>

          {/* Telegram */}
          <a href="#" className="flex flex-col items-center gap-2 group">
            <div className="w-14 h-14 flex items-center justify-center rounded-full border border-[#D6BFB8] text-[#A88989] transition-colors duration-300 group-hover:bg-[#A88989] group-hover:text-white group-hover:shadow-md">
              <Send size={24}
                strokeWidth={1.5}
              />
            </div>
            <span className="text-sm text-neutral-500 transition-colors duration-300 group-hover:text-[#A88989]">Telegram</span>
          </a>

          {/* WhatsApp */}
          <a href="#" className="flex flex-col items-center gap-2 group">
            <div className="w-14 h-14 flex items-center justify-center rounded-full border border-[#D6BFB8] text-[#A88989] transition-colors duration-300 group-hover:bg-[#A88989] group-hover:text-white group-hover:shadow-md">
              <MessageCircle
                size={24}
                strokeWidth={1.5}
              />
            </div>
            <span className="text-sm text-neutral-500 transition-colors duration-300 group-hover:text-[#A88989]">WhatsApp</span>
          </a>

        </div>
      </div>
    </section>
  );
}