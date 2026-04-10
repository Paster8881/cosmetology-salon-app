"use client";
import { Menu } from "lucide-react";
import MenuOverlay from "./MenuOverlay";

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
  function srollToTop(){
    window.scrollTo({ top: 30, behavior: 'smooth' });
  }

  return (
    <>
      <header
        className={`fixed top-0 left-0 z-50 w-full px-6 py-6 md:px-10 transition-[background-color,backdrop-filter] duration-300 ${scrolled
          ? "bg-secondary backdrop-blur"
          : "bg-transparent"
          }`}
      >
        <div className="mx-auto flex max-w-6xl items-center justify-between">
          <div className=" font-cormorant leading-none text-[#3E2A1F]">
            <button onClick={srollToTop}>
              <h1 className="text-[#3E2A1F] text-xl font-medium tracking-wide">Beauty
                Salon</h1>
            </button>
          </div>

          <button onClick={toggleMenu}>
            <Menu size={22} strokeWidth={1.5} />
          </button>


        </div>
      </header>

      {clicked && <MenuOverlay toggleMenu={toggleMenu} />}
    </>
  );
}