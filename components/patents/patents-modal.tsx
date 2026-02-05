"use client";

import { Dialog, Transition } from "@headlessui/react";
import { XMarkIcon ,ArrowRightIcon} from "@heroicons/react/24/outline";
import { Fragment } from "react";
import Link from "next/link";

export default function PatentsModal({
  isOpen,
  close,
}: {
  isOpen: boolean;
  close: () => void;
}) {
  return (
    <Transition show={isOpen} as={Fragment}>
      <Dialog onClose={close} className="relative z-[100]">
        <Transition.Child
          as={Fragment}
          enter="transition-all ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="transition-all ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black/30 backdrop-blur-sm" aria-hidden="true" />
        </Transition.Child>

        <div className="fixed inset-0 flex items-center justify-center p-4">
          <Transition.Child
            as={Fragment}
            enter="transition-all ease-out duration-300"
            enterFrom="opacity-0 scale-95 translate-y-4"
            enterTo="opacity-100 scale-100 translate-y-0"
            leave="transition-all ease-in duration-200"
            leaveFrom="opacity-100 scale-100 translate-y-0"
            leaveTo="opacity-0 scale-95 translate-y-4"
          >
            <Dialog.Panel className="relative w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 shadow-xl transition-all sm:p-10">
              <button
                onClick={close}
                className="absolute right-4 top-4 text-neutral-400 hover:text-black"
              >
                <XMarkIcon className="h-6 w-6" />
              </button>

              <div className="mt-4">
                <p className="mb-8 text-2xl font-light leading-snug text-neutral-900 sm:text-3xl">
                  Our proprietary ingredient is protected under 50+ patents
                  globally, ensuring the highest quality and exclusivity.
                </p>

                <div className="flex h-32 w-full flex-col justify-center rounded-xl bg-neutral-50 p-6 text-left border border-neutral-100">
                  <span className="text-4xl font-bold text-black">56</span>
                  <span className="text-xs font-bold uppercase tracking-widest text-neutral-500 mt-1">
                    Global Patents 
                  </span>
                   
                </div>
              
              </div>
              
            </Dialog.Panel>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition>
  );
}
