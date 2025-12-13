import { Users } from "lucide-react";
import {
  Card,
  CardAction,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function SectionsLeadsCards() {
  return (
    <div className="grid grid-cols-2 gap-4">
      <Card className="@container/card gap-2 h-fit">
        <CardHeader>
          <CardDescription>Total Leads</CardDescription>
          <CardTitle className="text-2xl font-semibold tabular-nums @[250px]/card:text-3xl">2458</CardTitle>
          <CardAction>
            <Users />
          </CardAction>
        </CardHeader>
        <CardFooter>
          <CardDescription>+12% em relação ao último evento</CardDescription>
        </CardFooter>
      </Card>
      <Card className="@container/card gap-2 h-fit">
        <CardHeader>
          <CardDescription>Total Leads</CardDescription>
          <CardTitle className="text-2xl font-semibold tabular-nums @[250px]/card:text-3xl">2458</CardTitle>
          <CardAction>
            <Users />
          </CardAction>
        </CardHeader>
        <CardFooter>
          <CardDescription>+12% em relação ao último evento</CardDescription>
        </CardFooter>
      </Card>
    </div>
  );
}
