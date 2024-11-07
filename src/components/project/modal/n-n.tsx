import { Button } from "@/components/ui/button";
import { getNextStep } from "./helpers/step";
import { useRef, useState } from "react";
import { X } from "lucide-react";

interface NNProps {
    isOpen: boolean;
    setIsOpen: (isOpen: boolean) => void;
}

export default function NewNegotiation({ isOpen, setIsOpen }: NNProps) {
    const [step, setStep] = useState<JSX.Element[]>([<div></div>]);
    const [stepIdx, setStepIdx] = useState(0);
    const swipeContainer = useRef<HTMLDivElement>(null);

    const swipe = (direction: "left" | "right") => {
        if (swipeContainer.current) {
            swipeContainer.current.scrollBy({
                left: direction === "left" ? -swipeContainer.current.offsetWidth : swipeContainer.current.offsetWidth,
                behavior: "smooth",
            });
        }
    }

    const swipeToEnd = () => {
        if (swipeContainer.current) {
            swipeContainer.current.scrollBy({
                left: swipeContainer.current.scrollWidth,
                behavior: "smooth",
            });
        }
    }

    const renderNextStep = () => {
        const gen = async () => {
            const nextStep = getNextStep(stepIdx);
            setStep([...step, nextStep]);

            setStepIdx(stepIdx + 1);
        }

        gen().then(() => swipeToEnd());
    }

    return (
        <div
            className={`
                ${isOpen ? "h-[100dvh]" : "h-[0px]"}
                duration-200 fixed w-full bg-background bottom-0 left-0 p-3
                flex flex-col
            `}
        >
            {/* Header */}
            <div className="flex items-center justify-between w-full">
                <h3 className="font-semibold">New Negotiation</h3>
                <Button variant="ghost" onClick={() => setIsOpen(false)}>
                    <X />
                </Button>
            </div>

            {/* Body */}
            <div className="w-full h-full flex overflow-x-hidden" ref={swipeContainer}>
                {step}
            </div>

            <div className="flex gap-3">
                <Button variant="outline" onClick={() => swipe("left")}>Back</Button>
                <Button className="w-full" onClick={renderNextStep}>Next</Button>
            </div>
        </div>
    );
}
