interface NewSessionModalProps {
    isOpen: boolean;
    setIsOpen: (value: boolean) => void;
}

export default function NewSessionModal({ isOpen }: NewSessionModalProps) {
    return (
        <div
            className={`
                fixed bottom-0 left-0 w-full bg-background flex flex-col
                gap-3 px-3 ${isOpen ? 'h-full py-3 pb-6' : 'h-0'} transition-all
            `}
        ></div>
    );
}
