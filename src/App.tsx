import { useEffect, useRef, useState } from 'react';
import Header from './components/nav/header';
import { Button } from './components/ui/button';
import { GetInitData, type NegotiationData } from './db/init';
import { swipeContainerNext, swipeContainerPrev } from './helpers/swipe';
import NewNegotiationModal from './components/modal/new-n/new-n';
import ConsultingModule from './components/modules/ConsultingModule';
import LiveChatModule from './components/modules/EmailModule';
import EmailModule from './components/modules/LiveChatModule';
import OutlineButton from './components/main-ui/Button';
import Spacer from './components/main-ui/Spacer';

enum ModuleView {
    Consulting,
    LiveChat,
    Email,
}

type PageState = {
    triggerRerender: number;
    negotiations: NegotiationData;
    isLoading: boolean;
    hasRecords: boolean;
    isModalActive: boolean;
    endModule: ModuleView;
};

export default function App() {
    const refContainer = useRef<HTMLDivElement>(null);
    const [appState, setAppState] = useState<PageState>({
        triggerRerender: 0,
        negotiations: [],
        isLoading: true,
        hasRecords: false,
        isModalActive: false,
        endModule: ModuleView.Consulting,
    });

    useEffect(() => {
        GetInitData()
            .then(({ data = [], hasRecords }) =>
                setAppState((prevState: PageState) => ({
                    ...prevState,
                    negotiations: data,
                    hasRecords: hasRecords,
                }))
            )
            .catch(console.error);
    }, [appState.triggerRerender]);

    const showButtonsIfNeeded = `
        w-full h-full flex flex-col justify-center items-center
        ${!appState.hasRecords || appState.isLoading ? 'hidden' : ''}
    `;

    const showListPage = `
        flex overflow-x-hidden snap-x snap-mandatory h-full gap-3
        ${appState.negotiations.length > 0 ? 'visible' : 'hidden'}
    `;

    return (
        <div className="p-3 pb-9 w-full h-full flex flex-col gap-3">
            <Header
                showAddButton={!appState.hasRecords}
                openModal={() => openModal(setAppState)}
            />
            <NewNegotiationModal
                isOpen={appState.isModalActive}
                setIsOpen={() => closeModal(setAppState)}
                refreshCall={() => refreshList(setAppState)}
            />

            {/*                              */}
            {/* Show loading / create button */}
            {/*                              */}
            <div className={showButtonsIfNeeded}>
                {appState.isLoading && !appState.hasRecords && (
                    <div className="text-md font-semibold">Loading</div>
                )}

                {appState.hasRecords && (
                    <OutlineButton
                        onClick={() => openModal(setAppState)}
                        sClass="rounded-full px-8"
                        text="New negotiation"
                    />
                )}
            </div>

            {/*           */}
            {/* Container */}
            {/*           */}
            <div ref={refContainer} className={showListPage}>
                {/*            */}
                {/* First view */}
                {/*            */}
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

                {/*             */}
                {/* Second view */}
                {/*             */}
                <div className="w-full h-full flex flex-col gap-3 min-w-full snap-start">
                    <div className="p-3 border rounded-md flex flex-col gap-1 duration-100 hover:bg-secondary cursor-pointer"
                        onClick={() => {
                            swipeContainerNext(refContainer);
                            setEndModule(setAppState, ModuleView.Consulting);
                        }}
                    >
                        <p className="text-sm">Consulting</p>
                        <p className="text-sm opacity-60">Consult you negotiation with AI.</p>
                    </div>

                    <div className="p-3 border rounded-md flex flex-col gap-1 duration-100 hover:bg-secondary cursor-pointer"
                        onClick={() => {
                            swipeContainerNext(refContainer);
                            setEndModule(setAppState, ModuleView.LiveChat);
                        }}
                    >
                        <p className="text-sm">Live chat</p>
                        <p className="text-sm opacity-60">Write messages to you opponent in real time.</p>
                    </div>

                    <div className="p-3 border rounded-md flex flex-col gap-1 duration-100 hover:bg-secondary cursor-pointer"
                        onClick={() => {
                            swipeContainerNext(refContainer);
                            setEndModule(setAppState, ModuleView.Email);
                        }}
                    >
                        <p className="text-sm">Email</p>
                        <p className="text-sm opacity-60">Write messages to you opponent in longer time period.</p>
                    </div>

                    <Spacer />
                    {/* mb-1 to align with EndModule */}
                    <OutlineButton
                        sClass="mb-1"
                        onClick={() => swipeContainerPrev(refContainer)}
                        text="Back"
                    />
                </div>

                {/*      */}
                {/* Last */}
                {/*      */}
                {appState.endModule === ModuleView.Consulting && (
                    <ConsultingModule refContainer={refContainer} />
                )}

                {appState.endModule === ModuleView.LiveChat && (
                    <LiveChatModule refContainer={refContainer} />
                )}

                {appState.endModule === ModuleView.Email && (
                    <EmailModule refContainer={refContainer} />
                )}
            </div>
        </div>
    );
}

//
//      Helper functions
//
const closeModal = (
    setAppState: React.Dispatch<React.SetStateAction<PageState>>
) => {
    setAppState((prevState: PageState) => ({
        ...prevState,
        isModalActive: false,
    }));
};

const openModal = (
    setAppState: React.Dispatch<React.SetStateAction<PageState>>
) => {
    setAppState((prevState) => ({
        ...prevState,
        isModalActive: true,
    }));
};

const refreshList = (
    setAppState: React.Dispatch<React.SetStateAction<PageState>>
) => {
    setAppState((prevState) => ({
        ...prevState,
        triggerRerender: Math.random(),
    }));
};

const setEndModule = (
    setAppState: React.Dispatch<React.SetStateAction<PageState>>,
    target: ModuleView
) => {
    setAppState((prevState) => ({
        ...prevState,
        endModule: target,
    }));
};
