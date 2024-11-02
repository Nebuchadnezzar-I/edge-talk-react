import React from 'react';
import { SidebarProvider } from '../components/ui/sidebar';
import { AppSidebar } from '../components/ui/app-sidebar';
import { ModeToggle } from '../components/custom/mode-toggle';
import { Avatar, AvatarFallback, AvatarImage } from "../components/ui/avatar"
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { CircleArrowRight, X } from 'lucide-react';
import ModalCarousel from '../components/custom/modal-carousel';

export default function Dashboard() {
    const [isModalOpen, setIsModalOpen] = React.useState(false);
    const isFirstNegotiation = true;

    return (
        <SidebarProvider>
            <AppSidebar />
            <main className='p-3 w-full'>
                <AppNavigation />
                <div className={`home-content-height overflow-y-auto h-full ${isFirstNegotiation && 'flex items-center justify-center'}`}>

                    {isFirstNegotiation && (
                        <Button
                            className='rounded-full flex items-center gap-5'
                            onClick={() => setIsModalOpen(true)}
                        >
                            Create new negotiation <CircleArrowRight />
                        </Button>
                    )}

                    <ModalCarousel isOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
                </div>
            </main>
        </SidebarProvider>
    )
};

export function AppNavigation() {
    return (
        <div className='flex items-center justify-between'>
            {/*<div className='flex items-center gap-3'>
                <SidebarTrigger />
                <NewNegotiation />
                <AIToggle />
            </div>
            */}
            <div>
                <p className='text-xl font-bold'>EdgeTalk.ai</p>
            </div>
            <div className='flex items-center gap-3'>
                <ModeToggle />
                <Avatar className='w-[2rem] h-[2rem]'>
                    <AvatarImage src="https://github.com/shadcn.png" />
                    <AvatarFallback>CN</AvatarFallback>
                </Avatar>
            </div>
        </div>
    );
}
