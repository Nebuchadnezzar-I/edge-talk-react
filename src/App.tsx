import Header from './components/nav/header';
import { useEffect, useRef, useState } from 'react';
import { Button } from './components/ui/button';
import { GetInitData, NegotiationData } from './db/init';
import NewNegotiationModal from './components/modal/new-n';
import { supabase } from './db/create-client';

type NegotiationDataState = {
    firstNegotiation: boolean;
    data?: NegotiationData;
} | null;

export type FormEntries = {
    nName: string;
    elmZero: string;
    elmOne: string;
    elmTwo: string;
    elmThree: string;
    elmFour: string;
    elmFive: string;
    elmSix: string;
    elmSeven: string;
    elmEight: string;
    elmNine: string;
    elmTen: string;
    elmEleven: string;
    elmTwelve: string;
    elmThirteen: string;
    elmFourteen: string;
};

export default function App() {
    const [negotiationData, setNegotiationData] =
        useState<NegotiationDataState>(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    useEffect(() => {
        GetInitData().then(setNegotiationData).catch(console.error);
    }, []);

    const handleNewNegotiation = async (modalFormData: FormEntries) => {
        supabase
            .from('Negotiations')
            .insert([
                { name: modalFormData.nName, questionnaire: modalFormData },
            ])
            .then(({ error }) => {
                if (error) {
                    console.error('Error inserting data:', error);
                    return;
                }

                GetInitData()
                    .then(setNegotiationData)
                    .catch((err) =>
                        console.error('Error fetching updated data:', err)
                    );
            });

        setIsModalOpen(false);
    };

    return (
        <div className="p-3 w-full h-full flex flex-col gap-3">
            <Header />

            {negotiationData?.firstNegotiation && (
                <div className="w-full h-full flex items-center justify-center">
                    <Button
                        onClick={() => setIsModalOpen(true)}
                        className="rounded-full px-5"
                    >
                        Create new negotiation
                    </Button>
                </div>
            )}

            {!negotiationData?.firstNegotiation && (
                <SwipeContainer nData={negotiationData} />
            )}

            <NewNegotiationModal
                isOpen={isModalOpen}
                setIsOpen={setIsModalOpen}
                handleNewNegotiation={handleNewNegotiation}
            />
        </div>
    );
}

interface SwipeContainerProps {
    nData: NegotiationDataState;
}

function SwipeContainer({ nData }: SwipeContainerProps) {
    const refContainer = useRef<HTMLDivElement>(null);

    const swipeContainerNext = () => {
        if (!refContainer.current) return;
        refContainer.current.scrollBy({
            left: window.innerWidth,
            behavior: 'smooth',
        });
    };

    const swipeContainerPrev = () => {
        if (!refContainer.current) return;
        refContainer.current.scrollBy({
            left: -window.innerWidth,
            behavior: 'smooth',
        });
    };

    return (
        <div
            className="flex w-full overflow-x-hidden snap-x h-full gap-3"
            ref={refContainer}
        >
            <div className="h-full min-w-full snap-start">
                {nData?.data?.map((n, idx) => (
                    <Button
                        key={idx}
                        variant="outline"
                        className="w-full justify-start"
                        onClick={swipeContainerNext}
                    >
                        {n.name}
                    </Button>
                ))}
            </div>

            <div className="h-full min-w-full snap-start">
                {/* Header */}
                <div className="w-full flex items-center justify-between">
                    <Button variant="ghost" onClick={swipeContainerPrev}>
                        Back
                    </Button>
                    <h3 className="text-lg font-semibold">Details</h3>
                </div>
            </div>
        </div>
    );
}
