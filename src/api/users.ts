import { AxiosResponse } from "axios";
import { API } from "./interceptor";
import { IUser } from "@/types/user";

export const getUsers = async (): Promise<AxiosResponse<{ data: IUser[] }>> => {
  return API.get("/tg-users");
};

export const getSavedEvents = async (
  id: number
): Promise<AxiosResponse<IUser>> => {
  return API.get(`/tg-users?filters[tg_id][$eq]=${id}&populate=*`);
};
