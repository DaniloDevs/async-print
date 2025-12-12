import { useQuery } from "@tanstack/react-query";
import { useParams } from "@tanstack/react-router";
import { Bar, BarChart, CartesianGrid, XAxis } from "recharts";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import {
  type ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { getLeadsTimeline } from "@/https/get-leads-timeline";
import { Skeleton } from "./ui/skeleton";

export const description = "An interactive bar chart";

const chartConfig = {
  leads: {
    label: "Leads",
    color: "var(--chart-2)",
  },
} satisfies ChartConfig;

export function LeadsChart() {
  const { event: eventSlug } = useParams({ from: "/$event/dashboard" });

  const { data, isLoading } = useQuery({
    queryKey: ["chart-metrics", eventSlug],
    queryFn: () => getLeadsTimeline(eventSlug),
    enabled: !!eventSlug,
    
  });

  if (isLoading) {
    return (
      <div className="grid grid-cols-1 gap-4">
        <Skeleton className="h-full w-full rounded-xl" />
      </div>
    );
  }

  if (!data?.event || !data.timeline) return <p>Evento não encontrado</p>;

  const event = data.event;
  const timeline = data.timeline;

  return (
    <Card className="py-0">
      <CardHeader className="flex flex-col items-stretch border-b p-0! sm:flex-row">
        <div className="flex flex-1 flex-col justify-center gap-1 px-6 pt-4 pb-3 sm:py-0!">
          <CardTitle>Leads by Hour</CardTitle>
          <CardDescription>Total leads between 07:00 and 17:00</CardDescription>
        </div>

        <div className="flex">
          <div className="relative z-30 flex flex-1 flex-col justify-center gap-1 border-t px-6 py-4 text-left sm:border-t-0 sm:border-l sm:px-8 sm:py-6">
            <span className="text-muted-foreground text-xs">{chartConfig.leads.label}</span>
            <span className="text-lg leading-none font-bold sm:text-3xl">{event.totalLeads}</span>
          </div>
        </div>
      </CardHeader>

      <CardContent className="px-2 sm:p-6">
        <ChartContainer config={chartConfig} className="aspect-auto h-[250px] w-full">
          <BarChart accessibilityLayer data={timeline} margin={{ left: 12, right: 12 }}>
            <CartesianGrid vertical={false} />

            <XAxis
              dataKey="hour"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              minTickGap={24}
            />

            <ChartTooltip
              content={
                <ChartTooltipContent
                  className="w-[150px]"
                  nameKey="hour"
                  labelFormatter={(value) => `Horário: ${value}`}
                />
              }
            />

            <Bar dataKey="count" fill="var(--color-leads)" radius={[4, 4, 0, 0]} />
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
