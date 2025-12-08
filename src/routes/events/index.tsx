import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Camera, Printer } from "lucide-react";
import { NavUser } from "@/components/nav-user";
import { Button } from "@/components/ui/button";

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
		<div className="min-h-screen">
			<nav className="p-6 flex justify-between gap-4 border-b border-black/50">
				<div className="flex gap-4 items-center">
					<div className="flex  gap-4">
						<Printer />
						<h1>Async Print</h1>
					</div>
				</div>
				<NavUser
					user={{
						avatar: "/avatar-test.jpg",
						email: "joelson.noites@gmail.com",
						name: "Joelson Noites Pinho",
					}}
				/>
			</nav>

			<div className="p-8 grid grid-cols-4">
				{eventsData.map((event) => (
					<div
						key={event.slug}
						className="bg-slate-900 rounded-xl p-8 border border-slate-700 hover:border-blue-500/50 transition-colors"
					>
						<div className="flex items-start justify-between mb-6">
							<div>
								<h3 className="text-2xl font-bold text-white mb-2">
									{event.name}
								</h3>
								<p className="text-slate-400 text-sm">
									Leads capturados: {event.leads}
								</p>
							</div>
							<div className="bg-white rounded-lg p-1 flex items-center justify-center w-14 h-14">
								<img
									src={event.banner}
									alt=""
									className="w-10 h-17 text-slate-900"
								/>
							</div>
						</div>

						<Link to="/$event/dashboard" params={{ event: event.slug }}>
							<Button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium">
								Acess Event
								<ArrowRight className="w-4 h-4 ml-2" />
							</Button>
						</Link>
					</div>
				))}
			</div>
		</div>
	);
}
