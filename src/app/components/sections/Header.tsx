"use client";
import { Menu } from "lucide-react";
import MenuOverlay from "./MenuOverlay";
import Navbar from "../ui/Navbar";
import { useEffect, useState } from "react";





export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [clicked, setClicked] = useState(false);

  function toggleMenu() {
    setClicked(prev => !prev)

  }
  ///scroll block
  useEffect(() => {
    if (clicked) {

      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }
  }, [clicked])



  ///scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // sroll to top
  function srollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  return (
    <>
      <header
        className={`fixed top-0 left-0 z-50 w-full px-6 py-6 transition-[background-color,backdrop-filter] duration-300 ${scrolled
          ? "bg-white/40 backdrop-blur-sm"
          : "bg-transparent"
          }`}
      >
        <div className="max-w-550 mx-auto px-6 md:px-10 lg:px-16">
          <div className="flex flex-row  justify-between lg:grid lg:grid-cols-[auto_1fr_auto] lg:items-center">
            <div className=" font-cormorant leading-none text-[#3E2A1F] justify-self-start">
              <button onClick={srollToTop}>
                <h1 className="text-[#3E2A1F] text-xl font-medium tracking-wide md:text-3xl lg:text-3xl ">Beauty
                  Salon</h1>
              </button>
            </div>

            <div className="justify-self-center hidden lg:block">
            <Navbar>
            </Navbar>
            </div>
            

            <button onClick={toggleMenu}>
              <Menu strokeWidth={1.5} className="w-5 h-5 md:w-8 md:h-8 lg:hidden" />
            </button>
          </div>
      </div>
      </header>

      {clicked && <MenuOverlay toggleMenu={toggleMenu} />}
    </>
  );
}