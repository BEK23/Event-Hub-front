"use client";

import { getEvents } from "@/api/events";
import EmblaCarousel from "@/components/embla-carousel";
import { EventCard } from "@/components/event-card";
import { IEvent } from "@/types/event";
import { EmblaOptionsType } from "embla-carousel";
import { HouseIcon, SearchIcon, UserRoundIcon } from "lucide-react";
import { useEffect, useState } from "react";

const OPTIONS: EmblaOptionsType = {
  axis: "y",
};

export default function Home() {
  const [events, setEvents] = useState<IEvent[]>([]);

  useEffect(() => {
    getEvents().then((res) => {
      setEvents(res.data.data);
    });
  }, []);

  return (
    <div className="flex flex-col h-dvh">
      <EmblaCarousel
        slides={events.map((item, index) => (
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
