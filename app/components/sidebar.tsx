"use client";
import Link from "next/link";
import {
  Home,
  BarChart2,
  Folder,
  Users,
  Settings,
  HelpCircle,
} from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
} from "@/components/ui/sidebar";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const menuItems = [
  { icon: Home, label: "Home", href: "/" },
  { icon: BarChart2, label: "Dashboard", href: "/dashboard" },
  { icon: Folder, label: "Projects", href: "/projects" },
  { icon: Users, label: "Team", href: "/team" },
  { icon: Settings, label: "Settings", href: "/settings" },
  { icon: HelpCircle, label: "Help", href: "/help" },
];

export function AppSidebar() {
  return (
    <Sidebar className="flex flex-col justify-between transition-all duration-300 ease-in-out mt-20 w-64">
      <div>
        <SidebarHeader className="p-4">
          <h2 className="text-lg font-semibold transition-opacity opacity-100">
            Menu
          </h2>
        </SidebarHeader>
        <SidebarContent>
          <SidebarMenu>
            {menuItems.map((item) => (
              <SidebarMenuItem key={item.href}>
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <SidebarMenuButton
                        asChild
                        className="flex items-center py-2 justify-start px-4"
                      >
                        <Link href={item.href}>
                          <item.icon className="h-5 w-5 mr-2" />
                          <span className="transition-opacity opacity-100">
                            {item.label}
                          </span>
                        </Link>
                      </SidebarMenuButton>
                    </TooltipTrigger>
                    <TooltipContent side="right" className="hidden">
                      {item.label}
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </SidebarMenuItem>
            ))}
          </SidebarMenu>
        </SidebarContent>
      </div>
    </Sidebar>
  );
}
