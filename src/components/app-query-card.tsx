import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { MessageSquareReply, MessageSquareX } from "lucide-react";
import { QuereiesInterface } from "@/types/types";

export function AppQueryCard({
    quereiesInterface,
    isAdmin,
}: {
    quereiesInterface: QuereiesInterface;
    isAdmin: boolean;
}) {
    return (
        <Card className="w-[350px] rounded-[16px] m-2">
            <CardHeader className="mb-[-8px]">
                <div className="w-[100%] justify-end flex text-sm space-x-1 mb-1">
                    <Badge variant="outline">{quereiesInterface.type}</Badge>
                    <Badge>{quereiesInterface.state}</Badge>
                </div>
                {isAdmin === true ? (
                    <>
                        <CardTitle className="space-x-1">
                            <span>{quereiesInterface.user.name}</span>
                        </CardTitle>
                        <CardDescription>
                            {quereiesInterface.user.email}
                        </CardDescription>
                    </>
                ) : (
                    ""
                )}
            </CardHeader>
            <CardContent>
                <form>
                    <div className="grid w-full items-center gap-4">
                        <div className="flex flex-col space-y-1.5">
                            <h2>Q. {quereiesInterface.description}</h2>
                        </div>
                        <div className="flex flex-col space-y-1.5">
                            {isAdmin === true ? (
                                quereiesInterface.answer === "" ? (
                                    <Textarea placeholder="Type your message here." />
                                ) : (
                                    <h2 className="bg-zinc-100 h-[142px] rounded-[16px] py-[8px] px-[12px]">
                                        {quereiesInterface.answer}
                                    </h2>
                                )
                            ) : quereiesInterface.answer !== "" ? (
                                <h2 className="bg-zinc-100 h-[142px] rounded-[16px] py-[8px] px-[12px]">
                                    {quereiesInterface.answer}
                                </h2>
                            ) : (
                                ""
                            )}
                        </div>
                    </div>
                </form>
            </CardContent>
            {isAdmin === true && quereiesInterface.answer === "" ? (
                <CardFooter className="flex justify-between">
                    <Button
                        variant="outline"
                        className="border-[1px] text-red-500 border-red-500 bg-white rounded-[8px] hover:text-red-500"
                    >
                        <MessageSquareX />
                    </Button>
                    <Button className="border-[1px] border-green-500 bg-green-500 rounded-[8px] hover:bg-white hover:text-green-500">
                        <MessageSquareReply />
                    </Button>
                </CardFooter>
            ) : (
                ""
            )}
        </Card>
    );
}
