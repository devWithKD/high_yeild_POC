import { Calendar, Home, Inbox, Search, Settings } from "lucide-react";

import {
    Sidebar,
    SidebarContent,
    SidebarGroup,
    SidebarGroupContent,
    SidebarGroupLabel,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
} from "@/components/ui/sidebar";

const path_admin = "/application";
// const path_User = "/User";

// Menu items.
const items = [
    {
        title: "Dashboard",
        url: `${path_admin}/`,
        icon: Home,
    },
    {
        title: "Units",
        url: `${path_admin}/units`,
        icon: Settings,
    },
    {
        title: "Investors",
        url: `${path_admin}/investors`,
        icon: Inbox,
    },
    {
        title: "Users",
        url: `${path_admin}/users`,
        icon: Calendar,
    },
    {
        title: "Queries",
        url: `${path_admin}/queries`,
        icon: Search,
    },
];

export function AppSidebar() {
    return (
        <Sidebar>
            <SidebarContent>
                <SidebarGroup>
                    <SidebarGroupLabel>Application</SidebarGroupLabel>
                    <SidebarGroupContent>
                        <SidebarMenu>
                            {items.map((item) => (
                                <SidebarMenuItem key={item.title}>
                                    <SidebarMenuButton asChild>
                                        <a href={item.url}>
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
        </Sidebar>
    );
}
