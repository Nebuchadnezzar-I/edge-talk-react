import { Button } from '../ui/button';

interface OutlineButtonProps {
    onClick: (a: any) => void;
    sClass?: string;
    text: string;
}

export default function OutlineButton({
    onClick,
    text,
    sClass,
}: OutlineButtonProps) {
    return (
        <Button className={sClass} variant="outline" onClick={onClick}>
            {text}
        </Button>
    );
}
