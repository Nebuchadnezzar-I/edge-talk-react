import { useEffect, useRef, useState } from "react";

import { Button } from "@/components/ui/button";
import { X } from "lucide-react";
import { GetNextStep, type NextStepData } from "./helpers/step";
import { firstForm } from "./helpers/temp";
import { SwipeNext, SwipePrev } from "@/utils/ui";

interface NNProps {
    isOpen: boolean;
    setIsOpen: (isOpen: boolean) => void;
}

export default function NewNegotiation({ isOpen, setIsOpen }: NNProps) {
    const swipeContainer = useRef<HTMLDivElement>(null);
    const [isLoading, setIsLoading] = useState(false);
    const [formElements, setFormElements] = useState<NextStepData[]>([]);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isNavHidden, setIsNavHidden] = useState(false);
    const viewIdx = useRef(0);

    useEffect(() => {
        getNextElement(viewIdx.current)
            .then((res) => {
                viewIdx.current += 1;
                setFormElements([res]);
                setCurrentIndex(0);
            })
            .then(async () => await SwipeNext(swipeContainer))
            .finally(() => {
                setIsLoading(false);
            });
    }, []);

    const renderPrevStep = () => {
        if (currentIndex > 0) {
            setCurrentIndex(currentIndex - 1);
            SwipePrev(swipeContainer);
        }
    }

    const renderNextStep = () => {
        if (currentIndex < formElements.length - 1) {
            setCurrentIndex(currentIndex + 1);
            SwipeNext(swipeContainer);
        } else if (viewIdx.current < firstForm.length) {
            setIsLoading(true);
            getNextElement(viewIdx.current)
                .then((res) => {
                    viewIdx.current += 1;
                    setFormElements((prevElements) => [...prevElements, res]);
                    setCurrentIndex(currentIndex + 1);
                    if (res.hasOwnCtroller) {
                        setIsNavHidden(true);
                    } else {
                        setIsNavHidden(false);
                    }
                })
                .then(() => SwipeNext(swipeContainer))
                .finally(() => {
                    setIsLoading(false);
                });
        }
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

            <div className={`flex ${isNavHidden && "hidden"}`}>
                <Button
                    onClick={renderPrevStep}
                    disabled={isLoading}
                    variant="outline"
                    className={`
                        overflow-hidden transition-all duration-200
                        ${currentIndex <= 1 ? "w-0 px-0" : "w-auto mr-3"}
                    `}
                >Prev</Button>

                <Button
                    onClick={renderNextStep}
                    disabled={isLoading}
                    className="w-full transition-all duration-200"
                >Next</Button>
            </div>
        </div>
    );
}

const getNextElement = (idx: number): Promise<NextStepData> => {
    return new Promise((resolve) => {
        resolve(GetNextStep(idx));
    });
}
