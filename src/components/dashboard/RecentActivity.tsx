import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Activity, ShoppingCart, Package, Users, TrendingUp } from "lucide-react";

const activities = [
  {
    id: 1,
    type: "venda",
    description: "Venda de R$ 1.250,00 realizada",
    user: "Carlos Santos",
    time: "há 5 min",
    icon: ShoppingCart,
    color: "text-success"
  },
  {
    id: 2,
    type: "estoque",
    description: "Produto 'Michelin 205/55R16' adicionado",
    user: "Maria Silva",
    time: "há 12 min",
    icon: Package,
    color: "text-primary"
  },
  {
    id: 3,
    type: "prospeccao",
    description: "Novo lead convertido em venda",
    user: "João Oliveira",
    time: "há 25 min",
    icon: Users,
    color: "text-warning"
  },
  {
    id: 4,
    type: "meta",
    description: "Meta mensal de vendas atingida",
    user: "Sistema",
    time: "há 1h",
    icon: TrendingUp,
    color: "text-success"
  }
];

export function RecentActivity() {
  return (
    <Card className="bg-gradient-card shadow-card">
      <CardHeader>
        <CardTitle className="flex items-center space-x-2">
          <Activity className="h-5 w-5 text-primary" />
          <span>Atividade Recente</span>
        </CardTitle>
        <CardDescription>
          Últimas ações realizadas no sistema
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {activities.map((activity) => (
            <div key={activity.id} className="flex items-start space-x-3 p-3 rounded-lg hover:bg-accent/50 transition-colors">
              <div className={`p-2 rounded-lg bg-background border ${activity.color}`}>
                <activity.icon className="h-4 w-4" />
              </div>
              <div className="flex-1 space-y-1">
                <p className="text-sm font-medium text-foreground">{activity.description}</p>
                <div className="flex items-center space-x-2">
                  <div className="flex items-center space-x-2">
                    <Avatar className="h-5 w-5">
                      <AvatarFallback className="text-xs bg-primary/10 text-primary">
                        {activity.user.split(' ').map(n => n[0]).join('')}
                      </AvatarFallback>
                    </Avatar>
                    <span className="text-xs text-muted-foreground">{activity.user}</span>
                  </div>
                  <span className="text-xs text-muted-foreground">•</span>
                  <span className="text-xs text-muted-foreground">{activity.time}</span>
                </div>
              </div>
              <Badge variant="secondary" className="text-xs">
                {activity.type}
              </Badge>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}