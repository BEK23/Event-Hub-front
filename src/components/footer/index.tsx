"use client";

import { cn, Image } from "@heroui/react";
import { HouseIcon, SearchIcon, UserRoundIcon } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";

export const Footer = () => {
  const pathname = usePathname();
  const router = useRouter();

  const getIconClassName = (path: string) => {
    return pathname === path ? "text-primary" : "text-white";
  };

  return (
    <div className="flex items-center justify-around bg-black py-2.5">
      <SearchIcon
        className={cn("size-7 transition-all", getIconClassName("/explore"))}
        onClick={() => router.push("/explore")}
      />
      <HouseIcon
        className={cn("size-7 transition-all", getIconClassName("/"))}
        onClick={() => router.push("/")}
      />
      <Image
        src="/logo.png"
        alt="Open Data Challange"
        classNames={{ wrapper: "size-7" }}
        onClick={() => router.push("/hackathon")}
      />
      <UserRoundIcon
        className={cn("size-7 transition-all", getIconClassName("/profile"))}
        onClick={() => router.push("/profile")}
      />
    </div>
  );
};
