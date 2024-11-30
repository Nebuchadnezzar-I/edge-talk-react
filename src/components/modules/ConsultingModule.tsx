import { ChevronLeft } from 'lucide-react';
import { Button } from '../ui/button';
import { swipeContainerPrev } from '@/helpers/swipe';
import { Textarea } from '../ui/textarea';

interface ConsultingModuleProps {
    refContainer: React.RefObject<HTMLDivElement>;
}

export default function ConsultingModule({
    refContainer,
}: ConsultingModuleProps) {
    return (
        <div className="w-full h-full flex flex-col gap-3 min-w-full snap-start">
            <Button
                variant="ghost"
                onClick={() => swipeContainerPrev(refContainer)}
                className="h-10 w-10 p-0"
            >
                <ChevronLeft />
            </Button>

            <div className="w-full h-full flex flex-col gap-1 overflow-y-auto">
                {Array.from({ length: 20 }).map(() => (
                    <>
                        <div className="w-full flex justify-end">
                            <div className="p-1 px-4 rounded-lg bg-blue-400 w-min max-w-[80%] break-words">133sssssssssssssssssssssssssssssssssssssss</div>
                        </div>
                        <div className="w-full flex justify-end">
                            <p className="opacity-70 text-sm">12:30</p>
                        </div>

                        <div className="w-full flex justify-start">
                            <div className="p-1 px-4 rounded-lg bg-secondary w-min max-w-[80%] break-words">133sssssssssssssssssssssssssssssssssssssss</div>
                        </div>
                        <div className="w-full flex justify-start">
                            <p className="opacity-70 text-sm">12:31</p>
                        </div>
                    </>
                ))}
            </div>

            <div className="flex p-1 gap-3">
                <Textarea placeholder="What do u think ..." />
                <Button className='h-full'>
                    Send
                </Button>
            </div>
        </div>
    );
}
