import { Avatar, AvatarFallback, AvatarImage, } from "@/components/ui/avatar";
import {
    DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel,
    DropdownMenuSeparator, DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useTheme } from "../theme-provider";

export default function Header() {
    const { setTheme } = useTheme();

    return (
        <div className="flex items-center justify-between">
            <h3 className="text-lg font-semibold">EdgeTalk</h3>

            <DropdownMenu>
                <DropdownMenuTrigger>
                    <Avatar className="w-9 h-9">
                        <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                        <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56 mr-3 mt-2">
                    <DropdownMenuLabel>Account</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem onClick={() => setTheme("light")}>
                        Light theme
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={() => setTheme("dark")}>
                        Dark theme
                    </DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>
        </div>
    );
}
