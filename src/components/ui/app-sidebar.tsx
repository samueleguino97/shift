"use client";
import {
  Calendar,
  Home,
  User,
  DoorOpen,
  Users,
  File,
  Bell,
} from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { OrgSwitcher } from "./org-switcher";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const items = [
  {
    title: "Inicio",
    url: "/",
    icon: Home,
  },

  {
    title: "Empleados",
    url: "/employees",
    icon: Users,
  },
  {
    title: "Turnos y Tareas",
    url: "/time-management",
    icon: Calendar,
  },
  {
    title: "Documentos",
    url: "/documents",
    icon: File,
  },
  {
    title: "Notificaciones",
    url: "/notifications",
    icon: Bell,
  },
];

export function AppSidebar() {
  const pathname = usePathname();
  return (
    <Sidebar collapsible="icon">
      <SidebarHeader>
        <OrgSwitcher
          orgs={[
            {
              plan: "Plan Basico",
              label: "Gross Cafe",
              value: "gross-cafe",
            },
          ]}
          defaultOrg={{
            label: "Gross Cafe",
            value: "gross-cafe",
            plan: "Plan Basico",
          }}
        />
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <a
                      href={item.url}
                      className={cn({
                        ["bg-zinc-900 text-white hover:text-white hover:bg-zinc-700 transition-all"]:
                          pathname === item.url,
                      })}
                    >
                      <item.icon />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <SidebarMenuButton
              size="lg"
              className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
            >
              <div className="flex aspect-square size-8 items-center justify-center rounded-lg">
                <User />
              </div>
              <div className="flex flex-col gap-0.5 leading-none">
                <span className="font-semibold whitespace-nowrap">
                  Samuel Eguino
                </span>
                <span className="text-muted-foreground text-xs whitespace-nowrap">
                  Configuracion
                </span>
              </div>
            </SidebarMenuButton>
          </DropdownMenuTrigger>
          <DropdownMenuContent
            className="w-[--radix-dropdown-menu-trigger-width] min-w-max"
            align="start"
          >
            <DropdownMenuItem>
              <DoorOpen />
              Cerrar Sesion
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </SidebarFooter>
    </Sidebar>
  );
}
