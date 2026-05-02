type ServiceCardProps = {
  title: string
  price: number
  selected?: boolean
}

export default function ServiceCard({ title, price, selected }: ServiceCardProps){
  return(
    <>
    
   <div className="flex items-center justify-between bg-[#F6EBE7] rounded-xl p-4 mt-2">
      
      {/* Left side */}
      
      <div>
        <p className="text-sm text-gray-700">{title}</p>
        <p className="text-base font-semibold text-black mt-1">{price}</p>
      </div>
    
      {/* Checkbox */}
      <div
        className={`w-5 h-5 rounded-md flex items-center justify-center 
        ${selected ? "bg-[#E5CFC7]" : "bg-[#EADCD7]"}`}
      >
        {selected && (
          <svg
            className="w-3 h-3 text-black"
            fill="none"
            stroke="currentColor"
            strokeWidth="3"
            viewBox="0 0 24 24"
          >
            <path d="M5 13l4 4L19 7" />
          </svg>
        )}
      </div>
    </div>
    </>
  )
}