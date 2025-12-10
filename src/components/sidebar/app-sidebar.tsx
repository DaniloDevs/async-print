import { useQuery } from "@tanstack/react-query";
import { useParams } from "@tanstack/react-router";
import {
  AudioWaveform,
  Bot,
  Command,
  FileChartPie,
  GalleryVerticalEnd,
  ListStart,
  PrinterCheck,
} from "lucide-react";
import { Sidebar, SidebarContent, SidebarFooter, SidebarHeader } from "@/components/ui/sidebar";
import { listEvents } from "@/https/list-events";
import { Skeleton } from "../ui/skeleton";
import { EventSwitcher } from "./event-switch";
import { NavMain } from "./nav-main";
import { NavUser } from "./nav-user";

const data = {
  events: [
    {
      name: "Fatos e Fotos",
      logo: GalleryVerticalEnd,
    },
  ],
};

const user = {
  name: "shadcn",
  email: "m@example.com",
  avatar: "/avatar-test.jpg",
};

const navMain = [
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
];

export function AppSidebar() {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["events"],
    queryFn: listEvents,
  });

  if (isLoading) return <Skeleton />;
  if (isError || !data?.events?.length) return <Skeleton />;

  const { events } = data;

  return (
    <Sidebar collapsible="icon" variant="floating">
      <SidebarHeader>
        <EventSwitcher events={events} />
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={navMain} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={user} />
      </SidebarFooter>
    </Sidebar>
  );
}
