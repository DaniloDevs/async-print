import { TrendingUp } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Button } from "./ui/button";
import { Item, ItemDescription, ItemTitle } from "./ui/item";

export default function QuickInsights() {
  return (
    <Card className="@container/card ">
      <CardHeader>
        <CardDescription className="flex gap-4 items-center">
          <TrendingUp className="size-6" />
          Quick Insights
        </CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col gap-4">
        <Item variant="muted" className="flex flex-col items-start gap-2">
          <ItemDescription>Horario de Pico</ItemDescription>
          <ItemTitle className="flex gap-2 text-2xl font-semibold tabular-nums @[250px]/card:text-2xl">
            14h - 15h
          </ItemTitle>
        </Item>
        <Item variant="muted" className="flex flex-col items-start gap-2">
          <ItemDescription>Principal origem</ItemDescription>
          <ItemTitle className="flex gap-2 text-2xl font-semibold tabular-nums @[250px]/card:text-2xl">
            QR Code
          </ItemTitle>
        </Item>
        <Item variant="muted" className="flex flex-col items-start gap-2">
          <ItemDescription>Ano alvo</ItemDescription>
          <ItemTitle className="flex gap-2 text-2xl font-semibold tabular-nums @[250px]/card:text-2xl">
            14 ano - 17 ano
          </ItemTitle>
        </Item>
      </CardContent>
      <CardFooter>
        <Button variant="outline" className="w-full">Acess more Insights</Button>
      </CardFooter>
    </Card>
  );
}
