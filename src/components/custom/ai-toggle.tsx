import React from "react"
import { useTheme } from "./theme-provider"

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../../components/ui/dropdown-menu"
import { Button } from "../ui/button"

export function AIToggle() {
    const [ai, setAi] = React.useState('GPT 3.5');

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant="ghost">
                    {ai}
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
                <DropdownMenuItem onClick={() => setAi('GPT 3.5')}>
                    GPT 3.5
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setAi('GPT 4')}>
                    GPT 4
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setAi('GPT 4.5')}>
                    GPT 4.5
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}
