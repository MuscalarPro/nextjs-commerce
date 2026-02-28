"use client";

export function GridCardSection() {
  return (
   <section className="w-full bg-[#faf9f6] py-10 lg:py-20">
        <div className="mx-auto max-w-[1440px] px-4 md:px-8">
          {/* GRID */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 lg:gap-6">
            {/* CARD 1 */}
            <div className="bg-[#f1f0ec] rounded-2xl p-6 lg:p-10 flex flex-col items-center justify-center text-center">
              <img
                src="https://dummyimage.com/80x80/000/fff&text=P"
                alt="Placebo"
                className="mb-4 lg:mb-6"
              />
              <p className="text-xs lg:text-sm tracking-widest text-gray-600">
                PLACEBO-CONTROLLED
              </p>
            </div>

            {/* CARD 2 */}
            <div className="bg-[#f1f0ec] rounded-2xl p-6 lg:p-10 flex flex-col items-center justify-center text-center">
              <img
                src="https://dummyimage.com/80x80/000/fff&text=FDA"
                alt="FDA"
                className="mb-4 lg:mb-6"
              />
              <p className="text-xs lg:text-sm tracking-widest text-gray-600">FDA GRAS</p>
            </div>

            {/* CARD 3 */}
            <div className="bg-[#f1f0ec] rounded-2xl p-6 lg:p-10 flex flex-col items-center justify-center text-center">
              <img
                src="https://dummyimage.com/80x80/000/fff&text=NSF"
                alt="NSF"
                className="mb-4 lg:mb-6"
              />
              <p className="text-xs lg:text-sm tracking-widest text-gray-600">
                NSF CERTIFIED
              </p>
            </div>

            {/* CARD 4 */}
            <div className="bg-[#f1f0ec] rounded-2xl p-6 lg:p-10 flex flex-col items-center justify-center text-center">
              <img
                src="https://dummyimage.com/80x80/000/fff&text=FSSC"
                alt="FSSC"
                className="mb-4 lg:mb-6"
              />
              <p className="text-xs lg:text-sm tracking-widest text-gray-600">
                FSSC 22000
              </p>
            </div>

            {/* CARD 5 */}
            <div className="bg-[#f1f0ec] rounded-2xl p-6 lg:p-10 flex flex-col items-center justify-center text-center">
              <img
                src="https://dummyimage.com/80x80/000/fff&text=SMETA"
                alt="SMETA"
                className="mb-4 lg:mb-6"
              />
              <p className="text-xs lg:text-sm tracking-widest text-gray-600">SMETA</p>
            </div>

            {/* CARD 6 */}
            <div className="bg-[#f1f0ec] rounded-2xl p-6 lg:p-10 flex flex-col items-center justify-center text-center">
              <img
                src="https://dummyimage.com/80x80/000/fff&text=SEDEX"
                alt="Sedex"
                className="mb-4 lg:mb-6"
              />
              <p className="text-xs lg:text-sm tracking-widest text-gray-600">SEDEX</p>
            </div>
          </div>

          {/* FULL CARD */}
          <div className="mt-4 lg:mt-6 bg-[#f1f0ec] rounded-2xl p-8 lg:p-14 flex flex-col items-center text-center">
            <img
              src="https://dummyimage.com/120x80/000/fff&text=ISO"
              alt="ISO"
              className="mb-4 lg:mb-6"
            />
            <p className="text-xs lg:text-sm tracking-widest text-gray-600 leading-relaxed max-w-lg">
              ISO 14001 CERTIFICATION &nbsp;&nbsp; ISO 45001 CERTIFICATION
            </p>
          </div>
        </div>
      </section>
  );
}
