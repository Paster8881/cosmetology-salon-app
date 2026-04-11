import Container from "./ui/Container";
export default function Hero() {
  return (

    <section className="relative min-h-screen overflow-hidden bg-[#FAF8F5] flex items-center">
      <Container>
        <svg
          className="absolute inset-0 w-full h-full"
          viewBox="0 0 1200 580"
          preserveAspectRatio="xMidYMid slice"
          xmlns="http://www.w3.org/2000/svg"
        >
          <ellipse cx="900" cy="290" rx="420" ry="380" fill="#F0E6DA" opacity="0.7" />
          <ellipse cx="1050" cy="180" rx="280" ry="260" fill="#E8DDD0" opacity="0.5" />
          <ellipse cx="820" cy="480" rx="320" ry="200" fill="#EDE0D4" opacity="0.4" />
          <circle cx="980" cy="120" r="140" fill="none" stroke="#D9C9BA" strokeWidth="0.5" opacity="0.6" />
          <circle cx="980" cy="120" r="100" fill="none" stroke="#D9C9BA" strokeWidth="0.5" opacity="0.4" />
          <circle cx="750" cy="350" r="200" fill="none" stroke="#C4B5A5" strokeWidth="0.5" opacity="0.3" />
          <line x1="580" y1="0" x2="680" y2="580" stroke="#C4B5A5" strokeWidth="0.5" opacity="0.25" />
          <ellipse cx="1100" cy="400" rx="180" ry="240" fill="#E8DDD0" opacity="0.35" />
          <text x="1020" y="310" fontFamily="Cormorant Garamond" fontSize="120"
            fontWeight="300" fill="#E8DDD0" opacity="0.4" textAnchor="middle">L</text>
        </svg>

        {/* Content */}
        <div className="relative z-10 max-w-md px-6 py-24 md:max-w-2xl  ">

          <span className="mb-6 flex items-center gap-3 text-[10px] tracking-[0.3em] uppercase text-[#B8966A] font-medium
          before:block before:w-8 before:h-px before:bg-[#B8966A] md:text-xl ">
            Expert Skincare in Key West
          </span>

          <h1 className="mb-5  leading-[0.95] text-5xl md:text-7xl lg:text-8xl">
            Beauty,<br />
            Crafted<br />
            with{" "}
            <em className="text-[#8B6F5E] tracking-wide">
              Care
            </em>
          </h1>



          <div className="flex items-center gap-6 flex-wrap">
            <button className="bg-[#3D2B1F] text-[#FAF8F5] px-8 py-4 text-[11px]
             uppercase font-normal transition hover:bg-[#B8966A] tracking-widest md:px-26 md:text-2xl">
              Book
            </button>
            <button className="flex items-center gap-2 text-[11px] tracking-[0.15em]
            uppercase text-[#7A6356] font-light hover:text-[#3D2B1F] transition group bg-transparent border-none md:text-2xl ">
              Our Services
              <span className="block w-6 h-px bg-current transition-all group-hover:w-9 md:w-20" />
            </button>
          </div>
        </div>
      </Container>
      {/* SVG  */}




    </section>
  );
}