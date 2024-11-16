import { X } from "lucide-react";
import { Button } from "../ui/button";
import { useRef, useState } from "react";
import { SwipeNext, SwipePrev } from "@/utils/carousel";
import {
    Q0, Q1, Q2, Q3, Q4, Q5, Q6, Q7, Q8, Q9, Q10, Q11, Q12,
    Q13, Q14, Q15, Q16, Q17, Q18, Q19, Q20, Q21, Q22, Q23,
    Q24, Q25, Q26, Q27, Q28, Q29, Q30, Q31, Q32, Q33, Q34,
    Q35, Q36, Q37, Q38, Q39, Q40, Q41, Q42, Q43, Q44, Q45,
    Q46, Q47, Q13s, Q21s, Q28s, Q41s
} from "./elements";

interface NewNegotiationProps {
    modalState: boolean;
    toggleModal: () => void;
}

const QUESTIONS_LEN = 47;

export default function NewNegotiation({
    modalState, toggleModal
}: NewNegotiationProps) {
    const swipeContainer = useRef<HTMLDivElement>(null);
    const [isNavVisible, setIsNavVisible] = useState(true);
    const [viewIndex, setViewIndex] = useState(0);
    const navExcludedElements = [1];

    const ToggleNav = () => setIsNavVisible(!isNavVisible);
    const SwipeParentNext = () => {
        if (viewIndex >= QUESTIONS_LEN) return;
        setViewIndex(viewIndex + 1);
        SwipeNext(swipeContainer);
    };
    const SwipeParentPrev = () => {
        if (viewIndex === 0) return;
        setViewIndex(viewIndex - 1);
        SwipePrev(swipeContainer);
    };


    return (
        <div
            className={`
                bg-background w-full flex flex-col overflow-hidden
                p-3 duration-200 z-10 fixed bottom-0 left-0
                ${modalState ? "h-full": "h-0"}
            `}
        >
            {/* Header */}
            <div className="flex justify-between items-center">
                <h3 className="font-semibold text-lg">New Negotiation {viewIndex}</h3>
                <Button variant="ghost" onClick={toggleModal}>
                    <X />
                </Button>
            </div>

            {/* Body */}
            <div className="
                w-full h-full flex overflow-x-hidden snap-x snap-mandatory
                lg:w-[800px] lg:mx-auto mt-3" ref={swipeContainer}
            >
                <Q0 />
                <Q1 toggleNav={ToggleNav} SwipeParentNext={SwipeParentNext} />
                <Q2 />
                <Q3 />
                <Q4 />
                <Q5 />
                <Q6 />
                <Q7 />
                <Q8 />
                <Q9 />
                <Q10 />
                <Q11 />
                <Q12 />
                <Q13s />
                <Q13 />
                <Q14 />
                <Q15 />
                <Q16 />
                <Q17 />
                <Q18 />
                <Q19 />
                <Q20 />
                <Q21s />
                <Q21 />
                <Q22 />
                <Q23 />
                <Q24 />
                <Q25 />
                <Q26 />
                <Q27 />
                <Q28s />
                <Q28 />
                <Q29 />
                <Q30 />
                <Q31 />
                <Q32 />
                <Q33 />
                <Q34 />
                <Q35 />
                <Q36 />
                <Q37 />
                <Q38 />
                <Q39 />
                <Q40 />
                <Q41s />
                <Q41 />
                <Q42 />
                <Q43 />
                <Q44 />
                <Q45 />
                <Q46 />
                <Q47 />
            </div>

            {/* Navigation */}
            <div className={`
                    flex gap-3 transition-all duration-200 h-12
                    overflow-hidden `}
            >
                {/* {!isNavVisible ? "h-[0px] mt-0" : "mt-3"}`} */}
                <Button
                    onClick={SwipeParentPrev}
                    variant="outline"
                    className={`
                        ${viewIndex === 0 ? "hidden" : "block"}
                        ${navExcludedElements.includes(viewIndex) ? "w-full" : "w-min"}
                    `}
                >Back</Button>
                <Button
                    onClick={SwipeParentNext}
                    className={`w-full
                        ${navExcludedElements.includes(viewIndex) ? "hidden" : "block"}
                    `}
                >Next</Button>
            </div>
        </div>
    );
}
