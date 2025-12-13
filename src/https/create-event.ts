import { api } from "./apli-client";

interface listEventssResponse {
  id: string;
  slug: string;
}
interface createEventRequest {
  title: string;
  active: boolean;
  startIn: string | null;
  endIn: string | null;
}

export async function createEvent(data: createEventRequest): Promise<listEventssResponse> {
  const result = await api.post(`events`, {
    json: {
      title: data.title,
      active: data.active,
      startIn: data.startIn,
      endIn: data.endIn
    },
  }).json<listEventssResponse>()

  return result;
}
