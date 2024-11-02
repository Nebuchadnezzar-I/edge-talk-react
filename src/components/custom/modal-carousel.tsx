import { X } from 'lucide-react';
import React, { useRef, useState } from 'react';
import { Input } from '../ui/input';
import { Button } from '../ui/button';

interface ModalCarouselProps {
    isOpen: boolean;
    setIsModalOpen?: React.Dispatch<React.SetStateAction<boolean>>;
}

type QnA = {
    q: string;
    a: string;
}

type QList = {
    q: string;
    placeholder: string;
    // select, text-area, multi-select, boolean, input
    type: 'd' | 't' | 's' | 'b' | 'i';
}

export default function ModalCarousel({ isOpen, setIsModalOpen }: ModalCarouselProps) {
    const scrollContainerRef = useRef<HTMLDivElement | null>(null);
    const [currentQuestion, setCurrentQuestion] = useState(0);

    const qna: QnA[] = [];

    const questionList: QList[] = [
        { q: 'What is the name of the negotiation?', type: 'i', placeholder: 'type the name of the negotiation' },
        { q: 'What is the name of the negotiation?', type: 'i', placeholder: 'type the name of the negotiation' },
        { q: 'What is the name of the negotiation?', type: 'i', placeholder: 'type the name of the negotiation' },
        { q: 'What is the name of the negotiation?', type: 'i', placeholder: 'type the name of the negotiation' },

        { q: 'What is the name of the negotiation?', type: 'i', placeholder: 'type the name of the negotiation' },
        { q: 'What is the name of the negotiation?', type: 'i', placeholder: 'type the name of the negotiation' },
        { q: 'What is the name of the negotiation?', type: 'i', placeholder: 'type the name of the negotiation' },
        { q: 'What is the name of the negotiation?', type: 'i', placeholder: 'type the name of the negotiation' },
    ];

    const handleScrollNext = () => {
        if (scrollContainerRef.current) {
            setCurrentQuestion(currentQuestion + 1);
            const width = scrollContainerRef.current.clientWidth;
            scrollContainerRef.current.scrollBy({ left: width, behavior: 'smooth' });
        }
    };

    const handleScrollPrevious = () => {
        if (scrollContainerRef.current) {
            setCurrentQuestion(currentQuestion - 1);
            const width = scrollContainerRef.current.clientWidth;
            scrollContainerRef.current.scrollBy({ left: -width, behavior: 'smooth' });
        }
    };

    if (!setIsModalOpen) return;
    return (
        <div className={` fixed bottom-0 left-0 w-full modal-max-h duration-300 bg-[hsl(var(--background))] border-t ${isOpen ? 'h-full' : 'h-0'} `}>

            {/* Header */}
            <div className='flex p-3 justify-between'>
                <p>Create new negotiation</p>
                <X  onClick={() => setIsModalOpen(false)} />
            </div>

            <div className='w-full h-full p-3 justify-between flex flex-col pb-20 mt-5'>
                {/* Carousel */}
                <div ref={scrollContainerRef} className='flex overflow-x-hidden snap-x snap-mandatory'>
                    {
                        questionList.map((q, i) => (
                            <div className='flex flex-col gap-3 min-w-full snap-center p-1'>
                                <p><strong>{i + 1}</strong>. {q.q}</p>
                                {
                                    q.type === 'i' && <Input className='text-md' placeholder='Type your answer here' />
                                }
                            </div>
                        ))
                    }
                </div>

                <div className='flex gap-3'>
                    <Button
                        variant='outline'
                        className={`w-full ${currentQuestion > 0 ? 'w-auto' : 'hidden'}`}
                        onClick={handleScrollPrevious}
                    >Previous</Button>
                    <Button
                        className='w-full'
                        onClick={handleScrollNext}
                    >Next</Button>
                </div>
            </div>

        </div>
    );
}
