"use client";

import { Image } from "@heroui/react";
import { useEffect, useState } from "react";

export default function HackathonLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="h-[calc(100%-48px)] bg-white rounded-lg text-foreground w-full p-4 overflow-auto">
      <Image
        src="/open data.png"
        alt="Open Data Challange 2025"
        classNames={{
          wrapper: "w-full mx-10",
        }}
      />

      <div className="w-full flex flex-col items-center justify-center text-4xl mt-8 font-bold">
        <div className="text-lg font-normal">Event ends in</div>
        <Countdown />
      </div>

      <h1 className="text-xl mt-4">Participants</h1>
      {children}
    </div>
  );
}

function Countdown() {
  const calculateTimeLeft = (): {
    hours: number;
    minutes: number;
    seconds: number;
  } => {
    const now = new Date();
    const targetTime = new Date();
    targetTime.setHours(19, 0, 0, 0);

    if (now > targetTime) {
      targetTime.setDate(targetTime.getDate() + 1);
    }

    const difference = targetTime.getTime() - now.getTime();
    let timeLeft = {
      hours: 0,
      minutes: 0,
      seconds: 0,
    };

    if (difference > 0) {
      timeLeft = {
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  });

  return (
    <div className="countdown">
      {timeLeft.hours + timeLeft.minutes + timeLeft.seconds > 0 ? (
        <div>
          {timeLeft.hours}h {timeLeft.minutes}m {timeLeft.seconds}s
        </div>
      ) : (
        <div>Time&aposs up!</div>
      )}
    </div>
  );
}
