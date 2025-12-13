import {
  Edit,
  Eye,
  MoreVertical,
  MousePointer,
  QrCode,
  RefreshCw,
  Search,
  UserCheck,
} from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

// Mock data
const mockLeads = [
  {
    id: 1,
    name: "Ana Silva",
    email: "ana.silva@email.com",
    origin: "QR Code",
    date: "2024-12-13T14:30:00",
  },
  {
    id: 2,
    name: "Carlos Santos",
    email: "carlos.santos@email.com",
    origin: "Manual",
    date: "2024-12-13T14:15:00",
  },
  {
    id: 3,
    name: "Mariana Costa",
    email: "mariana.costa@email.com",
    origin: "Landing Page",
    date: "2024-12-13T13:45:00",
  },
  {
    id: 4,
    name: "Pedro Oliveira",
    email: "pedro.oliveira@email.com",
    origin: "QR Code",
    date: "2024-12-13T13:30:00",
  },
  {
    id: 5,
    name: "Juliana Ferreira",
    email: "juliana.ferreira@email.com",
    origin: "Landing Page",
    date: "2024-12-13T12:50:00",
  },
];

const originIcons = {
  "QR Code": QrCode,
  Manual: UserCheck,
  "Landing Page": MousePointer,
};

export default function LeadsTable() {
  const [searchTerm, setSearchTerm] = useState("");
  const [originFilter, setOriginFilter] = useState("all");

  const filteredLeads = mockLeads.filter((lead) => {
    const matchesSearch =
      lead.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      lead.email.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesOrigin = originFilter === "all" || lead.origin === originFilter;
    return matchesSearch && matchesOrigin;
  });

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    const now = new Date();
    const diffMs = now.getTime() - date.getTime();
    const diffMins = Math.floor(diffMs / 60000);

    if (diffMins < 60) {
      return `há ${diffMins} minutos`;
    } else if (diffMins < 1440) {
      const diffHours = Math.floor(diffMins / 60);
      return `há ${diffHours} ${diffHours === 1 ? "hora" : "horas"}`;
    } else {
      return date.toLocaleDateString("pt-BR", {
        day: "2-digit",
        month: "2-digit",
        year: "numeric",
        hour: "2-digit",
        minute: "2-digit",
      });
    }
  };

  return (
    <Card className="col-span-7">
      <CardHeader>
        <CardTitle>Tabela de Leads</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col md:flex-row gap-4 mb-6">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Buscar por nome ou email..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>

          <Select value={originFilter} onValueChange={setOriginFilter}>
            <SelectTrigger className="w-full md:w-[180px]">
              <SelectValue placeholder="Origem" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">Todas origens</SelectItem>
              <SelectItem value="QR Code">QR Code</SelectItem>
              <SelectItem value="Manual">Manual</SelectItem>
              <SelectItem value="Landing Page">Landing Page</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Table */}
        <div className="rounded-md border">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Nome</TableHead>
                <TableHead>Contato</TableHead>
                <TableHead>Origem</TableHead>
                <TableHead>Data/Hora</TableHead>
                <TableHead className="w-[50px]"></TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredLeads.length > 0 ? (
                filteredLeads.map((lead) => {
                  const OriginIcon = originIcons[lead.origin as keyof typeof originIcons];
                  return (
                    <TableRow key={lead.id} className="hover:bg-muted/50">
                      <TableCell className="font-medium">{lead.name}</TableCell>
                      <TableCell className="text-muted-foreground">{lead.email}</TableCell>
                      <TableCell>
                        <div className="flex items-center gap-2">
                          <OriginIcon className="h-4 w-4 text-muted-foreground" />
                          <span>{lead.origin}</span>
                        </div>
                      </TableCell>
                      <TableCell className="text-muted-foreground">
                        {formatDate(lead.date)}
                      </TableCell>
                   
                      <TableCell>
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button variant="ghost" size="icon">
                              <MoreVertical className="h-4 w-4" />
                              <span className="sr-only">Abrir menu</span>
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent align="end">
                            <DropdownMenuLabel>Ações</DropdownMenuLabel>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem>
                              <Eye className="mr-2 h-4 w-4" />
                              Ver detalhes
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                              <Edit className="mr-2 h-4 w-4" />
                              Editar
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                              <RefreshCw className="mr-2 h-4 w-4" />
                              Alterar status
                            </DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </TableCell>
                    </TableRow>
                  );
                })
              ) : (
                <TableRow>
                  <TableCell colSpan={6} className="text-center h-24 text-muted-foreground">
                    Nenhum lead encontrado com os filtros aplicados.
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </div>

        <div className="flex items-center justify-between mt-4">
          <p className="text-sm text-muted-foreground">
            Mostrando {filteredLeads.length} de {mockLeads.length} leads
          </p>
          <div className="flex gap-2">
            <Button variant="outline" size="sm" disabled>
              Anterior
            </Button>
            <Button variant="outline" size="sm" disabled>
              Próximo
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
