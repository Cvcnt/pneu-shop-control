import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Plus, ShoppingCart, Package, Users, FileText } from "lucide-react";

const actions = [
  {
    title: "Nova Venda",
    description: "Registrar uma nova transação",
    icon: ShoppingCart,
    color: "bg-success",
    href: "/vendas/nova"
  },
  {
    title: "Adicionar Produto",
    description: "Cadastrar produto no estoque",
    icon: Package,
    color: "bg-primary",
    href: "/estoque/novo"
  },
  {
    title: "Nova Prospecção",
    description: "Registrar novo lead",
    icon: Users,
    color: "bg-warning",
    href: "/prospeccao/nova"
  },
  {
    title: "Gerar Relatório",
    description: "Criar relatório personalizado",
    icon: FileText,
    color: "bg-accent",
    href: "/relatorios/novo"
  }
];

export function QuickActions() {
  return (
    <Card className="bg-gradient-card shadow-card">
      <CardHeader>
        <CardTitle className="flex items-center space-x-2">
          <Plus className="h-5 w-5 text-primary" />
          <span>Ações Rápidas</span>
        </CardTitle>
        <CardDescription>
          Acesse as principais funcionalidades do sistema
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {actions.map((action) => (
            <Button
              key={action.title}
              variant="outline"
              className="h-auto p-4 justify-start hover:shadow-card transition-all duration-300 group"
              onClick={() => {
                // Navegar para a rota correspondente
                window.location.href = action.href;
              }}
            >
              <div className="flex items-center space-x-3 w-full">
                <div className={`p-2 rounded-lg ${action.color} text-white group-hover:scale-110 transition-transform`}>
                  <action.icon className="h-4 w-4" />
                </div>
                <div className="text-left">
                  <div className="font-medium">{action.title}</div>
                  <div className="text-xs text-muted-foreground">{action.description}</div>
                </div>
              </div>
            </Button>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}