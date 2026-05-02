import Image from "next/image";
import Container from "../ui/Container";

export default function Brand() {
  const iconsData: string[] = [
    "/brands/1.svg", "/brands/1.svg", "/brands/1.svg", "/brands/1.svg", "/brands/1.svg", "/brands/1.svg", "/brands/1.svg", "/brands/1.svg"
  ]
  return (
    <section className="bg-secondary py-14 px-6 lg:py-24">
      <Container>
        <div className="px-2 py-2 ">
          <h2 className="text-center text-2xl  uppercase tracking-widest font-cormorant font-medium md:text-3xl">Trusted brands of premium quality </h2>
        </div>

        <div className="grid grid-cols-2 gap-x-6 gap-y-8 mt-8 items-center lg:grid-cols-4 lg:pt-10
        ">
          {iconsData.map((icon, index) => (
            <div className="flex justify-center" key={index}>
              <a href="">
                <Image
                  src={icon}
                  alt="Cosmetology service"
                  width={160}
                  height={60}
                  className="grayscale opacity-50 hover:opacity-100 transition"
                />
              </a>
            </div>
          ))}

        </div>
      </Container>
    </section>
  );
}