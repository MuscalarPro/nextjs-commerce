"use client";

import React from "react";
import Image from "next/image";

export function ActivationTimelineGraph() {
  return (
    <div className="w-full bg-[#F7F8F2] py-8 md:py-12">
      <div className="mx-auto max-w-[1340px] px-4 md:px-6 ">
        <div className="relative w-full aspect-[16/9] md:aspect-[21/9] overflow-hidden rounded-xl">
          <Image
            src="https://cdn.shopify.com/s/files/1/0732/2556/8425/files/Graph_5_05db0675-1027-4369-ba1b-fd9204241d39.png?v=1779877580"
            alt="Activation Timeline Graph"
            fill
            className="object-c"
            priority
          />
        </div>
      </div>
    </div>
  );
}
