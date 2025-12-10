import { Link, useParams } from "@tanstack/react-router";
import { ChevronsUpDown, Plus } from "lucide-react";
import * as React from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar";
import { Skeleton } from "../ui/skeleton";

export function EventSwitcher({
  events,
}: {
  events: {
    id: string;
    title: string;
    bannerURL: null;
    slug: string;
    _count: {
      leads: number;
    };
  }[];
}) {
  const { isMobile } = useSidebar();
  const { event: eventSlug } = useParams({ from: "/$event/dashboard" });

  const activeEvent = React.useMemo(
    () => events.find((event) => event.slug === eventSlug),
    [events, eventSlug],
  );

  if (!activeEvent) {
    return (
      <SidebarMenu>
        <SidebarMenuItem>
          <Skeleton className="h-16 w-full" />
        </SidebarMenuItem>
      </SidebarMenu>
    );
  }

  return (
    <SidebarMenu>
      <SidebarMenuItem>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <SidebarMenuButton
              size="lg"
              className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
            >
              <div className="flex aspect-square size-8 items-center justify-center rounded-lg overflow-hidden">
                {activeEvent.bannerURL ? (
                  <img
                    src={activeEvent.bannerURL}
                    alt={activeEvent.title}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="size-full bg-muted" />
                )}
              </div>

              {/* Este conteúdo só aparece quando a sidebar está expandida */}
              <div className="grid flex-1 text-left text-sm leading-tight group-data-[collapsible=icon]:hidden">
                <span className="truncate font-medium">{activeEvent.title}</span>
              </div>

              {/* Ícone só aparece quando expandida */}
              <ChevronsUpDown className="ml-auto group-data-[collapsible=icon]:hidden" />
            </SidebarMenuButton>
          </DropdownMenuTrigger>

          <DropdownMenuContent
            className="w-(--radix-dropdown-menu-trigger-width) min-w-56 rounded-lg"
            align="start"
            side={isMobile ? "bottom" : "right"}
            sideOffset={4}
          >
            <DropdownMenuLabel className="text-muted-foreground text-xs">Events</DropdownMenuLabel>

            {events.map((event, index) => {
              const isActive = event.slug === activeEvent.slug;

              return (
                <DropdownMenuItem key={event.id} className="gap-2 p-2" disabled={isActive} asChild>
                  <Link
                    to="/$event/dashboard"
                    params={{ event: event.slug }}
                    className="flex w-full items-center gap-2"
                  >
                    <div className="flex size-6 items-center justify-center rounded-md border overflow-hidden">
                      {event.bannerURL ? (
                        <img
                          src={event.bannerURL}
                          alt={event.title}
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <div className="size-full bg-muted" />
                      )}
                    </div>

                    <span className="truncate">{event.title}</span>

                    <DropdownMenuShortcut>⌘{index + 1}</DropdownMenuShortcut>
                  </Link>
                </DropdownMenuItem>
              );
            })}

            <DropdownMenuSeparator />

            <DropdownMenuItem className="gap-2 p-2">
              <div className="flex size-6 items-center justify-center rounded-md border bg-transparent">
                <Plus className="size-4" />
              </div>
              <span className="text-muted-foreground font-medium">Create new Event</span>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </SidebarMenuItem>
    </SidebarMenu>
  );
}
