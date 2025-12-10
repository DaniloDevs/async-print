import { useQuery } from "@tanstack/react-query";
import { useParams } from "@tanstack/react-router";
import { Settings2, StopCircle, TrendingUp } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Item,
  ItemActions,
  ItemContent,
  ItemDescription,
  ItemMedia,
  ItemTitle,
} from "@/components/ui/item";
import { getEventBySlug } from "@/https/get-event-by-slug";
import { Skeleton } from "./ui/skeleton";

export function InformationCard() {
  const { event: eventSlug } = useParams({ from: "/$event/dashboard" });

  const { data, isLoading, isError } = useQuery({
    queryKey: ["event", eventSlug],
    queryFn: () => getEventBySlug(eventSlug),
  });

  if (isLoading) return <Skeleton className="min-w-screen h-20"/>;
  if (isError || !data?.event) return <p>Evento não encontrado</p>;

  const event = data.event;

  return (
    <Item variant="outline">
      <ItemMedia variant="icon">
        <TrendingUp className="size-5" />
      </ItemMedia>
      <ItemContent className="flex gap">
        <ItemTitle>{event.title}</ItemTitle>
        <ItemDescription className="flex gap-3">
          <Badge variant="outline">Start In: {event.startIn}</Badge>
          <Badge variant="secondary">End In: {event.endIn}</Badge>
        </ItemDescription>
      </ItemContent>
      <ItemActions>
        <Button variant="outline" size="sm">
          <StopCircle />
          Pause Event
        </Button>
        <Button>
          <Settings2 />
          Settings
        </Button>
      </ItemActions>
    </Item>
  );
}
