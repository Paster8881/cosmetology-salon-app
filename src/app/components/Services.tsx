import Image from "next/image";
export default function Services(){
  return(
    <>
      <section className="bg-neutral-300 py-10">
        <div className="max-w-sm mx-auto">
         <div className="text-center mb-8">
          <a
            href="/services"
            className="inline-block text-sm uppercase tracking-[0.2em] border-b border-black pb-1"
          >
            View All Services
          </a>
        </div>
{/* 
        Photo */}
        <div className="space-y-6">
          <a href="/services" className="block bg-white p-3 shadow-sm">
            <Image
              src="/services/kosmetolog.jpg"
              alt="Cosmetology service"
              width={600}
              height={420}
              className="w-full h-65 object-cover"
            />

            <h3 className="mt-3 text-2xl font-cormorant">
              Cosmetology
            </h3>

            <p className="mt-2 text-sm text-neutral-600">
              Gentle skincare treatments for a fresh and healthy glow.
            </p>
          </a>

          <a href="/services" className="block bg-white p-3 shadow-sm">
            <Image
              src="/services/kosmetolog.jpg"
              alt="Facial treatment"
              width={600}
              height={420}
              className="w-full h-65 object-cover"
            />

            <h3 className="mt-3 text-2xl font-cormorant">
              Facial Care
            </h3>

            <p className="mt-2 text-sm text-neutral-600">
              Relaxing and professional facial care tailored to your skin.
            </p>
          </a>


          <a href="/services" className="block bg-white p-3 shadow-sm">
            <Image
              src="/services/kosmetolog.jpg"
              alt="Facial treatment"
              width={600}
              height={420}
              className="w-full h-65 object-cover"
            />

            <h3 className="mt-3 text-2xl font-cormorant">
              Facial Care
            </h3>

            <p className="mt-2 text-sm text-neutral-600">
              Relaxing and professional facial care tailored to your skin.
            </p>
          </a>
        </div>

        
        </div>
      </section>
      
      

    </>
  );
}