// import { auth } from "@/auth";
import { AppLoginForm } from "@/components/app-login-form";
import { redirect } from "next/navigation";

async function auth() {
    return {};
}

export default async function Page() {
    const session = await auth();
    console.log(session);
    if (!session?.user)
        return (
            <div className="h-[90vh] flex flex-col justify-center items-center bg-zinc-200 rounded-[16px]">
                <div className={`text-center text-primaryBG mb-8`}>
                    <h2 className="text-4xl">Welcome to</h2>
                    <h2 className="text-6xl font-semibold">High Yeild</h2>
                </div>
                <div className="sm:w-[60%] md:w-[60%] lg:w-[40%]">
                    <AppLoginForm />
                </div>
            </div>
        );
    else redirect("/");
}
