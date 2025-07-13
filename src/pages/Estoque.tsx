import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { 
  Plus, 
  Search, 
  Package,
  AlertTriangle,
  TrendingDown,
  Filter,
  Download
} from "lucide-react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const produtos = [
  {
    id: "P001",
    nome: "Michelin Primacy 3 205/55R16",
    marca: "Michelin",
    tipo: "Pneu de Passeio",
    quantidade: 25,
    valorPadrao: 450.00,
    custoUnitario: 315.00,
    codigoBarras: "7891234567890",
    status: "Em Estoque"
  },
  {
    id: "P002",
    nome: "Bridgestone Turanza T005 225/45R17",
    marca: "Bridgestone", 
    tipo: "Pneu de Passeio",
    quantidade: 8,
    valorPadrao: 520.00,
    custoUnitario: 364.00,
    codigoBarras: "7891234567891",
    status: "Estoque Baixo"
  },
  {
    id: "P003",
    nome: "Continental ContiPremiumContact 195/65R15",
    marca: "Continental",
    tipo: "Pneu de Passeio", 
    quantidade: 0,
    valorPadrao: 380.00,
    custoUnitario: 266.00,
    codigoBarras: "7891234567892",
    status: "Sem Estoque"
  },
  {
    id: "P004",
    nome: "Goodyear EfficientGrip 215/60R16",
    marca: "Goodyear",
    tipo: "Pneu de Passeio",
    quantidade: 42,
    valorPadrao: 420.00,
    custoUnitario: 294.00,
    codigoBarras: "7891234567893",
    status: "Em Estoque"
  }
];

export default function Estoque() {
  const [searchTerm, setSearchTerm] = useState("");

  const totalProdutos = produtos.length;
  const produtosEmEstoque = produtos.filter(p => p.quantidade > 0).length;
  const produtosBaixoEstoque = produtos.filter(p => p.quantidade > 0 && p.quantidade <= 10).length;
  const valorTotalEstoque = produtos.reduce((sum, p) => sum + (p.quantidade * p.valorPadrao), 0);

  const getStatusBadge = (status: string, quantidade: number) => {
    if (quantidade === 0) {
      return <Badge className="bg-destructive/10 text-destructive border-destructive/20">Sem Estoque</Badge>;
    } else if (quantidade <= 10) {
      return <Badge className="bg-warning/10 text-warning border-warning/20">Estoque Baixo</Badge>;
    } else {
      return <Badge className="bg-success/10 text-success border-success/20">Em Estoque</Badge>;
    }
  };

  return (
    <div className="space-y-6 animate-fade-in">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Estoque</h1>
          <p className="text-muted-foreground">
            Controle e gerencie o estoque de produtos
          </p>
        </div>
        <Button className="bg-gradient-primary text-primary-foreground hover:bg-primary-hover shadow-hero">
          <Plus className="h-4 w-4 mr-2" />
          Adicionar Produto
        </Button>
      </div>

      {/* Métricas do Estoque */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card className="bg-gradient-card shadow-card">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Total de Produtos
            </CardTitle>
            <Package className="h-4 w-4 text-primary" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-foreground">{totalProdutos}</div>
            <p className="text-xs text-muted-foreground">
              {produtosEmEstoque} em estoque
            </p>
          </CardContent>
        </Card>

        <Card className="bg-gradient-card shadow-card">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Valor Total
            </CardTitle>
            <Package className="h-4 w-4 text-success" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-foreground">
              R$ {valorTotalEstoque.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
            </div>
            <p className="text-xs text-muted-foreground">
              Valor do estoque atual
            </p>
          </CardContent>
        </Card>

        <Card className="bg-gradient-card shadow-card">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Estoque Baixo
            </CardTitle>
            <AlertTriangle className="h-4 w-4 text-warning" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-foreground">{produtosBaixoEstoque}</div>
            <p className="text-xs text-muted-foreground">
              Produtos com estoque crítico
            </p>
          </CardContent>
        </Card>

        <Card className="bg-gradient-card shadow-card">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Sem Estoque
            </CardTitle>
            <TrendingDown className="h-4 w-4 text-destructive" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-foreground">
              {produtos.filter(p => p.quantidade === 0).length}
            </div>
            <p className="text-xs text-muted-foreground">
              Produtos esgotados
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Filtros e Busca */}
      <Card className="bg-gradient-card shadow-card">
        <CardHeader>
          <CardTitle>Filtrar Produtos</CardTitle>
          <CardDescription>
            Use os filtros para encontrar produtos específicos
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                <Input
                  placeholder="Buscar por nome, marca ou código..."
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

      {/* Tabela de Produtos */}
      <Card className="bg-gradient-card shadow-card">
        <CardHeader>
          <CardTitle>Lista de Produtos</CardTitle>
          <CardDescription>
            Inventário completo de produtos em estoque
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow className="border-border">
                <TableHead>Produto</TableHead>
                <TableHead>Marca</TableHead>
                <TableHead>Tipo</TableHead>
                <TableHead>Quantidade</TableHead>
                <TableHead>Valor Unitário</TableHead>
                <TableHead>Valor Total</TableHead>
                <TableHead>Status</TableHead>
                <TableHead className="text-right">Ações</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {produtos
                .filter(produto => 
                  searchTerm === "" || 
                  produto.nome.toLowerCase().includes(searchTerm.toLowerCase()) ||
                  produto.marca.toLowerCase().includes(searchTerm.toLowerCase()) ||
                  produto.id.toLowerCase().includes(searchTerm.toLowerCase())
                )
                .map((produto) => (
                <TableRow key={produto.id} className="border-border hover:bg-accent/50">
                  <TableCell>
                    <div>
                      <div className="font-medium">{produto.nome}</div>
                      <div className="text-xs text-muted-foreground">ID: {produto.id}</div>
                    </div>
                  </TableCell>
                  <TableCell>{produto.marca}</TableCell>
                  <TableCell>{produto.tipo}</TableCell>
                  <TableCell>
                    <span className={`font-medium ${
                      produto.quantidade === 0 ? 'text-destructive' :
                      produto.quantidade <= 10 ? 'text-warning' : 
                      'text-foreground'
                    }`}>
                      {produto.quantidade} un.
                    </span>
                  </TableCell>
                  <TableCell>
                    R$ {produto.valorPadrao.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
                  </TableCell>
                  <TableCell className="font-medium text-success">
                    R$ {(produto.quantidade * produto.valorPadrao).toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
                  </TableCell>
                  <TableCell>
                    {getStatusBadge(produto.status, produto.quantidade)}
                  </TableCell>
                  <TableCell className="text-right">
                    <div className="flex justify-end space-x-2">
                      <Button variant="outline" size="sm">
                        Editar
                      </Button>
                      <Button variant="outline" size="sm">
                        Ajustar Estoque
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