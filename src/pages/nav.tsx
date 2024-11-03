import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export default function Nav() {
    return (
        <div className="flex items-center justify-between w-full py-2">
            <h3 className="text-xl font-semibold">EdgeTalk.ai</h3>
            <Avatar>
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>CN</AvatarFallback>
            </Avatar>
        </div>
    );
}
