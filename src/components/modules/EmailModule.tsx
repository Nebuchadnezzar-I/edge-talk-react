import { ChevronLeft } from 'lucide-react';
import { Button } from '../ui/button';
import { swipeContainerPrev } from '@/helpers/swipe';

interface LiveChatModuleProps {
    refContainer: React.RefObject<HTMLDivElement>;
}

export default function LiveChatModule({ refContainer }: LiveChatModuleProps) {
    return (
        <div className="w-full h-full flex flex-col gap-3 min-w-full snap-start">
            <Button
                variant="ghost"
                onClick={() => swipeContainerPrev(refContainer)}
                className="h-10 w-10 p-0"
            >
                <ChevronLeft />
            </Button>
        </div>
    );
}
