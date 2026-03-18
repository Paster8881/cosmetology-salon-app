import Link from "next/link";

export default function Home() {
  return (
    <>
      <header className="bg-white rounded-t-3xl border-b border-neutral-200">
        <div className="mx-auto flex max-w-sm items-center justify-between px-4 py-4">
            <div className="flex flex-col items-start leading-none text-sm font-semibold italic text-neutral-900">
              <span>Beauty</span>
              <span>Salon</span>
            </div>
      

          <div className="flex items-center gap-4">
          
            <button
              type="button"
              aria-label="Open menu"
              className="text-3xl leading-none text-neutral-900"
            >
              ☰
            </button>
          </div>
        </div>
      </header>
      {/* Hero */}
      
    </>
  )
}