import { useEffect, useRef, useState } from 'react';
import { Button } from '../ui/button';
import { Textarea } from '../ui/textarea';
import { GetMessage } from '@/helpers/openai';

type ChatHistory = {
    date: string;
    message: string;
    isSendByUser: boolean;
}[];

export default function ConsultingModule() {
    const chatContainerRef = useRef<HTMLDivElement>(null);
    const [chatState, setChatState] = useState<ChatHistory>([]);
    const [pageState, setPageState] = useState({
        isSubmitDisabled: false,
        currentMessage: '12',
    });

    useEffect(() => {
        if (chatContainerRef.current) {
            chatContainerRef.current.scrollTo({
                top: chatContainerRef.current.scrollHeight,
                behavior: 'smooth',
            });
        }
    }, [chatState]);

    const addMessage = async () => {
        const msg = pageState.currentMessage;
        if (msg == '') return;
        const rspAI = await GetMessage(JSON.stringify(chatState));

        setPageState((prevState) => ({
            ...prevState,
            isSubmitDisabled: false,
        }));

        setChatState((prevState) => [
            ...(prevState || []),
            {
                date: new Date().toISOString(),
                message: msg,
                isSendByUser: true,
            },
        ]);

        setChatState((prevState) => [
            ...(prevState || []),
            {
                date: new Date().toISOString(),
                message: rspAI,
                isSendByUser: false,
            },
        ]);

        setPageState((prevState) => ({
            ...prevState,
            isSubmitDisabled: false,
        }));
    };

    return (
        <div className="w-full h-full flex flex-col gap-3 min-w-full snap-start">
            <div
                ref={chatContainerRef}
                className="w-full h-full flex flex-col gap-1 overflow-y-auto pr-3"
            >
                {chatState?.map((msg, idx) => {
                    return generateChatMessage(
                        msg.message,
                        msg.date,
                        msg.isSendByUser,
                        idx
                    );
                })}
            </div>

            <div className="flex p-1 gap-3">
                <Textarea
                    onChange={(e) => {
                        setPageState((prevState) => ({
                            ...prevState,
                            currentMessage: e.target.value || '',
                        }));
                    }}
                    placeholder="What do u think ..."
                />
                <Button
                    onClick={addMessage}
                    className="h-full"
                    disabled={pageState.isSubmitDisabled}
                >
                    Send
                </Button>
            </div>
        </div>
    );
}

const generateChatMessage = (
    msgContent: string,
    date: string,
    isSendByUser: boolean,
    idx: number
) => {
    const hrs = date.substring(11, 13);
    const min = date.substring(14, 16);

    return (
        <div
            className={isSendByUser ? 'w-full' : 'w-full grid justify-end'}
            key={idx}
        >
            <h3
                className={`
                ${isSendByUser ? 'bg-blue-500' : 'bg-gray-500'}
                p-1 px-3 rounded-md text-md w-fit
                max-w-[300px] break-words overflow-hidden
            `}
            >
                {msgContent}
            </h3>
            <p className={!isSendByUser ? 'text-right' : ''}>
                {hrs + ':' + min}
            </p>
        </div>
    );
};
