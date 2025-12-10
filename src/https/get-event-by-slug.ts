import { api } from "./apli-client";

interface listEventssResponse {
  events: {
    id: string;
    title: string;
    bannerURL: null;
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
