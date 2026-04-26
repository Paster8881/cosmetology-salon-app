"use client"
import { getServices } from "@/src/app/lib/services"
import { Service } from "@/src/app/types/Service";
import { useEffect, useState } from "react";
import ServiceCard from "./ServiceCard"

export default function ServiceList() {
  const [services, setServices] = useState<Service[]>([]);
  useEffect(() => {
    getServices().then(setServices)
  }, [])
  return (
    <>

      <div className="scroll-container flex gap-2 overflow-x-auto cursor-pointer mt-6">
        {services.map(service => (
          <button
            key={service.id}
            className="px-4 py-2 bg-gray-200 rounded-full whitespace-nowrap cursor-pointer"
          >
            {service.category}
          </button>
        ))}
      </div>

      {services.map((service) => (
        <ServiceCard key={service.id}
          title={service.title}
          price={service.price}
          selected={false}
        ></ServiceCard>
      ))}

    </>
  )
}