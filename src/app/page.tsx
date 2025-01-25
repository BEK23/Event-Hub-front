"use client";

import EmblaCarousel from "@/components/embla-carousel";
import { EventCard } from "@/components/event-card";
import { data } from "@/data";
import { EmblaOptionsType } from "embla-carousel";
import { HouseIcon, SearchIcon, UserRoundIcon } from "lucide-react";

const OPTIONS: EmblaOptionsType = {
  axis: "y",
};

export default function Home() {
  return (
    <div className="flex flex-col h-dvh">
      <EmblaCarousel
        slides={data.map((item, index) => (
          <EventCard key={index} {...item} />
        ))}
        options={OPTIONS}
      />

      <div className="flex items-center justify-around bg-black py-2.5">
        <SearchIcon className="size-7 text-white" />
        <HouseIcon className="size-7 text-primary" />
        <UserRoundIcon className="size-7 text-white" />
      </div>
    </div>
  );
}
