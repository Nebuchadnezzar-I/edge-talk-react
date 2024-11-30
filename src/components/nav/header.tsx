import { ChevronLeft, Plus } from 'lucide-react';
import HeaderDropdown from '../dropdown/header-dropdown';
import { Button } from '../ui/button';
import { swipeContainerPrev } from '@/helpers/swipe';

interface HeaderProps {
    showAddButton: boolean;
    showBackButton: boolean;
    refContainer: React.RefObject<HTMLDivElement>;
    openModal: () => void;
    moveBackCallBack: () => void;
}

export default function Header({
    showAddButton,
    openModal,
    showBackButton,
    refContainer,
    moveBackCallBack,
}: HeaderProps) {
    return (
        <div className="w-full flex items-center justify-between">
            <div className="flex gap-3 items-center">
                {showBackButton && (
                    <Button
                        variant="ghost"
                        onClick={() => {
                            swipeContainerPrev(refContainer);
                            moveBackCallBack();
                        }}
                        className="h-10 w-10 p-0"
                    >
                        <ChevronLeft />
                    </Button>
                )}
                <h3 className="text-xl font-bold">EdgeTalk</h3>
            </div>

            <div className="flex gap-3">
                {showAddButton && (
                    <Button
                        variant="ghost"
                        className="rounded-full aspect-square"
                        onClick={openModal}
                    >
                        <Plus />
                    </Button>
                )}
                <HeaderDropdown />
            </div>
        </div>
    );
}
