
import { createFileRoute } from "@tanstack/react-router";
import { LeadsChart } from "@/components/chart-leads";
import { InformationCard } from "@/components/information-card";
import SectionsCards from "@/components/sections-cards";

export const Route = createFileRoute("/$event/dashboard/")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div className=" flex flex-col gap-4">
      <InformationCard />
      <SectionsCards />
      <LeadsChart />
    </div>
  );
}
