import { useRef, useState } from "react";

import { Button } from "@/components/ui/button";
import { GetNextStep, NextStepData } from "./helpers/step";

import { X } from "lucide-react";
import { firstForm } from "./helpers/temp";

interface NNProps {
    isOpen: boolean;
    setIsOpen: (isOpen: boolean) => void;
}

export default function NewNegotiation({ isOpen, setIsOpen }: NNProps) {
    const [isLoading, setIsLoading] = useState(false);
    const [formElements, setFormElements] = useState<NextStepData[]>([]);
    const [elmIndex, setElmIndex] = useState(0);
    const swipeContainer = useRef<HTMLDivElement>(null);
    console.log(elmIndex);

    const swipeToNextStep = () => {
        return new Promise((resolve) => {
            if (!swipeContainer.current) return;
            swipeContainer.current.scrollTo({
                left: swipeContainer.current.scrollLeft + swipeContainer.current.clientWidth,
                behavior: 'smooth',
            });

            setTimeout(() => {
                resolve(1);
            }, 250);
        });
    }

    const swipeToPrevStep = () => {
        return new Promise((resolve) => {
            if (!swipeContainer.current) return;
            swipeContainer.current.scrollTo({
                left: swipeContainer.current.scrollLeft - swipeContainer.current.clientWidth,
                behavior: 'smooth',
            });

            setTimeout(() => {
                resolve(1);
            }, 250);
        });
    }

    const renderNextElement = async () => {
        return new Promise((resolve) => {
            const newElm = GetNextStep(elmIndex);
            setFormElements((prev) => [...prev, newElm]);
            swipeToNextStep();
            resolve(newElm);
        });
    }

    const renderNextStep = async () => {
        setIsLoading(true);
        if (firstForm.length >= elmIndex) {
            renderNextElement().then(() => {
                setElmIndex(elmIndex + 1);
                swipeToNextStep().then(() => {
                    setIsLoading(false);
                });
            });
        }
    };

    if (formElements.length === 0) {
        setElmIndex(elmIndex + 1);
        renderNextElement();
    }

    const renderPrevStep = async () => {
        setIsLoading(true);
        if (elmIndex === 1) {
            setIsLoading(false);
            return;
        }
        setElmIndex(elmIndex - 1);
        swipeToPrevStep().then(() => {
            setIsLoading(false);
        });
    };

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
            <div
                className="swipe-container w-full h-full flex overflow-x-hidden scroll-snap-x"
                ref={swipeContainer}
            >
                {formElements.map((elm, idx) => (
                    <div key={idx} className="min-w-full snap-start">
                        {elm.ui}
                    </div>
                ))}
            </div>

            <div className="flex">
                <Button
                    onClick={renderPrevStep}
                    variant="outline"
                    className={`
                        overflow-hidden transition-all duration-200
                        ${elmIndex === 1 ? "w-0 px-0" : "w-auto mr-3"}
                    `}
                    disabled={isLoading}
                >Prev</Button>

                <Button
                    onClick={renderNextStep}
                    className="w-full transition-all duration-200"
                    disabled={isLoading}
                >Next</Button>
            </div>
        </div>
    );
}
