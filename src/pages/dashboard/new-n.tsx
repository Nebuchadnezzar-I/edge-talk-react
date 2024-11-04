import { Input } from "@/components/ui/input";
import { CircleX, Ellipsis } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useEffect, useRef, useState } from "react";
import { Questionnaire, questionnaire } from "@/utils/questionnaire";
import { Textarea } from "@/components/ui/textarea";
const OPEN_AI_API_KEY = import.meta.env.VITE_OPEN_AI_API_KEY;

interface Props {
    isOpen: boolean;
    setIsOpen: (isOpen: boolean) => void;
}

export const NewN = ({ isOpen, setIsOpen }: Props) => {
    const containerRef = useRef<HTMLDivElement | null>(null);
    const holdingQuestionaire = [...questionnaire];
    const [customQuestionArray, setcustomQuestionArray] = useState<JSX.Element[]>([]);
    const [swipeTriggered, setSwipeTriggered] = useState(false);
    const [formState, setFormState] = useState({
        lastAIResponse: "",
        currentQuestion: 0,
        isAnswering: true,
        isFirstQuestion: true,
        isReviewing: false,
        isAboutToFinish: false,
        isLoading: false,
        isEditing: false,
    });

    const handleFormDataSubmit = async () => {
        setFormState({
            ...formState,
            isReviewing: false,
            isAnswering: false,
            isEditing: false,
            isLoading: true
        });

        let r = "";
        if (formState.lastAIResponse === "") {
            r = await fetchOpenAIResponse(holdingQuestionaire);
        } else {
            r = await fetchOpenAIResponseBasedOnReview(holdingQuestionaire, formState.lastAIResponse);
        }

        const customQuestion = (
            <>
                <p>Would u say this is correct?</p>
                <Textarea className="text-md h-full mb-1" disabled value={r} />
            </>
        );


        setcustomQuestionArray([...customQuestionArray, customQuestion]);

        setFormState({
            ...formState,
            lastAIResponse: r,
            isLoading: false,
            isAnswering: false,
            isReviewing: true,
            isEditing: false
        });

        setSwipeTriggered(true);
    }

    const revalidateConclusion = async () => {
        setFormState({
            ...formState,
            isReviewing: false,
            isAnswering: false,
            isEditing: false,
            isLoading: true
        });

        const customQuestion = (
            <>
                <p>Please edit AIs conclusion</p>
                <Textarea className="text-md h-full mb-1" defaultValue={formState.lastAIResponse} />
            </>
        );

        setcustomQuestionArray([...customQuestionArray, customQuestion]);

        setFormState({
            ...formState,
            isLoading: false,
            isAnswering: false,
            isReviewing: false,
            isEditing: true
        });

        setSwipeTriggered(true);
    }

    const finishForm = () => {
        // TODO: Save to server
        setFormState({
            ...formState,
            currentQuestion: 0,
            isReviewing: false,
            isAnswering: true,
        });

        setIsOpen(false);
        swipeToStart(containerRef);
    }

    useEffect(() => {
        if (swipeTriggered && containerRef.current) {
            swipeNext(containerRef);
            setSwipeTriggered(false); // Reset the trigger
        }
    }, [swipeTriggered, customQuestionArray]);

    return (
        <div className={`fixed bottom-0 flex flex-col w-full left-0 p-3 gap-3 bg-background duration-200 ${isOpen ? "h-full" : "h-0"}`}>
            <div className="flex w-full justify-between py-6">
                <h3 className="text-md font-semibold">New negotiation</h3>
                <CircleX onClick={() => setIsOpen(false)} />
            </div>


            <div className="w-full h-full flex overflow-x-hidden snap-x snap-mandatory" ref={containerRef}>
                {holdingQuestionaire.map((q, idx) => (
                    <div key={idx} className="w-full h-full flex flex-col gap-2 min-w-full snap-center px-1">
                        <p><strong>{idx + 1}.</strong> {q.q}</p>
                        {q.i === 'i' ?
                            <Input className="text-md" placeholder={q.p}
                                onChange={(e) => holdingQuestionaire[idx].a = e.target.value} />
                            :
                            <Textarea className="text-md h-full mb-1" placeholder={q.p}
                                onChange={(e) => holdingQuestionaire[idx].a = e.target.value} />
                        }
                    </div>
                ))}

                {customQuestionArray.map((child, idx) => (
                    <div key={idx} className="w-full h-full flex flex-col gap-2 min-w-full snap-center px-1">
                        {child}
                    </div>
                ))}

            </div>

            {/* Form buttons */}
            {formState.isAnswering && (
                <div className={`flex gap-3`}>
                    {!formState.isFirstQuestion && (
                        <Button variant="outline"
                            onClick={() => swipeBack(containerRef)}>Back</Button>
                    )}
                    <Button className="w-full"
                        onClick={() => {
                            if (formState.currentQuestion === holdingQuestionaire.length - 1) {
                                handleFormDataSubmit();
                                return;
                            }
                            swipeNext(containerRef);
                            setFormState({
                                ...formState,
                                isFirstQuestion: false,
                                currentQuestion: formState.currentQuestion + 1
                            });
                        }}
                    >Next</Button>
                </div>
            )}

            {formState.isReviewing && (
                <div className={`flex gap-3`}>
                    <Button variant="outline" className="w-full"
                        onClick={revalidateConclusion}>No</Button>
                    <Button variant="outline" className="w-full"
                        onClick={finishForm}>Yes</Button>
                </div>
            )}

            {formState.isAboutToFinish && (
                <div className={`flex gap-3`}>
                    <Button className="w-full">Finish</Button>
                </div>
            )}

            {formState.isLoading && (
                <div className={`flex gap-3`}>
                    <Button className="w-full" disabled>
                        <Ellipsis />
                    </Button>
                </div>
            )}

            {formState.isEditing && (
                <div className={`flex gap-3`}>
                    <Button className="w-full" onClick={handleFormDataSubmit}>Send to AI</Button>
                </div>
            )}

        </div>
    );
}

// Helpers

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

const swipeToStart = (containerRef: React.MutableRefObject<HTMLDivElement | null>) => {
    if (containerRef.current) {
        containerRef.current.scrollTo({ left: 0, behavior: "smooth" });
    }
};

const fetchOpenAIResponse = async (q: Questionnaire): Promise<string> => {
    const prompt = `Please analyze the following questionnaire responses and provide a conclusion about the user's understanding: Responses: ${JSON.stringify(q)}`
    const response = await fetch("https://api.openai.com/v1/chat/completions", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${OPEN_AI_API_KEY}`,
        },
        body: JSON.stringify({
            model: "gpt-3.5-turbo",
            messages: [
                { role: "system", content: "Make key-notes from source provided, nothing else." },
                { role: "user", content: prompt },
            ],
            max_tokens: 300,
        }),
    });

    const data = await response.json();
    return data.choices[0].message.content;
};

const fetchOpenAIResponseBasedOnReview = async (q: Questionnaire, l: string): Promise<string> => {
    const prompt = `Please analyze the following questionnaire responses and provide a conclusion about the user's understanding: Responses: ${JSON.stringify(q)}. With user rewrite of you notes from last time: ${l}`;
    const response = await fetch("https://api.openai.com/v1/chat/completions", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${OPEN_AI_API_KEY}`,
        },
        body: JSON.stringify({
            model: "gpt-3.5-turbo",
            messages: [
                { role: "system", content: "Make new key-notes from source provided, nothing else." },
                { role: "user", content: prompt },
            ],
            max_tokens: 300,
        }),
    });

    const data = await response.json();
    return data.choices[0].message.content;
};
