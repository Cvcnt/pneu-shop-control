import { useState } from "react";
import { 
  LayoutDashboard, 
  ShoppingCart, 
  Package, 
  Users, 
  TrendingUp,
  FileText,
  Settings,
  Store,
  Target,
  BarChart3,
  ChevronLeft,
  ChevronRight
} from "lucide-react";
import { NavLink } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const menuItems = [
  {
    title: "Dashboard",
    icon: LayoutDashboard,
    href: "/",
    description: "Visão geral do negócio"
  },
  {
    title: "Vendas",
    icon: ShoppingCart,
    href: "/vendas",
    description: "Gestão de vendas"
  },
  {
    title: "Estoque",
    icon: Package,
    href: "/estoque",
    description: "Controle de produtos"
  },
  {
    title: "Prospecção",
    icon: Target,
    href: "/prospeccao",
    description: "Leads e oportunidades"
  },
  {
    title: "Relatórios",
    icon: BarChart3,
    href: "/relatorios",
    description: "Análises e métricas"
  },
  {
    title: "Lojas",
    icon: Store,
    href: "/lojas",
    description: "Gestão de lojas"
  },
  {
    title: "Usuários",
    icon: Users,
    href: "/usuarios",
    description: "Equipe e permissões"
  }
];

export function Sidebar() {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <aside className={cn(
      "bg-card border-r border-border shadow-card transition-all duration-300 flex flex-col",
      collapsed ? "w-16" : "w-64"
    )}>
      {/* Toggle Button */}
      <div className="p-4 border-b border-border">
        <Button
          variant="ghost"
          size="sm"
          onClick={() => setCollapsed(!collapsed)}
          className="w-full justify-center hover:bg-primary/10"
        >
          {collapsed ? <ChevronRight className="h-4 w-4" /> : <ChevronLeft className="h-4 w-4" />}
        </Button>
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-4 space-y-2">
        {menuItems.map((item) => (
          <NavLink
            key={item.href}
            to={item.href}
            className={({ isActive }) =>
              cn(
                "flex items-center space-x-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors group",
                isActive
                  ? "bg-primary text-primary-foreground shadow-sm"
                  : "text-muted-foreground hover:text-foreground hover:bg-accent"
              )
            }
          >
            <item.icon className="h-5 w-5 flex-shrink-0" />
            {!collapsed && (
              <div className="flex-1 min-w-0">
                <div className="truncate">{item.title}</div>
                {!collapsed && (
                  <div className="text-xs opacity-75 truncate">{item.description}</div>
                )}
              </div>
            )}
          </NavLink>
        ))}
      </nav>

      {/* Footer */}
      <div className="p-4 border-t border-border">
        <NavLink
          to="/configuracoes"
          className={({ isActive }) =>
            cn(
              "flex items-center space-x-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors",
              isActive
                ? "bg-primary text-primary-foreground"
                : "text-muted-foreground hover:text-foreground hover:bg-accent"
            )
          }
        >
          <Settings className="h-5 w-5 flex-shrink-0" />
          {!collapsed && <span>Configurações</span>}
        </NavLink>
      </div>
    </aside>
  );
}