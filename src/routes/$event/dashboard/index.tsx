import { createFileRoute } from "@tanstack/react-router";
import {
	Settings2,
	StopCircle,
	TrendingUp,
} from "lucide-react";
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
import SectionsCards from "@/components/sections-cards";
import { LeadsChart } from "@/components/chart-leads";

export const Route = createFileRoute("/$event/dashboard/")({
	component: RouteComponent,
});

function RouteComponent() {
	const event = {
		name: "Fatos e Fotos",
		isActive: true,
		starteIn: "07:30",
		endsIn: "17:00",
	};

	return (
		<div className=" flex flex-col gap-4">
			<Item variant="outline">
				<ItemMedia variant="icon">
					<TrendingUp className="size-5" />
				</ItemMedia>
				<ItemContent className="flex gap">
					<ItemTitle>{event.name}</ItemTitle>
					<ItemDescription className="flex gap-3">
						<Badge variant="outline">Start In: {event.starteIn}</Badge>
						<Badge variant="secondary">End In: {event.endsIn}</Badge>
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

      <SectionsCards />
      <LeadsChart />
		</div>
	);
}
