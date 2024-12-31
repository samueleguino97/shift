"use client";

import * as React from "react";
import { Check, ChevronsUpDown } from "lucide-react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import Image from "next/image";

export function OrgSwitcher({
  orgs,
  defaultOrg,
}: {
  orgs: { value: string; label: string; plan: string }[];
  defaultOrg: { value: string; label: string; plan: string };
}) {
  const [selectedOrg, setSelectedOrg] = React.useState(defaultOrg.value);
  const selectedOrgIndex = orgs.findIndex((org) => org.value === selectedOrg);

  return (
    <SidebarMenu>
      <SidebarMenuItem>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <SidebarMenuButton
              size="lg"
              className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
            >
              <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-sidebar-primary text-sidebar-primary-foreground">
                <Image
                  src="/logo.png"
                  className="rounded-lg"
                  alt="logo"
                  width={32}
                  height={32}
                />
              </div>
              <div className="flex flex-col gap-0.5 leading-none">
                <span className="font-semibold whitespace-nowrap">
                  {orgs[selectedOrgIndex].label}
                </span>
                <span className="text-muted-foreground text-xs whitespace-nowrap">
                  {orgs[selectedOrgIndex].plan}
                </span>
              </div>
              <ChevronsUpDown className="ml-auto" />
            </SidebarMenuButton>
          </DropdownMenuTrigger>
          <DropdownMenuContent
            className="w-[--radix-dropdown-menu-trigger-width]"
            align="start"
          >
            {orgs.map((version) => (
              <DropdownMenuItem
                key={version.value}
                onSelect={() => setSelectedOrg(version.value)}
              >
                {version.label}
                {version.value === selectedOrg && <Check className="ml-auto" />}
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      </SidebarMenuItem>
    </SidebarMenu>
  );
}
