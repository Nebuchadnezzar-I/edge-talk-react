import { useRef } from "react";
import { Button } from "../ui/button";

interface NewNegotiationModalProps {
    isOpen: boolean;
    setIsOpen: (value: boolean) => void;
}

export default function NewNegotiationModal(
    { isOpen, setIsOpen }: NewNegotiationModalProps
) {
    const refContainer = useRef<HTMLDivElement>(null);

    const swipeContainerNext = () => {
        if (!refContainer.current) return;
        refContainer.current.scrollBy({
            left: window.innerWidth,
            behavior: "smooth",
        });
    }

    const swipeContainerPrev = () => {
        if (!refContainer.current) return;
        refContainer.current.scrollBy({
            left: -window.innerWidth,
            behavior: "smooth",
        });
    }

    return (
        <div className={`
            fixed bottom-0 left-0 w-full bg-background flex flex-col
            gap-3 ${ isOpen ? "h-full p-3" : "h-0" } transition-all
            `}
        >
            <div className="w-full flex items-center justify-between">
                <h3 className="text-lg font-semibold">New negotiation</h3>
                <Button
                    onClick={() => setIsOpen(false)}
                    variant="ghost"
                >Close</Button>
            </div>

            <div className="
                w-full flex items-center
                overflow-x-hidden snap-x h-full gap-3"
                ref={refContainer}
            >
                <div className="min-w-full snap-start">1</div>
                <div className="min-w-full snap-start">1</div>
                <div className="min-w-full snap-start">1</div>
                <div className="min-w-full snap-start">1</div>
                <div className="min-w-full snap-start">1</div>
                <div className="min-w-full snap-start">1</div>
            </div>

            <div className="flex gap-3">
                <Button variant="outline" onClick={swipeContainerPrev}>Prev</Button>
                <Button className="w-full" onClick={swipeContainerNext}>Next</Button>
            </div>
        </div>
    );
}
