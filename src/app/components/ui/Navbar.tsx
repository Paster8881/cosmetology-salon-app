export default function Navbar(){
  const services = ["Home", "Services", "Gift Cards", "Contact Us", "Book a Consultation", "Carier"]
  return(
    <nav className="hidden lg:flex text-[#4A3A2F] tracking-wide text-lg">
      <ul className="flex gap-16">
        {services.map((service , index) => (
           <li key={index} className="flex flex-row items-center whitespace-nowrap">
            {service}
          </li>
        ))}
       
      </ul>
    </nav>
  )
}