export function PowerByMitoPure(){
    return (
        <section className="w-full mt-6 ">

        <div className="lg:hidden w-full  mx-auto rounded-xl overflow-hidden shadow-lg">

          {/* Image */}
          <img
            src="https://cdn.sanity.io/images/bxsu76x0/timeline-nutrition/8c611702abdea847d301886430526fc7180c3e84-2800x739.jpg?rect=1,0,2799,739&w=1920&h=507&q=80&fit=crop&auto=format"
            alt="Banner"
            className="w-full h-[220px] object-fit"
          />

          {/* Content */}
          <div className="bg-[#1f2430] p-6 text-center">

            <p className="text-white text-sm mb-3">
              Powered by{" "}
              <span className="bg-[#C2483F] px-2 py-1 rounded text-xs ml-1">
                mitopure®
              </span>
            </p>

            <h2 className="text-white text-xl font-medium leading-snug">
              Change how your cells age.
            </h2>

            <p className="text-gray-400 text-base mt-2">
              Explore our science-backed longevity solutions.
            </p>

            <button className="mt-5 px-6 py-2 bg-white text-black text-sm rounded hover:bg-gray-200 transition">
              SHOP SUPPLEMENTS
            </button>

          </div>
        </div>


        <div
          className="hidden lg:flex w-full h-[400px] bg-cover bg-center items-center"
          style={{
            backgroundImage:
              "url('https://cdn.sanity.io/images/bxsu76x0/timeline-nutrition/8c611702abdea847d301886430526fc7180c3e84-2800x739.jpg?rect=1,0,2799,739&w=1920&h=507&q=80&fit=crop&auto=format')",
          }}
        >
          <div className="grid mx-2">

            <div className="flex h-15 w-55">
              <h1 className="text-white text-[18px]">
                Powered by{" "}
                <span className="bg-[#C2483F] text-white text-[16px] p-1 rounded-md mx-2">
                  mitopure®
                </span>
              </h1>
            </div>

            <div className="w-full max-w-xl text-xl sm:text-3xl">
              <h1 className="text-white">
                Change how your cells age. Explore our
              </h1>

              <h1 className="text-gray-500">
                science-backed longevity solutions.
              </h1>
            </div>

            <div className="group bg-white w-42 h-10 p-2 px-3 mt-4 rounded-sm hover:bg-gray-500">
              <button className="text-[13px] text-black group-hover:text-white">
                SHOP SUPPLEMENTS
              </button>
            </div>

          </div>
        </div>

      </section>
    )
}