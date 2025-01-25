"use client";

import { IEvent } from "@/types/event";
import { Chip, Image } from "@heroui/react";
import { FC } from "react";

export const EventCard: FC<IEvent> = (props) => {
  const {
    image,
    title,
    short_description,
    category,
    community,
    // date,
  } = props;

  return (
    <div className="flex flex-col h-full select-none embla__slide__content overflow-auto">
      <div className="relative">
        <Image
          src={`http://localhost:1337${image.url}`}
          alt={title}
          isBlurred
          classNames={{
            wrapper: "h-[300px] w-full mx-auto z-20",
            img: "rounded-none object-cover h-full",
          }}
        />
        <Image
          src={`http://localhost:1337${image.url}`}
          alt={title}
          isBlurred
          classNames={{
            wrapper:
              "h-[300px] w-full mx-auto absolute top-0 overflow-hidden blur-md",
            img: "rounded-none object-cover",
          }}
        />

        <Chip
          classNames={{
            base: "absolute bottom-0 translate-y-1/2 z-20 left-4 drop-shadow-md capitalize",
          }}
        >
          {category}
        </Chip>
      </div>

      <div className="px-4 mb-4">
        <h1 className="text-2xl font-semibold mt-6">{title}</h1>
        <h2 className="mb-2 text-gray-600">{community?.name}</h2>

        <p>{short_description}</p>
      </div>
    </div>
  );
};
