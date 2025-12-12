import { useQuery } from "@tanstack/react-query";
import { useParams } from "@tanstack/react-router";
import { TrendingDown, TrendingUp } from "lucide-react";
import {
  Card,
  CardAction,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { getEventOverviewMetrics } from "@/https/get-event-oveview-metrics";
import { Badge } from "./ui/badge";
import { Skeleton } from "./ui/skeleton";

export default function SectionsCards() {
  const { event: eventSlug } = useParams({ from: "/$event/dashboard" });

  const { data, isLoading } = useQuery({
    queryKey: ["cards-metrics", eventSlug],
    queryFn: () => getEventOverviewMetrics(eventSlug),
    enabled: !!eventSlug,
  });

  if (isLoading) {
    return (
      <div className="grid grid-cols-3 gap-4">
        <Skeleton className="h-[125px] w-full rounded-xl" />
        <Skeleton className="h-[125px] w-full rounded-xl" />
        <Skeleton className="h-[125px] w-full rounded-xl" />
      </div>
    );
  }

  if (!data?.metrics) return <p>Evento não encontrado</p>;

  const metrics = data.metrics;

  return (
    <div className="grid grid-cols-3 gap-4">
      <Card className="@container/card">
        <CardHeader>
          <CardDescription>Leads generated in the last hour</CardDescription>
          <CardTitle className="text-2xl font-semibold tabular-nums @[250px]/card:text-3xl">
            {metrics.leadsLastHour.value}
          </CardTitle>
          <CardAction>
            <Badge variant="outline">
              {metrics.leadsLastHour.growthPercentage}{" "}
              {metrics.leadsLastHour.trend === "up" ? (
                <TrendingUp className="size-4" />
              ) : (
                <TrendingDown className="size-4" />
              )}
            </Badge>
          </CardAction>
        </CardHeader>
        <CardFooter className="flex-col items-start gap-1.5 text-sm">
          <div className="line-clamp-1 flex gap-2 font-medium">
            {metrics.leadsLastHour.label}{" "}
            {metrics.leadsLastHour.trend === "up" ? (
              <TrendingUp className="size-4" />
            ) : (
              <TrendingDown className="size-4" />
            )}
          </div>
          <div className="text-muted-foreground">{metrics.leadsLastHour.status}</div>
        </CardFooter>
      </Card>

      <Card className="@container/card">
        <CardHeader>
          <CardDescription>Total leads generated</CardDescription>
          <CardTitle className="text-2xl font-semibold tabular-nums @[250px]/card:text-3xl">
            {metrics.totalLeads.value}
          </CardTitle>
          <CardAction>
            <Badge variant="outline">
              {metrics.totalLeads.retentionRate}{" "}
              {metrics.totalLeads.trend === "up" ? (
                <TrendingUp className="size-4" />
              ) : (
                <TrendingDown className="size-4" />
              )}
            </Badge>
          </CardAction>
        </CardHeader>
        <CardFooter className="flex-col items-start gap-1.5 text-sm">
          <div className="line-clamp-1 flex gap-2 font-medium">
            {metrics.totalLeads.label}{" "}
            {metrics.totalLeads.trend === "up" ? (
              <TrendingUp className="size-4" />
            ) : (
              <TrendingDown className="size-4" />
            )}
          </div>
          <div className="text-muted-foreground">{metrics.totalLeads.status}</div>
        </CardFooter>
      </Card>
      <Card className="@container/card">
        <CardHeader>
          <CardDescription>Conversions per hour (%)</CardDescription>
          <CardTitle className="text-2xl font-semibold tabular-nums @[250px]/card:text-3xl">
            {metrics.conversionsPerHour.value}
          </CardTitle>
          <CardAction>
            <Badge variant="outline">
              {metrics.conversionsPerHour.growthPercentage}{" "}
              {metrics.conversionsPerHour.trend === "up" ? (
                <TrendingUp className="size-4" />
              ) : (
                <TrendingDown className="size-4" />
              )}
            </Badge>
          </CardAction>
        </CardHeader>
        <CardFooter className="flex-col items-start gap-1.5 text-sm">
          <div className="line-clamp-1 flex gap-2 font-medium">
            {metrics.conversionsPerHour.label}{" "}
            {metrics.conversionsPerHour.trend === "up" ? (
              <TrendingUp className="size-4" />
            ) : (
              <TrendingDown className="size-4" />
            )}
          </div>
          <div className="text-muted-foreground">{metrics.conversionsPerHour.status}</div>
        </CardFooter>
      </Card>
    </div>
  );
}
