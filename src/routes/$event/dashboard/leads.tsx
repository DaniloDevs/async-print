import { createFileRoute } from "@tanstack/react-router";
import { ChartPieLabel } from "@/components/chart-inters-leads";
import { DistributionOrigen } from "@/components/distribution-origem";
import LeadsTable from "@/components/leads-table";
import { QuickActions } from "@/components/quick-actions";
import QuickInsights from "@/components/quick-insights";
import SectionsLeadsCards from "@/components/sections-leads-card";
import InfoEventCard from "@/components/info-event-card";

export const Route = createFileRoute("/$event/dashboard/leads")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div className="grid grid-cols-7  gap-4">
      <div className="col-span-5">
        <SectionsLeadsCards />
      </div>
      <div className="col-span-2 row-span-4 flex flex-col gap-4">
        <QuickActions />
        <DistributionOrigen />
        <InfoEventCard />
      </div>

      <div className="col-span-5 grid grid-cols-2 gap-4 ">
        <QuickInsights />

        <ChartPieLabel />
      </div>

      <LeadsTable />
    </div>
  );
}
