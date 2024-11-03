import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { questionnaire } from "@/utils/questionnaire";
import { CircleX } from "lucide-react";
import { useRef, useState } from "react";

interface NegotiationDrawerProps {
    isOpen: boolean;
    setIsOpen: (isOpen: boolean) => void;
}

export default function NegotiationDrawer({ isOpen, setIsOpen }: NegotiationDrawerProps) {
    const [questionIdx, setQuestionIdx] = useState(0);
    const [isReviewing, setIsReviewing] = useState(false);
    const containerRef = useRef<HTMLDivElement | null>(null);

    const swipeNext = () => {
        if (containerRef.current) {
            setQuestionIdx(questionIdx + 1);
            const scrollAmount = containerRef.current.offsetWidth;
            containerRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
        }
    };

    const swipeBack = () => {
        if (containerRef.current) {
            setQuestionIdx(questionIdx - 1);
            const scrollAmount = containerRef.current.offsetWidth;
            containerRef.current.scrollBy({ left: -scrollAmount, behavior: "smooth" });
        }
    };

    const swipeToStart = () => {
        if (containerRef.current) {
            setQuestionIdx(0);
            containerRef.current.scrollTo({ left: 0, behavior: "smooth" });
        }
    };

    const submitFormAndMove = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        let i = 0;
        for (const element of e.currentTarget.elements as HTMLFormControlsCollection) {
            if (element instanceof HTMLInputElement || element instanceof HTMLTextAreaElement) {
                const value = element.value;
                questionnaire[i].a = value;
                i++;
            }
        }

        console.log(questionnaire);
        setIsReviewing(true);
        swipeNext();
    }

    const createAndClose = () => {
        setIsOpen(false);
        swipeToStart();
        setIsReviewing(false);
    }

    return (
        <form onSubmit={submitFormAndMove} className={`fixed bottom-0 flex flex-col w-full left-0 bg-background duration-200 ${isOpen ? "h-full" : "h-0"}`}>
            <div className="flex w-full justify-between p-2 py-6">
                <h3 className="text-md font-semibold">New negotiation</h3>
                <CircleX onClick={() => setIsOpen(false)} />
            </div>
            <div className="w-full h-full flex overflow-x-hidden snap-x snap-mandatory" ref={containerRef}>

                {
                    questionnaire.map((q, idx) => (
                        <div key={idx} className="w-full h-full flex flex-col p-3 gap-2 min-w-full snap-center">
                            <p><strong>{idx + 1}.</strong> {q.q}</p>
                            {q.i === 'i' ? (
                                <Input name={`question_${idx}`} placeholder={q.p} className="text-md" />
                            ) : (
                                    <Textarea name={`question_${idx}`} placeholder={q.p} className="text-md h-full" />
                                )}
                        </div>
                    ))
                }

                <div className="w-full h-full flex flex-col p-3 gap-2 min-w-full snap-center">
                    <p>Would you say this is correct?</p>
                </div>

            </div>
            <div className="px-3 pb-3 flex">
                {isReviewing && (
                    <div className="flex w-full gap-3">
                        <Button variant="outline" className="w-full" type="button">No</Button>
                        <Button variant="outline" className="w-full" type="button" onClick={createAndClose}>Yes</Button>
                    </div>
                )}

                {!isReviewing && (
                    <div className={`overflow-hidden duration-200 ${questionIdx > 0 ? "w-[6rem]" : "w-0"}`}>
                        <Button variant="outline" onClick={swipeBack} type="button">
                            Back
                        </Button>
                    </div>
                )}

                {questionIdx !== questionnaire.length - 1 && !isReviewing && (
                    <Button className="w-full" onClick={swipeNext} type="button">
                        Next
                    </Button>
                )}

                {questionIdx === questionnaire.length - 1 && !isReviewing && (
                    <Button className="w-full" type="submit">
                        Finish
                    </Button>
                )}
            </div>
        </form>
    );
}
