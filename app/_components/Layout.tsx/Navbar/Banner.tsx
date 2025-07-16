"use client";
import { StickyBanner } from "@/components/ui/sticky-banner";
import { MoveRight } from "lucide-react";


export function Banner() {
  return (
    <div className="relative flex w-full flex-col items-center overflow-y-auto">
      <StickyBanner className="bg-black w-full">
        <div className="max-w-fit mx-auto text-white drop-shadow-md flex items-center justify-center text-center">
          <span className="font-medium whitespace-nowrap">Meet the team</span>

          <div className="h-px w-2 bg-white mx-2 self-center" />

          <span className="text-[#A3A3A3] whitespace-nowrap">
            Let BB handle your financial situation, so you don’t have to.
          </span>

          <div className="h-px w-2 bg-white mx-2 self-center" />

          <span className="whitespace-nowrap font-medium inline-flex items-center group cursor-pointer">
            Learn more
            <MoveRight
              className="ml-1 w-5 mt-[2px] transition-transform duration-200 ease-in-out group-hover:translate-x-1"
              aria-hidden="true"
            />
          </span>        </div>
      </StickyBanner>
    </div>
  );
}
