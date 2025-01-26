export interface IEvent {
  id: number;
  title: string;
  image: {
    name: string;
    url: string;
  };
  start_date?: string;
  short_description: string;
  description?: string;
  format?: "ONLINE" | "OFFLINE";
  details?: Record<string, unknown>;
  category: string;
  source_link: string;
  community?: {
    name: string;
  };
  marked?: boolean;
}
