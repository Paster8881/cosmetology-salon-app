import Image from "next/image";
export default function Brand(){
  return(
    <section className="bg-stone-100 py-14 px-6">
      <div className="max-w-md mx-auto">
        <h2 className="text-4xl font-cormorant text-center leading-tight text-neutral-900">Our best brands </h2>
        
        <div className="grid grid-cols-2 gap-x-8 gap-y-10 mt-10 items-center">
          <div className="flex justify-center">
            <a href="">
          <Image
              src="/brands/avines.jpeg"
              alt="Cosmetology service"
              width={160}
              height={60}
              className=""
          />
        </a>
          </div>
        
          <div className="flex justify-center">
            <a href="">
          <Image
              src="/brands/avines.jpeg"
              alt="Cosmetology service"
              width={160}
              height={60}
              className=""
          />
        </a>
          </div>

          <div className="flex justify-center">
            <a href="">
          <Image
              src="/brands/avines.jpeg"
              alt="Cosmetology service"
              width={160}
              height={60}
              className=""
          />
        </a>
          </div>

          <div className="flex justify-center">
            <a href="">
          <Image
              src="/brands/avines.jpeg"
              alt="Cosmetology service"
              width={160}
              height={60}
              className=""
          />
        </a>
          </div>

          <div className="flex justify-center">
            <a href="">
          <Image
              src="/brands/avines.jpeg"
              alt="Cosmetology service"
              width={160}
              height={60}
              className=""
          />
        </a>
          </div>

          <div className="flex justify-center">
            <a href="">
          <Image
              src="/brands/avines.jpeg"
              alt="Cosmetology service"
              width={160}
              height={60}
              className=""
          />
        </a>
          </div>
          <div className="flex justify-center">
            <a href="">
          <Image
              src="/brands/avines.jpeg"
              alt="Cosmetology service"
              width={160}
              height={60}
              className=""
          />
        </a>
          </div>
          <div className="flex justify-center">
            <a href="">
          <Image
              src="/brands/avines.jpeg"
              alt="Cosmetology service"
              width={160}
              height={60}
              className=""
          />
        </a>
          </div>

        </div>

      </div>
    </section>
  );
}