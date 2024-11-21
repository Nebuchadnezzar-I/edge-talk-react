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
    NameOfNegotiation,
} from './forms-elements';
import { FormEntries } from '@/App';

interface NewNegotiationModalProps {
    isOpen: boolean;
    setIsOpen: (value: boolean) => void;
    handleNewNegotiation: (modalFormData: FormEntries) => Promise<void>;
}

const FORM_LENGTH = 15;

export default function NewNegotiationModal({
    isOpen,
    setIsOpen,
    handleNewNegotiation,
}: NewNegotiationModalProps) {
    const refContainer = useRef<HTMLDivElement>(null);
    const [viewIndex, setViewIndex] = useState(0);

    const [formEntries, setFormEntries] = useState({
        nName: '',
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
            nName: '',
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
    };

    const submitForm = async () => {
        handleNewNegotiation(formEntries);
        closeModal();
    };

    const setFormEntryValue = (name: string, value: string) => {
        setFormEntries((prev) => ({ ...prev, [name]: value }));
    };

    const incrementViewIndex = () => {
        if (viewIndex < FORM_LENGTH) setViewIndex((prev) => prev + 1);
    };

    const decrementViewIndex = () => {
        if (viewIndex > 0) setViewIndex((prev) => prev - 1);
    };

    const RenderQuestion = (idx: number) => {
        switch (idx) {
            case 0:
                return <NameOfNegotiation setVal={setFormEntryValue} />;
            case 1:
                return <FormElementZero setVal={setFormEntryValue} />;
            case 2:
                return <FormElementOne setVal={setFormEntryValue} />;
            case 3:
                return <FormElementTwo setVal={setFormEntryValue} />;
            case 4:
                return <FormElementThree setVal={setFormEntryValue} />;
            case 5:
                return <FormElementFour setVal={setFormEntryValue} />;
            case 6:
                return <FormElementFive setVal={setFormEntryValue} />;
            case 7:
                return <FormElementSix setVal={setFormEntryValue} />;
            case 8:
                return <FormElementSeven setVal={setFormEntryValue} />;
            case 9:
                return <FormElementEight setVal={setFormEntryValue} />;
            case 10:
                return <FormElementNine setVal={setFormEntryValue} />;
            case 11:
                return <FormElementTen setVal={setFormEntryValue} />;
            case 12:
                return <FormElementEleven setVal={setFormEntryValue} />;
            case 13:
                return <FormElementTwelve setVal={setFormEntryValue} />;
            case 14:
                return <FormElementThirteen setVal={setFormEntryValue} />;
            case 15:
                return <FormElementFourteen setVal={setFormEntryValue} />;
            default:
                return <div>Invalid step</div>;
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
                {RenderQuestion(viewIndex)}
            </div>

            <div
                className={`flex gap-3 ${viewIndex === FORM_LENGTH && 'hidden'}`}
            >
                <Button variant="outline" onClick={decrementViewIndex}>
                    Prev
                </Button>
                <Button className="w-full" onClick={incrementViewIndex}>
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
