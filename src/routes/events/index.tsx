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
	CardFooter,
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
		<div className="min-h-screen flex flex-col items-center justify-center ">
			<Card className="w-[600px] shadow-2xl">
				<CardHeader className="">
					<CardTitle>Select The Main Event</CardTitle>
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
									<ItemMedia variant="image">
										<img src={event.banner} alt="" className="size-32" />
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

				<CardFooter className="flex items-center justify-center opacity-40">
					<CardDescription className="flex gap-4">
						<Printer />
						<span className="font-black">Async Print</span>
					</CardDescription>
				</CardFooter>
			</Card>
		</div>
	);
}
