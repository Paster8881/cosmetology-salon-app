'use client'
import Image from "next/image";
import Container from "../ui/Container";
import { Plus, X } from "lucide-react";
import { useState } from "react";
type Item = {
  title: string,
  answer: string
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
    {
      title: "Question 5",
      answer: "Texts are any communication forms designed Texts are any communication forms designed Texts are any communication forms designed"
    },
    {
      title: "Question 6",
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
      <section className="bg-primary py-12 lg:py-26">
        <Container>
          <div className="lg:grid lg:grid-cols-2">
            {/* Picture */}
            <div className="relative w-full aspect-4/3  max-h-125 overflow-hidden rounded-xl">
              <Image
                src="/FAQ.jpg"
                alt=""
                fill
                className="object-cover"
              />
            </div>


            <div>
              <div className="mx-auto max-w-4xl px-4 py-16 lg:py-0">
                <h2 className="text-start text-2xl  uppercase tracking-widest font-cormorant  font-medium md:text-3xl lg:text-center">Frequently Asked Questions</h2>
              </div>

              {/* ALl Question */}
              <div className="mx-auto max-w-4xl px-4 pt-2">

                {questions.map((question, index) => (
                  <div className={`border-b border-gray-300 ${index === 0
                    ? "border-t"
                    : ""
                    }`}
                    key={index}>
                    <button className="w-full flex justify-between items-center py-5 text-left" onClick={() => openMenu(index)} >
                      <span className="md:text-xl">
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
            </div>
          </div>
        </Container>



      </section>
    </>
  );
}