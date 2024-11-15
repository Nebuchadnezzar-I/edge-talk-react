import { X } from "lucide-react";
import { Button } from "../ui/button";
import { useRef } from "react";
import { SwipeNext, SwipePrev } from "@/utils/carousel";
import {
    Q0, Q1, Q2
} from "./elements";

interface NewNegotiationProps {
    modalState: boolean;
    toggleModal: () => void;
}

export default function NewNegotiation({
    modalState, toggleModal
}: NewNegotiationProps) {
    const swipeContainer = useRef<HTMLDivElement>(null);
    // const [isNavVisible, setIsNavVisible] = useState(true);

    // const toggleNav = () => setIsNavVisible(!isNavVisible);
    const SwipeParentNext = () => { SwipeNext(swipeContainer); };
    const SwipeParentPrev = () => { SwipePrev(swipeContainer); };

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
                <h3 className="font-semibold text-lg">New Negotiation</h3>
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
                <Q1 />
                <Q2 />
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
                >Back</Button>
                <Button
                    onClick={SwipeParentNext}
                    className="w-full"
                >Next</Button>
            </div>
        </div>
    );
}
