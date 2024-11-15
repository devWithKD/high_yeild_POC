import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar";
import { Toaster } from "@/components/ui/toaster";
import { auth } from "@/auth";
import { redirect } from "next/navigation";
import { isInternalRole } from "@/types/types";

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
        return (
            <>
                <SidebarProvider>
                    <AppSidebar />
                    <main className="w-[100vw]">
                        <SidebarTrigger />
                        <div className="px-10">{admin}</div>
                    </main>
                </SidebarProvider>
                <Toaster />
            </>
        );
    else if (session.user.role == "investor")
        return (
            <>
                <SidebarProvider>
                    <AppSidebar />
                    <main className="w-[100vw]">
                        <SidebarTrigger />
                        <div className="px-10">{investor}</div>
                    </main>
                </SidebarProvider>
                <Toaster />
            </>
        );
    // else redirect("/login");
}
