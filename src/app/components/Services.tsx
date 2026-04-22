"use client";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import 'swiper/css/pagination';
import Container from "./ui/Container";

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
    }, {
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
      <section className="bg-secondary py-16 lg:py-30">
        <Container>
          <div className="text-center mb-16">
            <a
              href="/services"
              className="inline-block font-cormorant leading-tight text-sm uppercase tracking-[0.2em] border-b border-gray-300 md:text-xl lg:text-2xl"
            >
              View All Services
            </a>
          </div>

          {/* 
        Photo */}
        
          <ul className="list-none ">
            <Swiper
              slidesPerView={1.15}
              spaceBetween={20}
              resistance={true}
              resistanceRatio={0.9}
              grabCursor={true}
              breakpoints={{
                768: {
                  slidesPerView: 2.15,
                }, 1024: {
                  slidesPerView: 4.15, 
                },
              }}
            >
              {services.map((service, index) => (
                <SwiperSlide key={index} className="h-full">
                  <li>
                    <a href={service.href} className="group block bg-primary shadow-[0_6px_20px_rgba(0,0,0,0.05)] ">
                      <Image
                        src={service.image}
                        alt={service.title}
                        width={600}
                        height={750}
                        className="w-full aspect-3/4 object-cover  transition duration-300 group-hover:brightness-110"
                      />

                      <h3 className="mt-3 text-3xl font-cormorant px-3 lg:text-4xl">
                        {service.title}
                      </h3>

                      <p className="mt-2  text-sm text-neutral-600 leading-relaxed px-4 font-sans ">
                        {service.description}
                      </p>
                    </a>
                  </li>
                </SwiperSlide>
              ))}

            </Swiper>

          </ul>
        </Container>
      </section>



    </>
  );
}