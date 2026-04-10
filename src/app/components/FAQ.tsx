'use client'
import Image from "next/image";
import { Plus, X } from "lucide-react";
import { useState } from "react";
type Item = {
  title: string,
  answer:string
}

export default function FAQ() {


  const questions: Item[] = [
    {
      title: "Question 1",
      answer: "Texts are any communication forms designed Texts are any communication forms designed Texts are any communication forms designed"
    },
    {
      title: "Question 2",
      answer: "Texts are any communication forms designed Texts are any communication forms designed Texts are any communication forms designed"
    },
    {
      title: "Question 3",
      answer: "Texts are any communication forms designed Texts are any communication forms designed Texts are any communication forms designed"
    },
    {
      title: "Question 4",
      answer: "Texts are any communication forms designed Texts are any communication forms designed Texts are any communication forms designed"
    },
  ]
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  function openMenu(index: number) {
    if (activeIndex === index) {
      setActiveIndex(null);
    } else {
      setActiveIndex(index);
    }
  }
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

          {questions.map((question, index) => (
            <div className="border-b border-gray-300 " key={index}>

              <button className="w-full flex justify-between items-center py-4 text-left" onClick={() => openMenu(index)} >
                <span>
                  {question.title}
                </span>
                {activeIndex === index
                  ? <X>
                    size={20}
                  </X>
                  : <Plus>
                    size={20}
                  </Plus>}
              </button>
              {activeIndex === index && (
                <div className="pb-6 leading-7 mt-2 max-w-md">
                  <p className="">{question.answer}</p>
                </div>
              )}
            </div>
          ))}

        </div>


      </section>
    </>
  );
}