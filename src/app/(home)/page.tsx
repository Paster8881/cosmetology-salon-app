import Link from "next/link";

export default function Home() {
  return (
    <>
    <main>
       {/* Hero */}
      <section className="bg-neutral-50 py-20 min-h-[90vh] flex items-center">
       <div className="mx-auto max-w-6xl px-6" > 
      
            <h1 className="text-4xl sm:text-5xl font-semibold leading-tight">
              Beauty
              <br/>
              Begins with Care
              <br/>
              and Attention
              </h1>
  
          <div className="mt-8">
            <button className="rounded-full bg-neutral-900 px-6 py-3 text-sm font-medium text-white transition hover:bg-neutral-800" >Book now</button>
          </div>
       </div>

      </section>
    </main>
      
      
    </>
  )
}