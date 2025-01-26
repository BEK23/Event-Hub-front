import { IEvent } from "./event";

export interface ICommunity {
  id: number;
  name: string;
  events: IEvent[];
  photo: {
    name: string;
    url: string;
  };
  link: string;
}
