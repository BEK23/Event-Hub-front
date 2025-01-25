import { Chip, Image } from "@heroui/react";
import { FC } from "react";

type EventCardProps = {
  image: string;
  title: string;
  short_description: string;
  description: string;
  category: string;
  date: string;
  owner: string;
};

export const EventCard: FC<EventCardProps> = (props) => {
  const {
    image,
    title,
    short_description,
    description,
    category,
    date,
    owner,
  } = props;

  return (
    <div className="flex flex-col h-full select-none embla__slide__content">
      <div className="relative">
        <Image
          src={image}
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
        <h2 className="mt-2 text-gray-600">{owner}</h2>
      </div>
    </div>
  );
};
