import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { 
  Plus, 
  Search, 
  Filter, 
  Calendar,
  DollarSign,
  TrendingUp,
  Download,
  Eye,
  Edit
} from "lucide-react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const vendas = [
  {
    id: "V001",
    data: "2024-01-15",
    cliente: "João Silva",
    vendedor: "Carlos Santos",
    produtos: 3,
    valor: 1250.00,
    lucro: 312.50,
    status: "Concluída"
  },
  {
    id: "V002", 
    data: "2024-01-15",
    cliente: "Maria Oliveira",
    vendedor: "Ana Costa",
    produtos: 2,
    valor: 850.00,
    lucro: 212.50,
    status: "Concluída"
  },
  {
    id: "V003",
    data: "2024-01-14",
    cliente: "Pedro Souza",
    vendedor: "Carlos Santos",
    produtos: 4,
    valor: 2100.00,
    lucro: 525.00,
    status: "Concluída"
  },
  {
    id: "V004",
    data: "2024-01-14",
    cliente: "Ana Clara",
    vendedor: "Roberto Lima",
    produtos: 1,
    valor: 420.00,
    lucro: 105.00,
    status: "Pendente"
  }
];

export default function Vendas() {
  const [searchTerm, setSearchTerm] = useState("");

  const totalVendas = vendas.reduce((sum, venda) => sum + venda.valor, 0);
  const totalLucro = vendas.reduce((sum, venda) => sum + venda.lucro, 0);
  const vendasConcluidas = vendas.filter(v => v.status === "Concluída").length;

  return (
    <div className="space-y-6 animate-fade-in">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Vendas</h1>
          <p className="text-muted-foreground">
            Gerencie e acompanhe todas as vendas das suas lojas
          </p>
        </div>
        <Button className="bg-gradient-primary text-primary-foreground hover:bg-primary-hover shadow-hero">
          <Plus className="h-4 w-4 mr-2" />
          Nova Venda
        </Button>
      </div>

      {/* Métricas de Vendas */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="bg-gradient-card shadow-card">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Total de Vendas
            </CardTitle>
            <DollarSign className="h-4 w-4 text-success" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-foreground">
              R$ {totalVendas.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
            </div>
            <p className="text-xs text-muted-foreground">
              {vendas.length} vendas registradas
            </p>
          </CardContent>
        </Card>

        <Card className="bg-gradient-card shadow-card">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Lucro Total
            </CardTitle>
            <TrendingUp className="h-4 w-4 text-primary" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-foreground">
              R$ {totalLucro.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
            </div>
            <p className="text-xs text-muted-foreground">
              Margem média: {((totalLucro / totalVendas) * 100).toFixed(1)}%
            </p>
          </CardContent>
        </Card>

        <Card className="bg-gradient-card shadow-card">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Taxa de Conclusão
            </CardTitle>
            <Calendar className="h-4 w-4 text-warning" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-foreground">
              {((vendasConcluidas / vendas.length) * 100).toFixed(0)}%
            </div>
            <p className="text-xs text-muted-foreground">
              {vendasConcluidas} de {vendas.length} vendas concluídas
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Filtros e Busca */}
      <Card className="bg-gradient-card shadow-card">
        <CardHeader>
          <CardTitle>Filtrar Vendas</CardTitle>
          <CardDescription>
            Use os filtros para encontrar vendas específicas
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                <Input
                  placeholder="Buscar por cliente, vendedor ou ID..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
            </div>
            <Button variant="outline" className="flex items-center space-x-2">
              <Filter className="h-4 w-4" />
              <span>Filtros</span>
            </Button>
            <Button variant="outline" className="flex items-center space-x-2">
              <Download className="h-4 w-4" />
              <span>Exportar</span>
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Tabela de Vendas */}
      <Card className="bg-gradient-card shadow-card">
        <CardHeader>
          <CardTitle>Lista de Vendas</CardTitle>
          <CardDescription>
            Histórico completo de vendas realizadas
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow className="border-border">
                <TableHead>ID</TableHead>
                <TableHead>Data</TableHead>
                <TableHead>Cliente</TableHead>
                <TableHead>Vendedor</TableHead>
                <TableHead>Produtos</TableHead>
                <TableHead>Valor</TableHead>
                <TableHead>Lucro</TableHead>
                <TableHead>Status</TableHead>
                <TableHead className="text-right">Ações</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {vendas
                .filter(venda => 
                  searchTerm === "" || 
                  venda.cliente.toLowerCase().includes(searchTerm.toLowerCase()) ||
                  venda.vendedor.toLowerCase().includes(searchTerm.toLowerCase()) ||
                  venda.id.toLowerCase().includes(searchTerm.toLowerCase())
                )
                .map((venda) => (
                <TableRow key={venda.id} className="border-border hover:bg-accent/50">
                  <TableCell className="font-medium">{venda.id}</TableCell>
                  <TableCell>{new Date(venda.data).toLocaleDateString('pt-BR')}</TableCell>
                  <TableCell>{venda.cliente}</TableCell>
                  <TableCell>{venda.vendedor}</TableCell>
                  <TableCell>{venda.produtos} itens</TableCell>
                  <TableCell className="font-medium text-success">
                    R$ {venda.valor.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
                  </TableCell>
                  <TableCell className="font-medium text-primary">
                    R$ {venda.lucro.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
                  </TableCell>
                  <TableCell>
                    <Badge 
                      variant={venda.status === "Concluída" ? "default" : "secondary"}
                      className={venda.status === "Concluída" 
                        ? "bg-success/10 text-success border-success/20" 
                        : "bg-warning/10 text-warning border-warning/20"
                      }
                    >
                      {venda.status}
                    </Badge>
                  </TableCell>
                  <TableCell className="text-right">
                    <div className="flex justify-end space-x-2">
                      <Button variant="ghost" size="sm">
                        <Eye className="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="sm">
                        <Edit className="h-4 w-4" />
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}