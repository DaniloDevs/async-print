import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

import {
  QrCode,
  MousePointer,
  UserCheck,
} from "lucide-react"

export function DistributionOrigen() {
  const originData = [
    { origin: "QR Code", count: 143, percentage: 58, icon: QrCode },
    { origin: "Landing Page", count: 78, percentage: 31, icon: MousePointer },
    { origin: "Manual", count: 27, percentage: 11, icon: UserCheck },
  ];

  return (
    <Card className="bg-card border py-4">
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between">
          <CardTitle className="text-sm font-medium">Distribuição por Origem</CardTitle>
          <Badge variant="secondary" className="text-xs">
            100%
          </Badge>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {originData.map((item) => {
            const Icon = item.icon;
            return (
              <div key={item.origin} className="space-y-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="h-8 w-8 rounded bg-secondary flex items-center justify-center">
                      <Icon className="h-4 w-4" />
                    </div>
                    <span className="text-sm font-medium">{item.origin}</span>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-bold">{item.count}</p>
                    <p className="text-xs text-muted-foreground">{item.percentage}%</p>
                  </div>
                </div>
                <div className="h-1.5 bg-muted rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-primary to-accent rounded-full"
                    style={{ width: `${item.percentage}%` }}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </CardContent>
    </Card>
  );
}
