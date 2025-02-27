"use client";

import { API_PYTHON, BASE_URL } from "@/api/interceptor";
import { IEvent } from "@/types/event";
import { Chip, cn, Image, Link } from "@heroui/react";
import { retrieveLaunchParams } from "@telegram-apps/sdk";
import { BookmarkIcon, Share2Icon } from "lucide-react";
import { FC, useState } from "react";

export const EventCard: FC<IEvent> = (props) => {
  const [event, setEvent] = useState<IEvent>(props);
  const [mode, setMode] = useState<"tools" | "default">("default");

  const handleChangeMode = () => {
    setMode((prev) => (prev === "default" ? "tools" : "default"));
  };

  const handleAddBookmark = () => {
    try {
      setEvent((prev) => ({ ...prev, marked: !prev.marked }));

      const { initData } = retrieveLaunchParams();
      const user = initData?.user;

      API_PYTHON.post("/events/", {
        ...user,
        event_id: event.id,
        check: !event.marked,
      });
    } catch (error) {
      console.error(error);
      setEvent((prev) => ({ ...prev, marked: !prev.marked }));
    }
  };

  return (
    <div className="flex flex-col h-full select-none embla__slide__content overflow-auto">
      <div className="relative">
        <Image
          src={
            event.image
              ? `${BASE_URL}${event.image.url}`
              : "https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg"
          }
          alt={event.title}
          isBlurred
          classNames={{
            wrapper: "h-[300px] w-full mx-auto z-20",
            img: "rounded-none object-cover h-full",
          }}
        />
        <Image
          src={
            event.image
              ? `${BASE_URL}${event.image.url}`
              : "https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg"
          }
          alt={event.title}
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
          {event.category}
        </Chip>
      </div>

      <div className="px-4 mb-4 grow" onClick={handleChangeMode}>
        <h1 className="text-2xl font-semibold mt-6">{event.title}</h1>
        <h2 className="mb-2 text-gray-600">{event.community?.name}</h2>

        <p>{event.short_description}</p>
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
          <div
            className={cn(
              "rounded-full border-2 p-2",
              event.marked && "text-primary border-primary"
            )}
          >
            <BookmarkIcon onClick={handleAddBookmark} size={28} />
          </div>
          <div className="rounded-full border-2 p-2">
            <Share2Icon size={28} />
          </div>
        </div>

        <Link
          href={event.source_link}
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
            src={
              event.image
                ? `${BASE_URL}${event.image.url}`
                : "https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg"
            }
            alt={event.title}
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
