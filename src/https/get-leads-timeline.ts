import { api } from "./apli-client";

interface listEventssResponse {
  event: {
    title: "string";
    startIn: "string";
    endIn: "string";
    totalLeads: 0;
  };
  timeline: [
    {
      hour: "string";
      count: 0;
    },
  ];
}

export async function getLeadsTimeline(eventSlug: string) {
  const result = await api.get(`${eventSlug}/metrics/leads-per-hour`).json<listEventssResponse>();

  return result;
}
