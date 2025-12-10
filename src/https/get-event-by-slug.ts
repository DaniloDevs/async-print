import { api } from "./apli-client";

interface listEventssResponse {
  event: {
    id: string;
    title: string;
    bannerURL: string
    startIn: string,
    endIn: string,
    slug: string;
    _count: {
      leads: number;
    };
  };
}

export async function getEventBySlug(eventSlug: string) {
  const result = await api.get(`events/${eventSlug}`).json<listEventssResponse>();

  return result;
}
