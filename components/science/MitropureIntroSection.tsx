"use client"

export function MitropureIntroSection(){
return(
    <section className="w-full h-[40vh] lg:min-h-screen flex justify-center items-center">
        <div className="flex items-center justify-center px-5 py-12  p-6 ">

          <h1 className="text-2xl sm:text-3xl md:text-6xl lg:text-7xl 
                    font-medium text-gray-900 leading-snug text-center">
            Mitopure® is the
            <div className="flex justify-center w-max h-65px">
              <div className="inline-flex items-center text-2xl lg:text-7xl font-medium ">

                <span>supplement</span>

                <span className="w-14 h-12 sm:w-24 sm:h-24 flex-shrink-0">
                  <img
                    src="https://cdn.sanity.io/images/bxsu76x0/timeline-nutrition/354783ebfd041f0c941c51a750ac446148d17831-1200x1200.png?w=3840&h=3840&q=80&fit=crop&auto=format"
                    alt="Mitopure"
                    className="w-full h-full object-contain"
                  />
                </span>
                <span>that changes</span>

              </div>
            </div>
            how cells age.

          </h1>
        </div>
      </section>
)
}