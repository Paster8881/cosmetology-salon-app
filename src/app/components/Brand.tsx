import Image from "next/image";
export default function Brand() {
  return (
    <section className="bg-secondary py-14 px-6">
      <div className="max-w-md mx-auto">
        <div className="mx-auto max-w-4xl px-2 py-2">
          <h2 className="text-center text-2xl  uppercase tracking-widest font-cormorant font-medium">Trusted brands of premium quality </h2>
        </div>

        <div className="grid grid-cols-2 gap-x-8 gap-y-10 mt-10 items-center">
          <div className="flex justify-center">
            <a href="">
              <Image
                src="/brands/1.svg"
                alt="Cosmetology service"
                width={160}
                height={60}
                className="grayscale opacity-50"
              />

            </a>
          </div>

          <div className="flex justify-center">
            <a href="">
              <Image
                src="/brands/1.svg"
                alt="Cosmetology service"
                width={160}
                height={60}
                className="grayscale opacity-50"
              />

            </a>
          </div>

          <div className="flex justify-center">
            <a href="">
              <Image
                src="/brands/1.svg"
                alt="Cosmetology service"
                width={160}
                height={60}
                className="grayscale opacity-50"
              />

            </a>
          </div>

          <div className="flex justify-center">
            <a href="">
              <Image
                src="/brands/1.svg"
                alt="Cosmetology service"
                width={160}
                height={60}
                className="grayscale opacity-50"
              />

            </a>
          </div>

          <div className="flex justify-center">
            <a href="">
              <Image
                src="/brands/1.svg"
                alt="Cosmetology service"
                width={160}
                height={60}
                className="grayscale opacity-50"
              />

            </a>
          </div>

          <div className="flex justify-center">
            <a href="">
              <Image
                src="/brands/1.svg"
                alt="Cosmetology service"
                width={160}
                height={60}
                className="grayscale opacity-50"
              />

            </a>
          </div>
          <div className="flex justify-center">
            <a href="">
              <Image
                src="/brands/1.svg"
                alt="Cosmetology service"
                width={160}
                height={60}
                className="grayscale opacity-50"
              />

            </a>
          </div>
          <div className="flex justify-center">
            <a href="">
              <Image
                src="/brands/1.svg"
                alt="Cosmetology service"
                width={160}
                height={60}
                className="grayscale opacity-50"
              />

            </a>
          </div>

        </div>

      </div>
    </section>
  );
}