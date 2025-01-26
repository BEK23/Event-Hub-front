"use client";

import { IEvent } from "@/types/event";
import { Chip, cn, Image, Link } from "@heroui/react";
import { BookmarkIcon, Share2Icon } from "lucide-react";
import { FC, useState } from "react";

export const EventCard: FC<IEvent> = (props) => {
  const [mode, setMode] = useState<"tools" | "default">("default");

  const {
    image,
    title,
    short_description,
    category,
    community,
    source_link,
    // date,
  } = props;

  const handleChangeMode = () => {
    setMode((prev) => (prev === "default" ? "tools" : "default"));
  };

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

      <div className="px-4 mb-4 grow" onClick={handleChangeMode}>
        <h1 className="text-2xl font-semibold mt-6">{title}</h1>
        <h2 className="mb-2 text-gray-600">{community?.name}</h2>

        <p>{short_description}</p>
      </div>

      <div className="relative w-full">
        <div
          className={cn(
            "flex gap-6 mx-auto justify-center transition-all duration-500",
            mode === "tools"
              ? "opacity-100 translate-y-14"
              : "opacity-0 translate-y-20"
          )}
        >
          <div className="rounded-full border-2 p-2">
            <BookmarkIcon
              onClick={() => {
                console.log("Bookmark clicked");
              }}
              size={28}
            />
          </div>
          <div className="rounded-full border-2 p-2">
            <Share2Icon size={28} />
          </div>
        </div>

        <Link
          href={source_link}
          className={cn(
            "py-3 relative cursor-pointer text-white transition-all duration-500 w-full z-20",
            mode === "tools" ? "translate-y-full opacity-0" : "opacity-100"
          )}
        >
          <div className="px-4">
            <div className="text-xl">Tap to know more</div>
            <div className="">Read more</div>
          </div>

          <div className="bg-black/20 backdrop-blur-md inset-0 absolute -z-10" />

          <Image
            src={`http://localhost:1337${image.url}`}
            alt={title}
            classNames={{
              wrapper:
                "size-full mx-auto absolute top-0 overflow-hidden rounded-none -z-20",
              img: "rounded-none object-cover",
            }}
          />
        </Link>
      </div>
    </div>
  );
};
