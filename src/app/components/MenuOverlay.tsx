import { X } from "lucide-react"
type Props = {
  toggleMenu: () => void;
}
export default function MenuOverlay({ toggleMenu }: Props) {
  const services = ["Home", "Services", "Gift Cards", "Contact Us", "Book a Consultation"]


  return (
    <>
      {/* menu */}
      <div className="fixed inset-0 z-50 bg-white p-6">
        <button onClick={toggleMenu} >
          <X size={28} color="gray" />
        </button>

        <div className="flex flex-col items-center justify-center h-full text-center space-y-6 text-2xl font-cormorant ">
          <ul className="flex flex-col items-center gap-6 text-3xl">
            {services.map((service, index) => (
              <li key={index}><a>{service}</a></li>
            ))}
          </ul>
        </div>
      </div>
    </>
  )
}