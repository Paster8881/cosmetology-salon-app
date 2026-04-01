"use client";
import { Menu } from "lucide-react";

import { useEffect, useState } from "react";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 z-50 w-full px-6 py-6 md:px-10 transition-[background-color,backdrop-filter] duration-300 ${scrolled
        ? "bg-secondary backdrop-blur"
        : "bg-transparent"
        }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between">
        <div className=" font-cormorant leading-none text-[#3E2A1F]">
          <h1 className="text-[#3E2A1F] text-xl font-medium tracking-wide">Beauty
            Salon</h1>

        </div>

        <button className="p-2  text-[#8A786A]" aria-label="Open menu">
          <Menu size={22}
            strokeWidth={1.5}
          />
        </button>
      </div>
    </header>
  );
}