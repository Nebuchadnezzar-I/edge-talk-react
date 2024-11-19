import { useRef, useState } from 'react';
import { Button } from '../ui/button';
import {
    FormElementEight,
    FormElementEleven,
    FormElementFive,
    FormElementFour,
    FormElementFourteen,
    FormElementNine,
    FormElementOne,
    FormElementSeven,
    FormElementSix,
    FormElementTen,
    FormElementThirteen,
    FormElementThree,
    FormElementTwelve,
    FormElementTwo,
    FormElementZero,
} from './forms-elements';

interface NewNegotiationModalProps {
    isOpen: boolean;
    setIsOpen: (value: boolean) => void;
}

const FORM_LENGTH = 15;

export default function NewNegotiationModal({
    isOpen,
    setIsOpen,
}: NewNegotiationModalProps) {
    const refContainer = useRef<HTMLDivElement>(null);
    const [viewIndex, setViewIndex] = useState(0);
    const [formEntries, setFormEntries] = useState({
        elmZero: '',
        elmOne: '',
        elmTwo: '',
        elmThree: '',
        elmFour: '',
        elmFive: '',
        elmSix: '',
        elmSeven: '',
        elmEight: '',
        elmNine: '',
        elmTen: '',
        elmEleven: '',
        elmTwelve: '',
        elmThirteen: '',
        elmFourteen: '',
    });

    const closeModal = () => {
        setFormEntries({
            elmZero: '',
            elmOne: '',
            elmTwo: '',
            elmThree: '',
            elmFour: '',
            elmFive: '',
            elmSix: '',
            elmSeven: '',
            elmEight: '',
            elmNine: '',
            elmTen: '',
            elmEleven: '',
            elmTwelve: '',
            elmThirteen: '',
            elmFourteen: '',
        });
        setIsOpen(false);
        setViewIndex(0);
        resetScrollPosition();
    };

    const submitForm = () => {
        console.log('Data:', formEntries);
        // TODO: Handle form data creation

        // Reset form entries
        closeModal();
    };

    const setFormEntryValue = (name: string, value: string) => {
        setFormEntries((prev) => ({ ...prev, [name]: value }));
    };

    const swipeContainerNext = () => {
        if (!refContainer.current) return;
        if (viewIndex === FORM_LENGTH) return;
        setViewIndex((prev) => prev + 1);
        refContainer.current.scrollBy({
            left: window.innerWidth,
            behavior: 'smooth',
        });
    };

    const swipeContainerPrev = () => {
        if (!refContainer.current) return;
        if (viewIndex === 0) return;
        setViewIndex((prev) => prev - 1);
        refContainer.current.scrollBy({
            left: -window.innerWidth,
            behavior: 'smooth',
        });
    };

    const resetScrollPosition = () => {
        if (refContainer.current) {
            refContainer.current.scrollTo({
                left: 0,
            });
        }
    };

    return (
        <div
            className={`
                fixed bottom-0 left-0 w-full bg-background flex flex-col
                gap-3 px-3 ${isOpen ? 'h-full py-3 pb-6' : 'h-0'} transition-all
            `}
        >
            <div className="w-full flex items-center justify-between">
                <h3 className="text-lg font-semibold">New negotiation</h3>
                <Button onClick={closeModal} variant="ghost">
                    Close
                </Button>
            </div>

            <div
                className="w-full flex overflow-x-hidden snap-x h-full gap-3"
                ref={refContainer}
            >
                <FormElementZero setVal={setFormEntryValue} />
                <FormElementOne setVal={setFormEntryValue} />
                <FormElementTwo setVal={setFormEntryValue} />
                <FormElementThree setVal={setFormEntryValue} />
                <FormElementFour setVal={setFormEntryValue} />
                <FormElementFive setVal={setFormEntryValue} />
                <FormElementSix setVal={setFormEntryValue} />
                <FormElementSeven setVal={setFormEntryValue} />
                <FormElementEight setVal={setFormEntryValue} />
                <FormElementNine setVal={setFormEntryValue} />
                <FormElementTen setVal={setFormEntryValue} />
                <FormElementEleven setVal={setFormEntryValue} />
                <FormElementTwelve setVal={setFormEntryValue} />
                <FormElementThirteen setVal={setFormEntryValue} />
                <FormElementFourteen setVal={setFormEntryValue} />
            </div>

            <div
                className={`flex gap-3 ${viewIndex === FORM_LENGTH && 'hidden'}`}
            >
                <Button variant="outline" onClick={swipeContainerPrev}>
                    Prev
                </Button>
                <Button className="w-full" onClick={swipeContainerNext}>
                    Next
                </Button>
            </div>

            <div
                className={`flex gap-3 ${viewIndex !== FORM_LENGTH && 'hidden'}`}
            >
                <Button className="w-full" onClick={submitForm}>
                    Submit
                </Button>
            </div>
        </div>
    );
}
