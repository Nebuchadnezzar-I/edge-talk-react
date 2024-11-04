import { useState } from "react";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button";
import { CircleArrowRight } from "lucide-react";
import { NewN } from "./new-n";

export default function Page() {
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);
    const isFirstNegotiation = true;

    return (
        <div className="w-full h-full">
            <div className="flex items-center justify-between w-full py-2">
                <h3 className="text-xl font-semibold">EdgeTalk.ai</h3>
                <Avatar>
                    <AvatarImage src="https://github.com/shadcn.png" />
                    <AvatarFallback>CN</AvatarFallback>
                </Avatar>
            </div>

            {isFirstNegotiation && (
                <div className="w-full h-full max-elm-h flex items-center justify-center">
                    <Button
                        className="rounded-full flex items-center gap-3"
                        onClick={() => setIsDrawerOpen(true)}
                    >
                        New negotiation
                        <CircleArrowRight />
                    </Button>
                </div>
            )}

            {!isFirstNegotiation && (
                <div className="w-full h-full max-elm-h bg-red-500">
                    {/* TODO */}
                </div>
            )}

            <NewN isOpen={isDrawerOpen} setIsOpen={setIsDrawerOpen} />
        </div>
    );
}
