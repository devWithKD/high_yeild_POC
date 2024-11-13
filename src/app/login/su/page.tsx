import { FaGithub } from "react-icons/fa";
// import { auth, signIn } from "@/auth";
import { redirect } from "next/navigation";
// import { kaushanScript } from "@/lib/fonts";

async function auth() {
    return {};
}

export default async function Page() {
    const session = await auth();
    console.log(session?.user?.id);
    if (!session?.user)
        return (
            <div className="h-[90vh] flex flex-col justify-center items-center bg-zinc-200 rounded-[16px]">
                <div className={`text-center text-primaryBG mb-8`}>
                    <h2 className="text-4xl">Welcome to</h2>
                    <h2 className="text-6xl font-semibold">High Yeild</h2>
                </div>
                <form
                    className="flex flex-col gap-2"
                    action={async () => {
                        "use server";
                        // await signIn("github");
                    }}
                >
                    <label className="font-bold text-lg text-center">
                        Super User Login
                    </label>
                    <button
                        type="submit"
                        className="flex gap-2 items-center p-2 rounded-md bg-zinc-900 dark:bg-zinc-300 text-zinc-100 dark:text-zinc-900"
                    >
                        <FaGithub size={24} />
                        <span className="text-lg"> Signin with GitHub</span>
                    </button>
                </form>
            </div>
        );
    else redirect("/");
}
