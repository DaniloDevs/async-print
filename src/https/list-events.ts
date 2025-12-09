import { api } from "./apli-client";


interface listEventssResponse {
	events: {
    id: string,
    title: string,
    bannerURL: null,
    slug: string,
    _count: {
      leads: number
    }
  }[]
}

export async function listEvents() {
	const result = await api
		.get(`events`)
		.json<listEventssResponse>();

	return result;
}
