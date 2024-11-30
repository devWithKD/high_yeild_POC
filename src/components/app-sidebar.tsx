import {
    LayoutDashboard,
    Building2,
    Users,
    Inbox,
    Handshake,
    ArrowRightLeft,
} from "lucide-react";
import {
    Sidebar,
    SidebarContent,
    SidebarGroup,
    SidebarGroupContent,
    SidebarGroupLabel,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
    SidebarFooter,
} from "@/components/ui/sidebar";
import { AppSignOutButton } from "./app-signout-btn";
import { auth } from "@/auth";

const path_admin = "/application";
// const path_User = "/User";

// Menu items.
let items = [
    {
        title: "Dashboard",
        url: `${path_admin}/`,
        icon: LayoutDashboard,
    },
    {
        title: "Units",
        url: `${path_admin}/units`,
        icon: Building2,
    },
    {
        title: "Investors",
        url: `${path_admin}/investors`,
        icon: Handshake,
    },
    {
        title: "Transactions",
        url: `${path_admin}/transactions`,
        icon: ArrowRightLeft,
    },
    {
        title: "Users",
        url: `${path_admin}/users`,
        icon: Users,
    },
    {
        title: "Queries",
        url: `${path_admin}/queries`,
        icon: Inbox,
    },
];

export async function AppSidebar() {
    const session = await auth();
    const menuNotForInvestor = ["Investors", "Users"];

    if (session?.user?.role === "investor") {
        items = items.filter((v) => menuNotForInvestor.includes(v.title) === false);
    }

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
            <SidebarFooter className="p-4 mb-4">
                <AppSignOutButton />
            </SidebarFooter>
        </Sidebar>
    );
}
