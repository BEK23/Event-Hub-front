import { getEvents } from "@/api/events";
import EmblaCarousel from "@/components/embla-carousel";
import { EventCard } from "@/components/event-card";
import { EmblaOptionsType } from "embla-carousel";

const OPTIONS: EmblaOptionsType = {
  axis: "y",
};

export default async function Home() {
  const { data } = await getEvents();
  const events = data.data;

  return (
    <EmblaCarousel
      slides={events.map((item, index) => (
        <EventCard key={index} {...item} />
      ))}
      options={OPTIONS}
    />
  );
}
