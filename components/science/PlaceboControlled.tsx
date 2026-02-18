export function PlaceboControlled(){
    return (
        <section className="bg-[#f6f5f1] px-4 py-8 md:py-20 lg:py-6">
        <div className="mx-auto max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-26 items-center">

          {/* LEFT CONTENT */}
          <div className="lg:mr-10">
            <h2 className="text-4xl  lg:ml-0 md:text-5xl font-semibold text-gray-900 lg:p-2">
              7 placebo-controlled <br className="hidden md:block" />
              clinical studies
            </h2>

            <p className="mt-4 lg:mt-0 text-lg md:text-base text-gray-700 leading-relaxed lg:p-2">
              For over 15 years, we have pioneered meaningful scientific discoveries
              on Urolithin A and put them to the scrutiny of the scientific community
              by publishing in high impact, peer-reviewed journals.
            </p>

            <button className="mt-4 inline-flex items-center lg:gap-85 gap-55 bg-[#2b2b26] w-full text-white lg:px-2 px-4 py-2 text-sm font-medium rounded-md hover:bg-black transition">
              OUR STUDIES
              <span className="text-3xl ">→</span>
            </button>
          </div>

          {/* RIGHT IMAGE */}
          <div className="flex justify-center lg:ml-10 md:justify-end w-full">
            <img
              src="https://images.unsplash.com/photo-1581090700227-1e37b190418e?auto=format&fit=crop&w=600&q=80"
              alt="Scientific pipette"
              className="w-full  h-full object-contain"
            />
          </div>

        </div>

        {/* BOTTOM TEXT */}
        <div className="mt-6 text-center">
          <h3 className="text-4xl md:text-4xl font-semibold text-gray-900">
            Life-Altering Science™
          </h3>
        </div>
      </section>
    )
}