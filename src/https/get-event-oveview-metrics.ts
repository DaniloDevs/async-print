import { api } from "./apli-client";

interface listEventssResponse {
  metrics: {
    leadsLastHour: {
      value: number;
      growthPercentage: number;
      trend: "up" | "down";
      label: "string";
      status: "string";
    };
    totalLeads: {
      value: number;
      retentionRate: number;
      trend: "up" | "down";
      label: "string";
      status: "string";
    };
    conversionsPerHour: {
      value: number;
      growthPercentage: number;
      trend: "up" | "down";
      label: "string";
      status: "string";
    };
  };
}

export async function getEventOverviewMetrics(eventSlug: string) {
  const result = await api.get(`${eventSlug}/metrics/overview`).json<listEventssResponse>();

  return result;
}
