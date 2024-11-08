import { Button } from "@/components/ui/button";
import { getNextStep } from "./helpers/step";
import { useRef, useState } from "react";
import { X } from "lucide-react";

interface NNProps {
    isOpen: boolean;
    setIsOpen: (isOpen: boolean) => void;
}

export default function NewNegotiation({ isOpen, setIsOpen }: NNProps) {
    const [step, setStep] = useState<JSX.Element>(<div></div>);
    const [stepIdx, setStepIdx] = useState(0);
    const swipeContainer = useRef<HTMLDivElement>(null);

    const renderNextStep = () => {
        const gen = async () => {
            const nextStep = getNextStep(stepIdx);
            return nextStep;
        }

        gen().then((nextStep) => {
            setStep(nextStep);
            setStepIdx(stepIdx + 1);
        });
    }

    const renderPrevStep = () => {
        if (stepIdx === 0) return;

        const prevStep = getNextStep(stepIdx - 1);
        setStep(prevStep);
        setStepIdx(stepIdx - 1);
    }

    return (
        <div
            className={`
                ${isOpen ? "h-[100dvh] pb-8" : "h-[0px]"}
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
            <div className="w-full h-full flex overflow-x-auto" ref={swipeContainer}>
                {step}
            </div>

            <div className="flex gap-3">
                <Button onClick={renderPrevStep} variant="outline">Prev</Button>
                <Button onClick={renderNextStep} className="w-full">Next</Button>
            </div>
        </div>
    );
}
