import { Phone, Send, MessageCircle } from "lucide-react";
export default function Contact(){
  return(
    <section>
       <div className="flex justify-center gap-6 mt-6">
      
      {/* Viber */}
      <div className="flex flex-col items-center">
        <div className="w-16 h-16 flex items-center justify-center rounded-full border border-amber-300 text-amber-300">
          <Phone size={28} />
        </div>
        <p className="mt-2 text-sm text-neutral-400">Viber</p>
      </div>

      {/* Telegram */}
      <div className="flex flex-col items-center">
        <div className="w-16 h-16 flex items-center justify-center rounded-full border border-amber-300 text-amber-300">
          <Send size={28} />
        </div>
        <p className="mt-2 text-sm text-neutral-400">Telegram</p>
      </div>

      {/* WhatsApp */}
      <div className="flex flex-col items-center">
        <div className="w-16 h-16 flex items-center justify-center rounded-full border border-amber-300 text-amber-300">
          <MessageCircle size={28} />
        </div>
        <p className="mt-2 text-sm text-neutral-400">WhatsApp</p>
      </div>

    </div>
    </section>
  )
}