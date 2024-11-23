import { Plus } from 'lucide-react';
import HeaderDropdown from '../dropdown/header-dropdown';
import { Button } from '../ui/button';

interface HeaderProps {
    showAddButton: boolean;
    openModal: () => void;
}

export default function Header({ showAddButton, openModal }: HeaderProps) {
    return (
        <div className="w-full flex items-center justify-between">
            <h3 className="text-xl font-bold">EdgeTalk</h3>

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
