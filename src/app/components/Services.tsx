"use client";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import 'swiper/css/pagination';

export default function Services() {
  const services = [
    {
      title: "Cosmetology",
      description: "Gentle skincare for a natural glow.",
      image: "/services/kosmetolog.jpg",
      href: "/services",
    },
    {
      title: "Facial Care",
      description: "Deep hydration and skin renewal.",
      image: "/services/kosmetolog.jpg",
      href: "/services",
    },
    {
      title: "Facial Care",
      description: "Deep hydration and skin renewal.",
      image: "/services/kosmetolog.jpg",
      href: "/services",
    },

  ]
  return (
    <>
      <section className="bg-secondary py-16">
        <div className="max-w-sm mx-auto ">
          <div className="text-center mb-8">
            <a
              href="/services"
              className="inline-block text-sm uppercase tracking-[0.2em] border-b border-gray-300  hover:opacity-90 transition "
            >
              View All Services
            </a>
          </div>
          {/* 
        Photo */}
          <ul className="mx-auto max-w-sm px-4 list-none">
            <Swiper
              slidesPerView={1.15}
              spaceBetween={16}
              className="mySwiper "
            >
              {services.map((service, index) => (
                <SwiperSlide key={index}>
                  <li>
                    <a href={service.href} className="group block bg-primary">
                      <Image
                        src={service.image}
                        alt={service.title}
                        width={600}
                        height={750}
                        className="w-full h-120 object-cover  transition duration-300 group-hover:brightness-110"
                      />

                      <h3 className="mt-4 text-3xl font-cormorant px-4">
                        {service.title}
                      </h3>

                      <p className="mt-2  text-sm text-neutral-600 leading-relaxed px-4 font-sans">
                        {service.description}
                      </p>
                    </a>
                  </li>
                </SwiperSlide>
              ))}


            </Swiper>


          </ul>


        </div>
      </section>



    </>
  );
}