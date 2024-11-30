import { Button } from '../ui/button';
import { Textarea } from '../ui/textarea';

export default function ConsultingModule() {
    return (
        <div className="w-full h-full flex flex-col gap-3 min-w-full snap-start">
            <div className="w-full h-full flex flex-col gap-1 overflow-y-auto pr-3">
                {Array.from({ length: 20 }).map(() => (
                    <>
                        <div className="w-full flex justify-end">
                            <div className="p-1 px-4 rounded-lg bg-blue-400 w-min max-w-[80%] break-words">
                                133sssssssssssssssssssssssssssssssssssssss
                            </div>
                        </div>
                        <div className="w-full flex justify-end">
                            <p className="opacity-70 text-sm">12:30</p>
                        </div>

                        <div className="w-full flex justify-start">
                            <div className="p-1 px-4 rounded-lg bg-secondary w-min max-w-[80%] break-words">
                                133sssssssssssssssssssssssssssssssssssssss
                            </div>
                        </div>
                        <div className="w-full flex justify-start">
                            <p className="opacity-70 text-sm">12:31</p>
                        </div>
                    </>
                ))}
            </div>

            <div className="flex p-1 gap-3">
                <Textarea placeholder="What do u think ..." />
                <Button className="h-full">Send</Button>
            </div>
        </div>
    );
}
