"use client";

import EmblaCarousel from "@/components/embla-carousel";
import { EmblaOptionsType } from "embla-carousel";
import { HouseIcon, SearchIcon, UserRoundIcon } from "lucide-react";

const OPTIONS: EmblaOptionsType = {
  axis: "y",
};
const SLIDE_COUNT = 5;
const SLIDES = Array.from(Array(SLIDE_COUNT).keys());

export default function Home() {
  return (
    <div className="flex flex-col h-dvh">
      <EmblaCarousel slides={SLIDES} options={OPTIONS} />

      <div className="flex items-center justify-around bg-black py-2.5">
        <SearchIcon className="size-7 text-white" />
        <HouseIcon className="size-7 text-primary" />
        <UserRoundIcon className="size-7 text-white" />
      </div>
    </div>
  );
}
