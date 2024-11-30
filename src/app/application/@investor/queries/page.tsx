import { AppQueryCard } from "@/components/app-query-card";
import { QuereiesInterface } from "@/types/types";
import { QueryDialog } from "./_components/query-dialog";
import { MessageCirclePlus } from "lucide-react";

function getQueries(): QuereiesInterface[] {
    return [
        {
            type: "investment",
            state: "raised",
            user: {
                name: "Jone Dou",
                email: "jonedou@gmail.com",
            },
            description: "What is the value of xyz prop willing to negotiate?",
            answer: "",
        },
        {
            type: "investment",
            state: "raised",
            user: {
                name: "Jone Dou",
                email: "jonedou@gmail.com",
            },
            description: "What is the value of xyz prop willing to negotiate?",
            answer: "",
        },
        {
            type: "investment",
            state: "raised",
            user: {
                name: "Jone Dou",
                email: "jonedou@gmail.com",
            },
            description: "What is the value of xyz prop willing to negotiate?",
            answer: "",
        },
        {
            type: "investment",
            state: "raised",
            user: {
                name: "Jone Dou",
                email: "jonedou@gmail.com",
            },
            description: "What is the value of xyz prop willing to negotiate?",
            answer: "",
        },
        {
            type: "investment",
            state: "raised",
            user: {
                name: "Jone Dou",
                email: "jonedou@gmail.com",
            },
            description: "What is the value of xyz prop willing to negotiate?",
            answer: "",
        },
        {
            type: "investment",
            state: "raised",
            user: {
                name: "Jone Dou",
                email: "jonedou@gmail.com",
            },
            description: "What is the value of xyz prop willing to negotiate?",
            answer: "",
        },
        {
            type: "investment",
            state: "raised",
            user: {
                name: "Jone Dou",
                email: "jonedou@gmail.com",
            },
            description: "What is the value of xyz prop willing to negotiate?",
            answer: "",
        },
        {
            type: "investment",
            state: "raised",
            user: {
                name: "Jone Dou",
                email: "jonedou@gmail.com",
            },
            description: "What is the value of xyz prop willing to negotiate?",
            answer: "",
        },
        {
            type: "investment",
            state: "raised",
            user: {
                name: "Jone Dou",
                email: "jonedou@gmail.com",
            },
            description: "What is the value of xyz prop willing to negotiate?",
            answer: "",
        },
        {
            type: "investment",
            state: "raised",
            user: {
                name: "Jone Dou",
                email: "jonedou@gmail.com",
            },
            description: "What is the value of xyz prop willing to negotiate?",
            answer: "",
        },
        {
            type: "investment",
            state: "raised",
            user: {
                name: "Jone Dou",
                email: "jonedou@gmail.com",
            },
            description: "What is the value of xyz prop willing to negotiate?",
            answer: "",
        },
        {
            type: "investment",
            state: "raised",
            user: {
                name: "Jone Dou",
                email: "jonedou@gmail.com",
            },
            description: "What is the value of xyz prop willing to negotiate?",
            answer: "",
        },
    ];
}

export default async function Home() {
    const data = await getQueries();

    return (
        <>
            <div
                id="temp1"
                className="container py-10 mt-[-25px] flex flex-wrap"
            >
                {data.map((e, i) => (
                    <AppQueryCard
                        key={i}
                        quereiesInterface={e}
                        isAdmin={false}
                    />
                ))}
            </div>

            <div className="sticky bottom-12 me-3 flex justify-end">
                <QueryDialog
                    type="add"
                    title="Add Query"
                    Icon={<MessageCirclePlus size={68} />}
                    btnBgClassName="rounded-full h-[70px] w-[70px] border-[1px] border-green-500 bg-green-500 hover:bg-white hover:text-green-500"
                />
            </div>
        </>
    );
}
