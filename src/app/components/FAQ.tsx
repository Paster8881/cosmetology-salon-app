import Image from "next/image";
import { Plus } from "lucide-react";
export default function FAQ() {
  return (
    <>
      <section className="bg-primary py-12">
        <div className="mx-auto max-w-4xl px-4">
          {/* Picture */}
          <div className="w-full overflow-hidden rounded-xl">
            <Image
              src="/FAQ.jpg"
              alt="Cosmetology service"
              width={600}
              height={400}
              className="w-full h-90 object-cover"
            />
          </div>
        </div>
        <div className="mx-auto max-w-4xl px-4 py-12 ">
          <h2 className="text-start text-2xl  uppercase tracking-widest font-cormorant font-medium">Mosk asked question</h2>
        </div>

        {/* ALl Question */}
        <div className="mx-auto max-w-4xl px-4 ">
          <div className="border-b border-gray-300 border-t">
          <button className="w-full flex justify-between items-center py-4 text-left">
            <span>
              Question 1
            </span> 
                  <Plus>
                    size={20}
                  </Plus>
                 
          </button>
        </div>

        </div>

         <div className="mx-auto max-w-4xl px-4 ">
          <div className="border-b border-gray-300 ">
          <button className="w-full flex justify-between items-center py-4 text-left">
            <span>
              Question 1
            </span> 
                  <Plus>
                    size={20}
                  </Plus>
                 
          </button>
        </div>

        </div>

        <div className="mx-auto max-w-4xl px-4 ">
          <div className="border-b border-gray-300 ">
          <button className="w-full flex justify-between items-center py-4 text-left">
            <span>
              Question 1
            </span> 
                  <Plus>
                    size={20}
                  </Plus>
                 
          </button>
        </div>

        </div>

        <div className="mx-auto max-w-4xl px-4 ">
          <div className="border-b border-gray-300 ">
          <button className="w-full flex justify-between items-center py-4 text-left">
            <span>
              Question 1
            </span> 
                  <Plus>
                    size={20}
                  </Plus>
                 
          </button>
        </div>

        </div>

        <div className="mx-auto max-w-4xl px-4 ">
          <div className="border-b border-gray-300 ">
          <button className="w-full flex justify-between items-center py-4 text-left">
            <span>
              Question 1
            </span> 
                  <Plus>
                    size={20}
                  </Plus>
                 
          </button>
        </div>

        </div>

        <div className="mx-auto max-w-4xl px-4 ">
          <div className="border-b border-gray-300 ">
          <button className="w-full flex justify-between items-center py-4 text-left">
            <span>
              Question 1
            </span> 
                  <Plus>
                    size={20}
                  </Plus>
                 
          </button>
        </div>

        </div>   
      </section>
    </>
  );
}