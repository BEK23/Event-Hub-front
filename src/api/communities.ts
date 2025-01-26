import { AxiosResponse } from "axios";
import { API } from "./interceptor";
import { ICommunity } from "@/types/community";

export const getCommunities = async (params: {
  search?: string;
}): Promise<AxiosResponse<{ data: ICommunity[] }>> => {
  return API.get("/communities", {
    params: {
      populate: ["photo"],
      ...params,
    },
  });
};
