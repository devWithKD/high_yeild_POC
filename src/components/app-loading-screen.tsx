import { AiOutlineLoading } from "react-icons/ai";

export function AppLoadingScreen() {
    return (
        <div className="w-screen h-screen max-h-svh flex items-center justify-center bg-primaryBG text-blue-500">
            <AiOutlineLoading size={30} className="animate-spin" />
        </div>
    );
}
