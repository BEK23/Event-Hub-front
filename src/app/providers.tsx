"use client";

import { ReactNode, useEffect } from "react";
import { HeroUIProvider } from "@heroui/react";
import { retrieveLaunchParams } from "@telegram-apps/sdk";
import { API_PYTHON } from "@/api/interceptor";

export function Providers({ children }: { children: ReactNode }) {
  const register = async () => {
    try {
      const { initData } = retrieveLaunchParams();
      const user = initData?.user;

      await API_PYTHON.post("/events/", {
        ...user,
        event_id: 5,
        check: true,
      });
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    register();
  }, []);

  return <HeroUIProvider>{children}</HeroUIProvider>;
}
