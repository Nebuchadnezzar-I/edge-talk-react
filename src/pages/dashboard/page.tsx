import { useRef, useState } from "react";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button";
import { CircleArrowRight } from "lucide-react";
import { NewN } from "./new-n";
import { NewS } from "./new-s";

export default function Page() {
    const [isDrawerOpenS, setIsDrawerOpenS] = useState(false);
    const [isDrawerOpenN, setIsDrawerOpenN] = useState(false);
    const isFirstNegotiation = true;
    const refContainer = useRef<HTMLDivElement>(null);

    const swipeNext = (containerRef: React.MutableRefObject<HTMLDivElement | null>) => {
        if (containerRef.current) {
            const scrollAmount = containerRef.current.offsetWidth;
            containerRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
        }
    }

    const swipeBack = (containerRef: React.MutableRefObject<HTMLDivElement | null>) => {
        if (containerRef.current) {
            const scrollAmount = containerRef.current.offsetWidth;
            containerRef.current.scrollBy({ left: -scrollAmount, behavior: "smooth" });
        }
    }

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
                        onClick={() => setIsDrawerOpenN(true)}
                    >
                        New negotiation
                        <CircleArrowRight />
                    </Button>
                </div>
            )}

            <div className="flex h-full max-elm-h overflow-x-hidden" ref={refContainer}>
                {/* Session list */}
                {!isFirstNegotiation && (
                    <div className="w-full h-full overflow-y-auto min-w-[100%] border-box">
                        <div className="p-5 border rounded-e"
                            onClick={() => swipeNext(refContainer)}
                        >
                            Next
                        </div>
                    </div>
                )}

                {/* Negotiation list */}
                {!isFirstNegotiation && (
                    <div className="w-full h-full overflow-y-auto min-w-[100%] border-box">
                        <div className="p-5 border"
                            onClick={() => swipeBack(refContainer)}
                        >
                            Back
                        </div>
                        <Button
                            className="rounded-full flex items-center gap-3 mx-auto mt-10"
                            onClick={() => setIsDrawerOpenS(true)}
                        >
                            New session
                            <CircleArrowRight />
                        </Button>
                    </div>
                )}
            </div>

            <NewN isOpen={isDrawerOpenN} setIsOpen={setIsDrawerOpenN} />
            <NewS isOpen={isDrawerOpenS} setIsOpen={setIsDrawerOpenS} />
        </div>
    );
}
