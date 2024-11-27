import { ChevronLeft } from "lucide-react";
import { Button } from "../ui/button";
import { Textarea } from "../ui/textarea";
import { swipeContainerPrev } from "@/helpers/swipe";

interface LiveChatModuleProps {
    refContainer: React.RefObject<HTMLDivElement>;
}

export default function LiveChatModule({ refContainer }: LiveChatModuleProps) {
    return (
        <div className="w-full h-full flex flex-col gap-3 min-w-full snap-start">
            <Button
                variant="outline"
                onClick={() => swipeContainerPrev(refContainer)}
                className="w-min"
            >
                <ChevronLeft />
            </Button>
            <div className="w-full h-full flex flex-col">
                <div className="w-full h-full"></div>
                <div className="p-1">
                    <Textarea placeholder="Ask AI ..." />
                </div>
            </div>
        </div>
    );
}
