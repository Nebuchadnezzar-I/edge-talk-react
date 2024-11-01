import React from 'react';
import { useParams } from 'react-router-dom';
import { Input } from '../components/ui/input';
import { Button } from '../components/ui/button';
import { Info, SendHorizontal, Undo2 } from 'lucide-react';

export default function ChatWindow() {
    const { slug } = useParams();

    return (
        <div className='w-full h-full lg:max-w-[80%] mx-auto flex flex-col pb-5 px-3'>
            {/* Head */}
            <div className='flex items-center py-3 border-b mb-3 gap-3 justify-between'>
                <div className='flex items-center gap-3'>
                    <a href="/">
                        <Button variant='ghost'>
                            <Undo2 />
                        </Button>
                    </a>
                    <h1 className='text-xl font-bold'>Chat {slug}</h1>
                </div>
                <div className='flex items-center gap-3'>
                    <Button variant='destructive'>End Chat</Button>
                    <Button variant='ghost'>
                        {/* TODO: Add modal */}
                        <Info />
                    </Button>
                </div>
            </div>
            {/* Chat */}
            <div className='space-y-4 h-full overflow-y-auto'>
                {/* AI */}
                <div className="flex w-max max-w-[75%] flex-col gap-2 rounded-lg px-3 py-2 text-sm bg-muted">
                    Hi, how can I help you today?
                </div>
                {/* User */}
                <div className="flex w-max max-w-[75%] flex-col gap-2 rounded-lg px-3 py-2 text-sm ml-auto bg-primary text-primary-foreground">
                    Hey, I'm having trouble with my account.
                </div>
            </div>
            {/* Input */}
            <div className='flex gap-3'>
                <Input
                    type='text'
                    className='w-full'
                    placeholder='Type a message...'
                />
                <Button variant="default">
                    <SendHorizontal />
                </Button>
            </div>
        </div>
    );
};
