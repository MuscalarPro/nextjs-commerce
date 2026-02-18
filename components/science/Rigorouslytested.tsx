export function Rigorouslytested(){
    return (
        <section className="bg-[#f7f6f2]  py-6 md:py-2">
        <div className="m-2 " >

          {/* Heading */}
          <h2 className="text-4xl lg:text-5xl lg:p-2  md:text-4xl font-semibold text-gray-900 lg:ml-0 m-2">
            Rigorously tested and made from high-quality ingredients
          </h2>

          {/* Description */}
          <p className="text-lg lg:text-xl md:text-base text-gray-700 w-full p-2">
            We believe that it's our responsibility to take the extra steps necessary
            to ensure that our products are safe and effective, and we are committed
            to upholding these high standards for all of our dietary supplements.
          </p>

          {/* Divider */}
          <div className="mt-8 border-t border-dotted border-gray-300" />

          {/* List */}
          <div className="mt-4">

            {[
              "Placebo Controlled Clinical Studies",
              "FDA GRAS",
              "NSF for Sports",
              "FSSC 22000",
              "SMETA",
            ].map((item, index) => (
              <div
                key={index}
                className="flex items-center justify-between border-b border-dotted border-gray-300 py-4"
              >
                <span className="text-gray-800 text-xl lg:ml-4 font-medium">{item}</span>
                <span className="text-2xl lg:text-4xl lg:mr-6 font-light">+</span>
              </div>
            ))}

          </div>
        </div>
      </section>
    )
}