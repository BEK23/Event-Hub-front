import { IEvent } from "./event";

export interface IUser {
  username?: string;
  tg_id: number;
  full_name: string;
  events: IEvent[];
  avatar_url?: string;
}
