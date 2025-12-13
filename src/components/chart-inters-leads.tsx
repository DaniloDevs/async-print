"use client";

import { TrendingUp } from "lucide-react";
import { Pie, PieChart } from "recharts";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  type ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

export const description = "Gráfico de pizza por turmas";

const chartData = [
  { turma: "enfermagem", alunos: 275, fill: "var(--color-enfermagem)" },
  { turma: "informatica", alunos: 200, fill: "var(--color-informatica)" },
  { turma: "adm", alunos: 187, fill: "var(--color-adm)" },
];

const chartConfig = {
  alunos: {
    label: "Alunos",
  },
  enfermagem: {
    label: "Enfermagem",
    color: "var(--chart-1)",
  },
  informatica: {
    label: "Informática",
    color: "var(--chart-2)",
  },
  adm: {
    label: "Administração",
    color: "var(--chart-3)",
  },
} satisfies ChartConfig;

export function ChartPieLabel() {
  return (
    <Card className="flex flex-col  ">
      <CardHeader className="items-center pb-0">
        <CardTitle>Turmas de interesse</CardTitle>
        <CardDescription>January - June 2024</CardDescription>
      </CardHeader>
      <CardContent className="flex-1 pb-0">
        <ChartContainer
          config={chartConfig}
          className="[&_.recharts-pie-label-text]:fill-foreground mx-auto aspect-square max-h-[250px] pb-0"
        >
          <PieChart>
            <ChartTooltip content={<ChartTooltipContent hideLabel />} />
            <Pie data={chartData} dataKey="alunos" nameKey="turma" label />
          </PieChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col gap-2 text-sm">
        <div className="flex items-center gap-2 leading-none font-medium">
          Trending up by 5.2% this month <TrendingUp className="h-4 w-4" />
        </div>
        <div className="text-muted-foreground leading-none">
          Showing total visitors for the last 6 months
        </div>
      </CardFooter>
    </Card>
  );
}
