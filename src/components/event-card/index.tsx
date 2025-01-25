import { IEvent } from "@/types/event";
import { Chip, Image } from "@heroui/react";
import { FC } from "react";

export const EventCard: FC<IEvent> = (props) => {
  const {
    image,
    title,
    // short_description,
    description,
    category,
    // date,
  } = props;

  return (
    <div className="flex flex-col h-full select-none embla__slide__content">
      <div className="relative">
        <Image
          src={image.url}
          alt={title}
          classNames={{
            wrapper: "aspect-video",
            img: "rounded-none",
          }}
        />

        <Chip
          classNames={{
            base: "absolute bottom-0 translate-y-1/2 z-20 left-4 drop-shadow-md",
          }}
        >
          {category}
        </Chip>
      </div>

      <div className="px-4">
        <h1 className="text-2xl font-semibold my-6">{title}</h1>

        <p>{description}</p>
        <h2 className="mt-2 text-gray-600">{}</h2>
      </div>
    </div>
  );
};
