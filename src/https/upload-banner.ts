import { api } from "./apli-client";



export async function uploadEventBanner(eventId: string, image: File) {
  const formData = new FormData();
  formData.append("banner", image);

  const res = await api.post(`events/${eventId}/banner`, {
    body: formData,
  });

  console.log(res)
}
