"use client";

import { BASE_URL } from "@/api/interceptor";
import { getSavedEvents } from "@/api/users";
import { IEvent } from "@/types/event";
import { Avatar } from "@heroui/react";
import { retrieveLaunchParams } from "@telegram-apps/sdk";
import { useEffect, useState } from "react";

export default function ProfilePage() {
  const [events, setEvents] = useState<IEvent[]>([]);

  const getEvents = async () => {
    try {
      const { initData } = retrieveLaunchParams();
      const userID = initData?.user?.id;

      if (userID) {
        const response = await getSavedEvents(userID);

        console.log(response);

        setEvents(response.data.events ?? []);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getEvents();
  }, []);

  return (
    <div className="h-[calc(100%-48px)] bg-white rounded-lg text-foreground w-full px-4">
      <h1 className="mt-4 text-center text-2xl font-bold mb-2">Saved events</h1>

      <div className="space-y-4 mt-4">
        {events.map((event) => (
          <div key={event.id} className="flex gap-4 items-center">
            <Avatar
              size="lg"
              src={`${BASE_URL}${event.image.url}`}
              classNames={{ base: "shrink-0" }}
            />
            <h2 className="text-lg font-semibold">{event.title}</h2>
          </div>
        ))}
      </div>
    </div>
  );
}
