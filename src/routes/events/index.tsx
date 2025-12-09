import { createFileRoute, Link } from "@tanstack/react-router";
import {
	ArrowRight,
	BadgeCheckIcon,
	ChevronRightIcon,
	Plus,
	Printer,
} from "lucide-react";
import { Button } from "@/components/ui/button";

import {
	Card,
	CardAction,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";

import {
	Item,
	ItemActions,
	ItemContent,
	ItemDescription,
	ItemMedia,
	ItemTitle,
} from "@/components/ui/item";

export const Route = createFileRoute("/events/")({
	component: RouteComponent,
});

function RouteComponent() {
	const eventsData = [
		{
			name: "Fatos e fotos",
			leads: 1.5478,
			slug: "fatos-e-fotos",
			banner: "/fatos-fotos.png",
		},
	];

	return (
		<div className="min-h-screen flex items-center justify-center">
			<Card className="w-[600px]">
				<CardHeader className="">
					<CardTitle>Select the main Events</CardTitle>
					<CardDescription>
						From the active events, choose one to see the overview.
					</CardDescription>
					<CardAction>
						<Button>
							<Plus className="size-4" />
							Add Event
						</Button>
					</CardAction>
				</CardHeader>
				<CardContent>
					{eventsData.map((event) => {
						return (
							<Item
								variant="outline"
								size="sm"
								key={event.slug}
								className="items-center"
								asChild
							>
								<Link to="/$event/dashboard" params={{ event: event.slug }}>
									<ItemMedia>
										<img src={event.banner} alt="" className="w-16" />
									</ItemMedia>
									<ItemContent>
										<ItemTitle>{event.name}</ItemTitle>
										<ItemDescription>Leads: {event.leads}</ItemDescription>
									</ItemContent>
									<ItemActions>
										<ChevronRightIcon className="size-4" />
									</ItemActions>
								</Link>
							</Item>
						);
					})}
				</CardContent>
			</Card>
		</div>
	);
}
