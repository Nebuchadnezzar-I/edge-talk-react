import { CircleX } from "lucide-react";

interface Props {
    isOpen: boolean;
    setIsOpen: (isOpen: boolean) => void;
}

export const NewS = ({ isOpen, setIsOpen }: Props) => {

    return (
        <div className={`fixed bottom-0 flex flex-col w-full left-0 p-3 gap-3 bg-background duration-200 ${isOpen ? "h-full" : "h-0"}`}>
            <div className="flex w-full justify-between py-6">
                <h3 className="text-md font-semibold">New negotiation</h3>
                <CircleX onClick={() => setIsOpen(false)} />
            </div>


            <div className="w-full h-full flex overflow-x-hidden snap-x snap-mandatory">
            </div>

        </div>
    );
}
