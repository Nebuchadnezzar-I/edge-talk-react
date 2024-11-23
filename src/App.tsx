import { useEffect, useRef, useState } from 'react';
import Header from './components/nav/header';
import { Button } from './components/ui/button';
import { GetInitData, type NegotiationData } from './db/init';
import { swipeContainerNext, swipeContainerPrev } from './helpers/swipe';
import NewNegotiationModal from './components/modal/new-n/new-n';

type PageState = {
    refreshCount: number;
    negotiations: NegotiationData;
    isLoading: boolean;
    hasExistingRecords: boolean;
    isModalActive: boolean;
};

export default function App() {
    const refContainer = useRef<HTMLDivElement>(null);
    const [appState, setAppState] = useState<PageState>({
        refreshCount: 0, // Used to trigger re-fetching
        negotiations: [], // List of negotiations (data)
        isLoading: true, // Indicates if data is being loaded
        hasExistingRecords: false, // True if the user has existing negotiations
        isModalActive: false, // New negotiation modal
    });

    const closeModal = () => {
        setAppState((prevState) => ({
            ...prevState,
            isModalActive: false,
        }));
    };

    const openModal = () => {
        setAppState((prevState) => ({
            ...prevState,
            isModalActive: true,
        }));
    };

    const refreshList = () => {
        setAppState((prevState) => ({
            ...prevState,
            refreshCount: Math.random(),
        }));
    };

    useEffect(() => {
        GetInitData()
            .then(({ data = [], firstNegotiation }) =>
                setAppState({
                    refreshCount: 0,
                    negotiations: data,
                    isLoading: false,
                    hasExistingRecords: firstNegotiation,
                    isModalActive: false,
                })
            )
            .catch(console.error);
    }, [appState.refreshCount]);

    const cls = (...classes: string[]) => classes.filter(Boolean).join(' ');

    return (
        <div className="p-3 pb-6 w-full h-full flex flex-col gap-3">
            {/* hasExistingRecords should be rewriteen its not obvious */}
            <Header
                showAddButton={!appState.hasExistingRecords}
                openModal={openModal}
            />
            <NewNegotiationModal
                isOpen={appState.isModalActive}
                setIsOpen={closeModal}
                refreshCall={refreshList}
            />

            <div
                className={`
                    w-full h-full flex flex-col justify-center items-center
                    ${!appState.hasExistingRecords || appState.isLoading ? 'hidden' : ''}
                `}
            >
                {appState.isLoading && !appState.hasExistingRecords && (
                    <div className="text-md font-semibold">Loading</div>
                )}

                {appState.hasExistingRecords && (
                    <Button className="rounded-full px-8" onClick={openModal}>
                        New negotiation
                    </Button>
                )}
            </div>

            <div
                ref={refContainer}
                className={cls(
                    'flex overflow-x-hidden snap-x snap-mandatory h-full gap-3',
                    appState.negotiations.length > 0 ? 'visible' : 'hidden'
                )}
            >
                <div className="w-full h-full flex flex-col gap-3 min-w-full snap-start">
                    {appState.negotiations.map((record, idx) => (
                        <Button
                            onClick={() => swipeContainerNext(refContainer)}
                            className="justify-start"
                            variant="outline"
                            key={idx}
                        >
                            <p>{record.name}</p>
                        </Button>
                    ))}
                </div>

                <div className="w-full h-full flex flex-col gap-3 min-w-full snap-start">
                    <Button variant="outline">Consulting</Button>
                    <Button variant="outline">Live chat</Button>
                    <Button variant="outline">Email</Button>
                    {/* Spacer */}
                    <div className="h-full"></div>
                    <Button
                        variant="outline"
                        onClick={() => swipeContainerPrev(refContainer)}
                    >
                        Back
                    </Button>
                </div>
            </div>
        </div>
    );
}
