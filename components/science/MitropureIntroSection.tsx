"use client"

export function MitropureIntroSection(){
return(
    <section className="w-full h-[40vh] lg:min-h-screen flex justify-center items-center">
        <div className="flex flex-col items-center justify-center px-5 py-10  p-6 ">

          <h1 className="text-3xl sm:text-3xl md:text-6xl lg:text-7xl 
                    font-medium text-gray-900 leading-snug text-center">
            Peak performance is a 
            <div className="flex justify-center w-max h-65px">
              <div className="inline-flex items-center text-3xl lg:text-7xl font-medium ">
                <span className="lg:ml-28 ml-8">biological code</span>
              </div>
            </div>
          </h1>
          <div className="lg:w-[100vh] w-full p-4 mt-6">
            <p className="lg:text-2xl ">Your program is flawless, but cellular firmware degrades. 
              MUSCULAR PRO™ is the update that rewires your cellular engine through 
              Mitophagy and Autophagy, delivering sustained power output and mental edge.*</p>
          </div>
        </div>
      </section>
)
}