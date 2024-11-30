import { auth } from "@/auth";
import { redirect } from "next/navigation";
import { isInternalRole } from "@/types/types";
// import { AppLayoutByUser } from "@/components/app-layout-by-user"

import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar";
import { Toaster } from "@/components/ui/toaster";
import { AppNavBar } from "@/components/app-navbar";

export default async function Layout({
    admin,
    investor,
}: Readonly<{
    admin: React.ReactNode;
    investor: React.ReactNode;
}>) {
    const session = await auth();
    console.log(session);
    if (!session || session.user == undefined) redirect("/login");
    if (isInternalRole(session.user.role || ""))
        return <LayoutByUser user={admin} />;
    else if (session.user.role == "investor")
        return <LayoutByUser user={investor} />;
    // else redirect("/login");
}

export function LayoutByUser({
    user,
}: Readonly<{
    user: React.ReactNode;
}>) {
    return (
        <>
            <SidebarProvider>
                <AppSidebar />
                <main className="w-[100vw]">
                    <AppNavBar />
                    <div className="px-0 lg:px-10">{user}</div>
                </main>
            </SidebarProvider>
            <Toaster />
        </>
    );
}
