"use client";

import Image from "next/image";

interface Advisor {
  name: string;
  title: string;
  role: string | string[];
  bio: string;
  imageSrc: string;
}

const advisors: Advisor[] = [
  {
    name: "Dr. Johan Auwerx \nMD, PhD",
    title: "Scientific Advisor",
    role: "Scientific Advisor",
    bio: "Professor Johan Auwerx directs the Laboratory for Integrated and Systems Physiology at École Polytechnique Fédérale (EPFL) in Lausanne, Switzerland.",
    imageSrc: "/images/science/advisor-1.jpg", // Placeholder
  },
  {
    name: "Dr. Patrick Aebischer, MD",
    title: "Chairman, Scientific Advisory Board",
    role: ["Chairman, Scientific", "Advisory Board"],
    bio: "Professor Patrick Aebischer, chairman and co-founder of Amazentis, is a medical doctor, neuroscientist and longtime researcher.",
    imageSrc: "/images/science/advisor-1.jpg", // Placeholder
  },
  {
    name: "Dr. Carmen Sandi, \nPhD",
    title: "Scientific Advisor",
    role: "Scientific Advisor",
    bio: "Director, Brain and Mind Institute and Professor at the EPFL, Lausanne, Switzerland | Neurobehavioral science and stress related brain disorders.",
    imageSrc: "/images/science/advisor-1.jpg", // Placeholder
  },
  {
    name: "Eric Verdin, MD",
    title: "CEO Buck Institute for Research on Aging",
    role: ["CEO Buck Institute for", "Research on Aging,", "Scientific Advisor"],
    bio: "Dr. Eric M. Verdin, is a leading authority on aging research and metabolic science, has been at the helm of the Buck Institute for Research on Aging as its President and CEO since 2016.",
    imageSrc: "/images/science/advisor-1.jpg", // Placeholder
  },
];

export function ScientificAdvisorsSection() {
  return (
    <section className="w-full bg-white py-10 md:py-20 border-t border-neutral-200">
      <div className="w-full px-4 md:px-6"> 
        {/* Full width container: removed max-w-[1440px] */}
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-start justify-between gap-8 md:gap-20 mb-16 md:mb-20">
          <h2 className="text-[1.8rem] md:text-[2.5rem] leading-[1.1] font-normal text-black tracking-tight max-w-2xl">
            All made possible by a team of leading scientists
          </h2>
          <p className="text-sm md:text-base text-neutral-600 leading-relaxed max-w-xl self-end md:self-start">
            We are supported by the knowledge and guidance of an accomplished group of scientific and clinical advisors with expertise spanning microbiome science, genomics, metabolomics, gastroenterology, immunology, nutrition, dermatology and human clinical research.
          </p>
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-neutral-200 mb-10 md:mb-12" />

        {/* Subheader */}
        <h3 className="text-xs font-bold text-neutral-500 uppercase tracking-widest mb-8 md:mb-12">
          SCIENTIFIC AND CLINICAL ADVISORS
        </h3>

        {/* Grid: Fixed to 4 columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-12">
          {advisors.map((advisor, index) => (
            <div key={index} className="flex flex-col group cursor-pointer">
              {/* Image Container */}
              <div className="relative w-full aspect-[4/5] mb-6 bg-neutral-100 overflow-hidden">
                <Image 
                  src={advisor.imageSrc} 
                  alt={advisor.name}
                  fill
                  className="object-cover object-center grayscale group-hover:grayscale-0 transition-all duration-500"
                  onError={(e) => {
                     e.currentTarget.style.display = 'none';
                     e.currentTarget.parentElement!.classList.add('bg-neutral-200');
                  }}
                />
                
                {/* Fallback Icon */}
                <div className="absolute inset-0 flex items-center justify-center text-neutral-300 -z-10">
                   <span className="sr-only">{advisor.name}</span>
                   <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path></svg>
                </div>
              </div>

              {/* Content */}
              <div className="flex flex-col">
                <div className="flex justify-between items-start mb-1 h-[48px]">
                   <h4 className="font-bold text-black text-lg leading-tight pr-2 whitespace-pre-line">
                     {advisor.name}
                   </h4>
                   <span className="text-neutral-400 text-xl leading-none font-light group-hover:text-black transition-colors">+</span>
                </div>

                <div className="mt-2 min-h-[3rem] text-sm font-normal text-neutral-500 leading-tight">
                   {Array.isArray(advisor.role) ? (
                     advisor.role.map((r, i) => (
                       <p key={i}>{r}</p>
                     ))
                   ) : (
                     <p>{advisor.role}</p>
                   )}
                </div>

                <p className="mt-4 text-sm text-neutral-500 leading-relaxed font-light">
                  {advisor.bio}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
