"use client";

import React from "react";
import { StickyBanner } from "@/components/ui/sticky-banner";
import { MoveRight } from "lucide-react";

interface BannerProps {
  onClose?: () => void;
}

export default function Banner({ onClose }: BannerProps) {
  return (
    <div className="relative flex w-full flex-col items-center overflow-y-auto">
      <StickyBanner className="bg-black w-full" onClose={onClose} hideOnScroll>
        <div className="max-w-fit mx-auto pr-7 md:pr-0 text-white drop-shadow-md flex items-center justify-center text-center space-x-2">
          <span className="hidden md:block font-medium whitespace-nowrap">Meet the team</span>

          <div className="h-px w-2 bg-white self-center hidden md:block " />

          <span className="text-[#A3A3A3]  text-xs md:text-base  whitespace-nowrap">
            Let BB handle your financial situation, so you don’t have to.
          </span>

          <div className="h-px w-2 bg-white self-center hidden md:block" />

          <span className="whitespace-nowrap  text-xs md:text-base font-medium inline-flex items-center group cursor-pointer">
            Learn more
            <MoveRight
              className="ml-1 w-3 md:w-5 mt-[2px] transition-transform duration-200 ease-in-out group-hover:translate-x-1"
              aria-hidden="true"
            />
          </span>
        </div>
      </StickyBanner>
    </div>
  );
}
