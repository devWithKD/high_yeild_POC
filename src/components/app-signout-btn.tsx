import { signOut } from "@/auth";
import { GoSignOut } from "react-icons/go";
import { Button } from "./ui/button";

export function AppSignOutButton() {
    return (
        <form
            action={async () => {
                "use server";
                await signOut();
            }}
        >
            <Button
                type="submit"
                variant="default"
                className="flex items-center gap-2 w-full"
            >
                <span>Logout</span>
                <GoSignOut size={20} />
            </Button>
        </form>
    );
}
