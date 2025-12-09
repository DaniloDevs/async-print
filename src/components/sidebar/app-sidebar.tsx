import {
	AudioWaveform,
	Bot,
	Command,
	FileChartPie,
	GalleryVerticalEnd,
	ListStart,
	PrinterCheck,
	SquareTerminal,
} from "lucide-react";
import {
	Sidebar,
	SidebarContent,
	SidebarFooter,
	SidebarHeader,
} from "@/components/ui/sidebar";
import { EventSwitcher } from "./event-switch";
import { NavMain } from "./nav-main";
import { NavUser } from "./nav-user";

const data = {
	user: {
		name: "shadcn",
		email: "m@example.com",
		avatar: "/avatar-test.jpg",
	},
	events: [
		{
			name: "Fatos e Fotos",
			logo: GalleryVerticalEnd,
		},
	],
	navMain: [
		{
			title: "Overview",
			icon: FileChartPie,
			isActive: true,
			url: "#",
			items: [
				{
					title: "Dashboard",
					url: "/dashboard",
				},
				{
					title: "Leads",
					url: "/leads",
				},
				{
					title: "Metrics",
					url: "/metrics",
				},
			],
		},
		{
			title: "Print Device",
			icon: PrinterCheck,
			items: [
				{
					title: "Overview",
					url: "/printer/devices",
				},
				{
					title: "Settings",
					url: "/printer/settings",
					isActive: true,
				},
			],
		},
		{
			title: "Print Queue",
			icon: ListStart,
			items: [
				{
					title: "Prints",
					url: "/Prints",
				},
				{
					title: "Audit",
					url: "Audits",
					isActive: true,
				},
			],
		},
	],
};

export function AppSidebar() {
	return (
		<Sidebar collapsible="icon" variant="floating">
			<SidebarHeader >
				<EventSwitcher event={data.events} />
			</SidebarHeader>
			<SidebarContent>
				<NavMain items={data.navMain} />
			</SidebarContent>
			<SidebarFooter>
				<NavUser user={data.user} />
			</SidebarFooter>
		</Sidebar>
	);
}
