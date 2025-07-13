import { MetricCard } from "@/components/dashboard/MetricCard";
import { QuickActions } from "@/components/dashboard/QuickActions";
import { RecentActivity } from "@/components/dashboard/RecentActivity";
import { 
  ShoppingCart, 
  Package, 
  Users, 
  TrendingUp,
  Target,
  AlertTriangle,
  DollarSign,
  BarChart3
} from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function Dashboard() {
  return (
    <div className="space-y-6 animate-fade-in">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-foreground">Dashboard</h1>
        <p className="text-muted-foreground">
          Visão geral das suas lojas de pneus
        </p>
      </div>

      {/* Métricas Principais */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <MetricCard
          title="Vendas Hoje"
          value="R$ 12.450"
          change="+12.5%"
          changeType="increase"
          icon={DollarSign}
          description="vs. ontem"
        />
        <MetricCard
          title="Produtos em Estoque"
          value="1.248"
          change="-3.2%"
          changeType="decrease"
          icon={Package}
          description="vs. semana passada"
        />
        <MetricCard
          title="Leads Ativos"
          value="47"
          change="+8.1%"
          changeType="increase"
          icon={Target}
          description="este mês"
        />
        <MetricCard
          title="Lojas Ativas"
          value="8"
          change="0%"
          changeType="neutral"
          icon={ShoppingCart}
          description="total"
        />
      </div>

      {/* Gráficos e Alertas */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Vendas por Região */}
        <Card className="lg:col-span-2 bg-gradient-card shadow-card">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <BarChart3 className="h-5 w-5 text-primary" />
              <span>Vendas por Região</span>
            </CardTitle>
            <CardDescription>
              Performance de vendas das últimas 4 semanas
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-80 flex items-center justify-center bg-accent/20 rounded-lg">
              <p className="text-muted-foreground">Gráfico de vendas será implementado aqui</p>
            </div>
          </CardContent>
        </Card>

        {/* Alertas */}
        <Card className="bg-gradient-card shadow-card">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <AlertTriangle className="h-5 w-5 text-warning" />
              <span>Alertas</span>
            </CardTitle>
            <CardDescription>
              Itens que precisam de atenção
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="p-3 rounded-lg bg-warning/10 border border-warning/20">
                <p className="text-sm font-medium text-warning-foreground">Estoque Baixo</p>
                <p className="text-xs text-muted-foreground">15 produtos com estoque crítico</p>
              </div>
              <div className="p-3 rounded-lg bg-destructive/10 border border-destructive/20">
                <p className="text-sm font-medium text-destructive-foreground">Meta em Risco</p>
                <p className="text-xs text-muted-foreground">Loja Centro - 68% da meta mensal</p>
              </div>
              <div className="p-3 rounded-lg bg-primary/10 border border-primary/20">
                <p className="text-sm font-medium text-primary-foreground">Leads Pendentes</p>
                <p className="text-xs text-muted-foreground">12 leads aguardando follow-up</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Ações Rápidas e Atividade Recente */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <QuickActions />
        <RecentActivity />
      </div>

      {/* Top Produtos */}
      <Card className="bg-gradient-card shadow-card">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <TrendingUp className="h-5 w-5 text-primary" />
            <span>Top Produtos</span>
          </CardTitle>
          <CardDescription>
            Produtos mais vendidos este mês
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {[
              { name: "Michelin Primacy 3 205/55R16", sales: 45, revenue: "R$ 22.500" },
              { name: "Bridgestone Turanza T005 225/45R17", sales: 38, revenue: "R$ 28.500" },
              { name: "Continental ContiPremiumContact 195/65R15", sales: 32, revenue: "R$ 19.200" },
              { name: "Goodyear EfficientGrip 215/60R16", sales: 28, revenue: "R$ 16.800" }
            ].map((product, index) => (
              <div key={index} className="flex items-center justify-between p-3 rounded-lg hover:bg-accent/50 transition-colors">
                <div className="flex items-center space-x-3">
                  <div className="h-8 w-8 bg-primary/10 rounded-lg flex items-center justify-center">
                    <span className="text-sm font-bold text-primary">#{index + 1}</span>
                  </div>
                  <div>
                    <p className="font-medium text-foreground">{product.name}</p>
                    <p className="text-sm text-muted-foreground">{product.sales} unidades vendidas</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-bold text-success">{product.revenue}</p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}