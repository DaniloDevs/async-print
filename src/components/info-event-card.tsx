import { Calendar, Clock, Pause, Settings } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function InfoEventCard() {
  return (
    <Card className="gap-2 py-4">
      <CardHeader className="pb-3">
        <div className="flex items-start justify-between">
          <div className="flex items-center gap-2">
            <Calendar className="h-4 w-4 text-primary" />
            <CardTitle className="text-base font-semibold">Fatos e Fotos</CardTitle>
          </div>
          <div className="flex gap-1">
            <Button size="icon" variant="ghost" className="h-7 w-7">
              <Pause className="h-3.5 w-3.5" />
            </Button>
            <Button size="icon" variant="ghost" className="h-7 w-7">
              <Settings className="h-3.5 w-3.5" />
            </Button>
          </div>
        </div>
      </CardHeader>
      <CardContent className="space-y-3">
        <div className="flex items-center justify-between text-sm">
          <div className="flex items-center gap-2 text-muted-foreground">
            <Clock className="h-3.5 w-3.5" />
            <span className="text-xs">Início</span>
          </div>
          <span className="font-semibold text-foreground">07:00</span>
        </div>
        <div className="flex items-center justify-between text-sm">
          <div className="flex items-center gap-2 text-muted-foreground">
            <Clock className="h-3.5 w-3.5" />
            <span className="text-xs">Fim</span>
          </div>
          <span className="font-semibold text-foreground">15:30</span>
        </div>
        <div className="pt-2 border-t border-primary/20">
          <div className="text-xs text-muted-foreground">Duração</div>
          <div className="text-lg font-bold text-primary">8h 30min</div>
        </div>
      </CardContent>
    </Card>
  );
}
