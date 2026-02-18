export function Certification(){
    return (
        <section className="w-full bg-[#faf9f6] px-4 lg:px-6 md:px-12 py-10 lg:py-20">
        <div className="w-full">

          {/* GRID */}
          <div className="grid grid-cols-3 md:grid-cols-3 gap-1 lg:gap-6">

            {/* CARD 1 */}
            <div className="bg-[#f1f0ec] rounded-2xl p-10 flex flex-col items-center justify-center text-center">
              <img
                src="https://dummyimage.com/80x80/000/fff&text=P"
                alt="Placebo"
                className="mb-6"
              />
              <p className="text-sm tracking-widest text-gray-600">
                PLACEBO-CONTROLLED
              </p>
            </div>

            {/* CARD 2 */}
            <div className="bg-[#f1f0ec] rounded-2xl p-10 flex flex-col items-center justify-center text-center">
              <img
                src="https://dummyimage.com/80x80/000/fff&text=FDA"
                alt="FDA"
                className="mb-6"
              />
              <p className="text-sm tracking-widest text-gray-600">FDA GRAS</p>
            </div>

            {/* CARD 3 */}
            <div className="bg-[#f1f0ec] rounded-2xl p-10 flex flex-col items-center justify-center text-center">
              <img
                src="https://dummyimage.com/80x80/000/fff&text=NSF"
                alt="NSF"
                className="mb-6"
              />
              <p className="text-sm tracking-widest text-gray-600">
                NSF CERTIFIED
              </p>
            </div>

            {/* CARD 4 */}
            <div className="bg-[#f1f0ec] rounded-2xl p-10 flex flex-col items-center justify-center text-center">
              <img
                src="https://dummyimage.com/80x80/000/fff&text=FSSC"
                alt="FSSC"
                className="mb-6"
              />
              <p className="text-sm tracking-widest text-gray-600">FSSC 22000</p>
            </div>

            {/* CARD 5 */}
            <div className="bg-[#f1f0ec] rounded-2xl p-10 flex flex-col items-center justify-center text-center">
              <img
                src="https://dummyimage.com/80x80/000/fff&text=SMETA"
                alt="SMETA"
                className="mb-6"
              />
              <p className="text-sm tracking-widest text-gray-600">SMETA</p>
            </div>

            {/* CARD 6 */}
            <div className="bg-[#f1f0ec] rounded-2xl p-10 flex flex-col items-center justify-center text-center">
              <img
                src="https://dummyimage.com/80x80/000/fff&text=SEDEX"
                alt="Sedex"
                className="mb-6"
              />
              <p className="text-sm tracking-widest text-gray-600">SEDEX</p>
            </div>
          </div>

          {/* FULL CARD */}
          <div className="mt-2 lg:mt-6  bg-[#f1f0ec] rounded-2xl p-14 flex flex-col items-center text-center">
            <img
              src="https://dummyimage.com/120x80/000/fff&text=ISO"
              alt="ISO"
              className="lg:mb-6 mb-2 "
            />
            <p className="text-sm tracking-widest text-gray-600">
              ISO 14001 CERTIFICATION &nbsp;&nbsp; ISO 45001 CERTIFICATION
            </p>
          </div>

        </div>
      </section>
    )
}