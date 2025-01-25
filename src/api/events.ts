import { AxiosResponse } from "axios";
import { API } from "./interceptor";
import { IEvent } from "@/types/event";

export const getEvents = async (): Promise<
  AxiosResponse<{ data: IEvent[] }>
> => {
  return API.get("/events", {
    params: {
      populate: ["image", "community"],
    },
  });
};
