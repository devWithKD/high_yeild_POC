import { AppQueryCard } from "@/components/app-query-card";
import { QuereiesInterface } from "@/types/types";

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
                        isAdmin={true}
                    />
                ))}
            </div>
        </>
    );
}
