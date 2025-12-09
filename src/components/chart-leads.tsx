import * as React from "react";
import { Bar, BarChart, CartesianGrid, XAxis } from "recharts";

import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import {
	type ChartConfig,
	ChartContainer,
	ChartTooltip,
	ChartTooltipContent,
} from "@/components/ui/chart";

export const description = "An interactive bar chart";

const chartData = [
	{ hour: "07:00", leads: 22 },
	{ hour: "07:30", leads: 35 },
	{ hour: "08:00", leads: 41 },
	{ hour: "08:30", leads: 28 },
	{ hour: "09:00", leads: 56 },
	{ hour: "09:30", leads: 63 },
	{ hour: "10:00", leads: 49 },
	{ hour: "10:30", leads: 72 },
	{ hour: "11:00", leads: 81 },
	{ hour: "11:30", leads: 54 },
	{ hour: "12:00", leads: 38 },
	{ hour: "12:30", leads: 44 },
	{ hour: "13:00", leads: 59 },
	{ hour: "13:30", leads: 67 },
	{ hour: "14:00", leads: 73 },
	{ hour: "14:30", leads: 61 },
	{ hour: "15:00", leads: 48 },
	{ hour: "15:30", leads: 52 },
	{ hour: "16:00", leads: 69 },
	{ hour: "16:30", leads: 77 },
	{ hour: "17:00", leads: 64 },
];

const chartConfig = {
	leads: {
		label: "Leads",
		color: "var(--chart-2)",
	},
} satisfies ChartConfig;

export function LeadsChart() {
	const [activeChart] = React.useState<keyof typeof chartConfig>("leads");

	const total = React.useMemo(
		() => ({
			leads: chartData.reduce((acc, curr) => acc + curr.leads, 0),
		}),
		[],
	);

	return (
		<Card className="py-0">
			<CardHeader className="flex flex-col items-stretch border-b !p-0 sm:flex-row">
				<div className="flex flex-1 flex-col justify-center gap-1 px-6 pt-4 pb-3 sm:!py-0">
					<CardTitle>Leads by Hour</CardTitle>
					<CardDescription>Total leads between 07:00 and 17:00</CardDescription>
				</div>

				<div className="flex">
					<div className="relative z-30 flex flex-1 flex-col justify-center gap-1 border-t px-6 py-4 text-left sm:border-t-0 sm:border-l sm:px-8 sm:py-6">
						<span className="text-muted-foreground text-xs">
							{chartConfig.leads.label}
						</span>
						<span className="text-lg leading-none font-bold sm:text-3xl">
							{total.leads.toLocaleString()}
						</span>
					</div>
				</div>
			</CardHeader>

			<CardContent className="px-2 sm:p-6">
				<ChartContainer
					config={chartConfig}
					className="aspect-auto h-[250px] w-full"
				>
					<BarChart
						accessibilityLayer
						data={chartData}
						margin={{ left: 12, right: 12 }}
					>
						<CartesianGrid vertical={false} />

						<XAxis
							dataKey="hour"
							tickLine={false}
							axisLine={false}
							tickMargin={8}
							minTickGap={24}
						/>

						<ChartTooltip
							content={
								<ChartTooltipContent
									className="w-[150px]"
									nameKey="leads"
									labelFormatter={(value) => `Horário: ${value}`}
								/>
							}
						/>

						<Bar
							dataKey="leads"
							fill="var(--color-leads)"
							radius={[4, 4, 0, 0]}
						/>
					</BarChart>
				</ChartContainer>
			</CardContent>
		</Card>
	);
}
