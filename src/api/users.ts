import { AxiosResponse } from "axios";
import { API } from "./interceptor";
import { IUser } from "@/types/user";

export const getUsers = async (): Promise<AxiosResponse<{ data: IUser[] }>> => {
  return API.get("/tg-users");
};
