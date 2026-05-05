"use client"
import { getServices } from "@/src/app/lib/services"
import { getCategories } from "@/src/app/lib/categories";
import { Category } from "@/src/app/types/сategory";
import { Service } from "@/src/app/types/service";
import { useEffect, useMemo, useState } from "react";
import ServiceCard from "./ServiceCard"

export default function ServiceList() {
  const [services, setServices] = useState<Service[]>([]);
  const [categories, setCategories] = useState<Category[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedServiceId, setSelectedServiceId] = useState<number[]>([]);


  const groupServices = useMemo(() => {
    const gropedServices = Object.groupBy(services, s => s.categoryId);
    return Object.entries(gropedServices);
  }, [services])

  //getsersrvice
  useEffect(() => {
    getServices().then(setServices)
  }, [])

  ///get category
  useEffect(() => {
    getCategories().then(setCategories);
  }, [])

  function handleCategories(clickedCategories: string | null) {
    setSelectedCategory(clickedCategories);
  }
  function setSelectedServices(clickedServiceId: number) {
    setSelectedServiceId(prev => {
      if (prev.includes(clickedServiceId)) {
        return prev.filter(id => id !== clickedServiceId)
      }
      return [...prev, clickedServiceId]
    })
  }
  ///render all

  ///render choose categori

  // console.log("services", groupServices);

  let filteredServices: Service[] = [];
  let grouptedServices: [string, Service[] | undefined][] = [];
  if (selectedCategory === null) {
    grouptedServices = groupServices;
    console.log('groupservices', grouptedServices);
  } else {
    filteredServices = services.filter(service => service.categoryId === selectedCategory)
  }

  return (
    <>
      <div className="sticky top-0 z-10 bg-white my-4">
        <div className="scroll-container flex gap-3 overflow-x-auto mt-2">
          <button className="px-4 py-2 bg-gray-400 rounded-full whitespace-nowrap cursor-pointer" onClick={() => handleCategories(null)}>All</button>
          {categories.map((categori, index) => (
            <button
              key={index}
              className={selectedCategory === categori.id ? "px-4 py-2 bg-gray-200 rounded-full whitespace-nowrap cursor-pointer" : "px-4 py-2 bg-gray-400 rounded-full whitespace-nowrap cursor-pointer"}
              onClick={() => handleCategories(categori.id)}
            >
              {categori.id}
            </button>
          ))}
        </div>
      </div>



      {selectedCategory === null
        ?
        grouptedServices.map(([categoriId, services], index) => {
          return (
            <div key={index}>
              <h2 className="lg:text-xl mt-4">{categoriId}</h2>
              {services?.map((service) => (
                <ServiceCard key={service.id}
                  title={service.title}
                  price={service.price}
                  selected={selectedServiceId.includes(service.id)}
                  onClick={() => setSelectedServices(service.id)}
                ></ServiceCard>
              ))}
            </div>
          )
        })
        :
        filteredServices.map((filteredService, index) => (
          <>
            {index === 0 ? <h2 className="lg:text-xl mt-4">{filteredService.categoryId}</h2> : ""}
            <ServiceCard key={filteredService.id}
              title={filteredService.title}
              price={filteredService.price}
              selected={selectedServiceId.includes(filteredService.id)}
              onClick={() => setSelectedServices(filteredService.id)}
            ></ServiceCard>
          </>
        ))
      }




    </>
  )
}