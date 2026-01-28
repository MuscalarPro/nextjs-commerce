"use client";

import { Dialog, Transition } from "@headlessui/react";
import { PlusIcon, XMarkIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import { Fragment, useState } from "react";

interface TeamMember {
  id: string;
  name: string;
  role: string;
  shortBio: string;
  fullBio: string;
  image: string;
}

const teamMembers: TeamMember[] = [
  {
    id: "1",
    name: "Dr. Johan Auwerx MD, PhD",
    role: "Scientific Advisor",
    shortBio:
      "Professor. Johan Auwerx directs the Laboratory for Integrated and...",
    fullBio:
      "Professor. Johan Auwerx directs the Laboratory for Integrated and Systems Physiology at École Polytechnique Fédérale (EPFL) in Lausanne, Switzerland, where he studies the mechanisms that control how metabolisms are controlled and the factors that make them more or less effective. Focusing on longevity, his team is using multiple animal species to test a scientific compound, Urolithin A, which could potentially restore much-needed muscle strength and energy to people as they age. Prof. Auwerx is a scientific advisor to Amazentis.",
    image:
      "https://cdn.shopify.com/s/files/1/0668/1486/9571/files/3995e79f24939d98e7437ed328d784a762511acd-800x1000.avif?v=1768641847",
  },
  {
    id: "2",
    name: "Dr. Patrick Aebischer, MD",
    role: "Chairman, Scientific Advisory Board",
    shortBio:
      "Professor Patrick Aebischer, chairman and co-founder of...",
    fullBio:
      "Professor Patrick Aebischer is the chairman and co-founder of the Scientific Advisory Board. He has an extensive background in neuroscience and gene therapy. His work focuses on viral vectors for gene transfer in the nervous system. He served as the President of EPFL from 2000 to 2016.",
    image:
      "https://cdn.shopify.com/s/files/1/0668/1486/9571/files/3995e79f24939d98e7437ed328d784a762511acd-800x1000.avif?v=1768641847",
  },
  {
    id: "3",
    name: "Dr. Carmen Sandi, PhD",
    role: "Scientific Advisor",
    shortBio: "Director, Brain and Mind Institute and Professor at the EPFL,...",
    fullBio:
      "Dr. Carmen Sandi is the Director of the Brain and Mind Institute and a Professor at the EPFL. Her research focuses on the neurobiological mechanisms of stress and memory, and how they impact social behavior and cognition.",
    image:
      "https://cdn.shopify.com/s/files/1/0668/1486/9571/files/3995e79f24939d98e7437ed328d784a762511acd-800x1000.avif?v=1768641847",
  },
  {
    id: "4",
    name: "Eric Verdin, MD",
    role: "Scientific Advisor",
    shortBio:
      "CEO Buck Institute for Research on Aging, Scientific Advisor",
    fullBio:
      "Dr. Eric Verdin is the CEO of the Buck Institute for Research on Aging and a leading authority on aging research. His laboratory studies the relationship between aging and the immune system, and how metabolism influences the aging process.",
    image:
      "https://cdn.shopify.com/s/files/1/0668/1486/9571/files/3995e79f24939d98e7437ed328d784a762511acd-800x1000.avif?v=1768641847",
  },
];

export function TeamSection() {
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null);

  return (
    <section className="bg-neutral-50 py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="mb-12 text-3xl font-normal text-black md:text-5xl">
          Scientific and clinical advisors
        </h2>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {teamMembers.map((member) => (
            <div
              key={member.id}
              className="group cursor-pointer"
              onClick={() => setSelectedMember(member)}
            >
              <div className="relative mb-4 aspect-[3/4] overflow-hidden bg-neutral-200 grayscale transition-all duration-300 group-hover:grayscale-0">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative pr-8">
                <h3 className="text-lg font-bold leading-tight text-black">
                  {member.name}
                </h3>
                <p className="mt-1 text-sm font-medium text-neutral-500">
                  {member.role}
                </p>
                <button
                  type="button"
                  className="absolute right-0 top-0 text-neutral-400 transition-colors hover:text-black"
                >
                  <PlusIcon className="h-6 w-6" />
                </button>
                <p className="mt-4 text-sm leading-relaxed text-neutral-600 line-clamp-3">
                  {member.shortBio}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Transition show={!!selectedMember} as={Fragment}>
        <Dialog
          as="div"
          className="relative z-50"
          onClose={() => setSelectedMember(null)}
        >
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black/20 backdrop-blur-sm" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-hidden">
            <div className="absolute inset-0 overflow-hidden">
              <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-0 md:pl-10">
                <Transition.Child
                  as={Fragment}
                  enter="transform transition ease-in-out duration-500 sm:duration-700"
                  enterFrom="translate-x-full"
                  enterTo="translate-x-0"
                  leave="transform transition ease-in-out duration-500 sm:duration-700"
                  leaveFrom="translate-x-0"
                  leaveTo="translate-x-full"
                >
                  <Dialog.Panel className="pointer-events-auto w-screen max-w-6xl md:max-w-4xl">
                    <div className="flex h-full flex-col bg-[#F5F5F0] shadow-xl">
                      <div className="flex min-h-0 flex-1 flex-col overflow-y-scroll py-6 md:py-12">
                        <div className="px-4 sm:px-6 md:px-12">
                          <div className="flex items-start justify-between">
                            <div className="text-sm font-medium text-neutral-500">
                              About us <span className="mx-2">/</span> Scientific
                              and clinical advisors
                            </div>
                            <div className="ml-3 flex h-7 items-center">
                              <button
                                type="button"
                                className="relative rounded-md text-neutral-400 hover:text-neutral-500 focus:outline-none"
                                onClick={() => setSelectedMember(null)}
                              >
                                <span className="absolute -inset-2.5" />
                                <span className="sr-only">Close panel</span>
                                <XMarkIcon
                                  className="h-8 w-8"
                                  aria-hidden="true"
                                />
                              </button>
                            </div>
                          </div>
                        </div>
                        <div className="relative mt-6 flex-1 px-4 sm:px-6 md:px-12">
                          {selectedMember && (
                            <div className="grid gap-12 lg:grid-cols-[1fr_1.5fr]">
                              {/* Left Column: Info & Image */}
                              <div className="space-y-8">
                                <div>
                                  <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl">
                                    {selectedMember.name}
                                  </h2>
                                  <p className="mt-2 text-xl text-neutral-500">
                                    {selectedMember.role}
                                  </p>
                                </div>
                                <div className="relative aspect-[4/5] w-full overflow-hidden bg-white grayscale">
                                  <Image
                                    src={selectedMember.image}
                                    alt={selectedMember.name}
                                    fill
                                    className="object-cover"
                                  />
                                </div>
                              </div>

                              {/* Right Column: Bio */}
                              <div className="flex items-center">
                                <p className="text-lg leading-relaxed text-neutral-800 md:text-xl md:leading-loose">
                                  {selectedMember.fullBio}
                                </p>
                              </div>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </Dialog.Panel>
                </Transition.Child>
              </div>
            </div>
          </div>
        </Dialog>
      </Transition>
    </section>
  );
}
