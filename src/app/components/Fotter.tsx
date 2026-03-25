import { Clock6, Smartphone , MapPin } from "lucide-react"
export default function Footer() {
  return (
    <section className="bg-secondary py-12">
      <div className="mx-auto max-w-4xl px-4 flex flex-col items-center gap-15">

        <div className="flex flex-col items-center gap-1">
          <div className="flex flex-col items-center">
            <Clock6
              width={34}
              height={43}
              stroke="black"
              fill="#EAD0C9"
            />
          </div>
          <h6 className="text-base font-semibold uppercase tracking-widest text-gray-700">Time</h6>
          <div className="flex flex-col items-center gap-1">
            <p className="flex gap-1.5">
              <a className="ml-1.5" href="./">
              Mon-Sat
              </a>
            </p>
            <p className="flex gap-1.5">
            <a className="ml-1.5">
              From 8am To 5pm
            </a>
            </p>
            
          </div>
        </div>

        <div className="flex flex-col items-center gap-1">
          <div className="flex flex-col items-center">
            <Smartphone
              width={34}
              height={43}
              stroke="black"
              fill="#EAD0C9"
            />
          </div>
          <h6 className="text-base font-semibold uppercase tracking-widest text-gray-700">Contact</h6>
          <div className="flex flex-col items-center gap-1">
            <p className="flex gap-1.5">
              P:
              <a className="ml-1.5" href="./">
              +1 305 444 4444
              </a>
            </p>
            <p className="flex gap-1.5">
              Inst:
            <a className="ml-1.5">
              @instexaple
            </a>
            </p>

            <p className="flex gap-1.5">
              Telegram:
            <a className="ml-1.5">
              @teaxaple
            </a>
            </p>
            
          </div>
        </div>

        <div className="flex flex-col items-center gap-1">
          <div className="flex flex-col items-center">
            <MapPin
              width={34}
              height={43}
              stroke="black"
              fill="#EAD0C9"
            />
          </div>
          <h6 className="text-base font-semibold uppercase tracking-widest text-gray-700">Adress</h6>
          <div className="flex flex-col items-center gap-1">
            <p className="flex gap-1.5">
              <a className="ml-1.5" href="./">
              Key West 
              </a>
            </p>
            <p className="flex gap-1.5">
            <a className="ml-1.5">
              some adress exaple
            </a>
            </p>
            
          </div>
        </div>

      </div>
    </section>
  )
}