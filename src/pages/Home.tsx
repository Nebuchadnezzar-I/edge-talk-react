import NewNegotiation from "@/components/project/modal/n-n";
import UserDropdown from "@/components/project/user-dropdown";
import { Button } from "@/components/ui/button";
import { startUpConfig } from "@/config";
import { useState } from "react";

export default function Home() {
    const [isNModalOpen, setIsNModalOpen] = useState(false);

    return (
        <div className="layout p-3 w-full h-full flex flex-col gap-3">
            <div className="flex items-center justify-between">
                <h3 className="text-xl font-bold">EdgeTalk.ai</h3>
                <UserDropdown />
                {/* <ModeToggle /> */}
            </div>

            {/* TODO: Fetch data or display button */}
            <div className={
                startUpConfig.isFirstNegotiation?
                    "w-full h-full flex flex-col items-center justify-center"
                    :
                    "w-full h-full"
            }>
                {startUpConfig.isFirstNegotiation && (
                    <Button
                        className="rounded-full px-10"
                        onClick={() => setIsNModalOpen(true)}
                    >
                        Start negotiating
                    </Button>
                )}
            </div>

            <NewNegotiation isOpen={isNModalOpen} setIsOpen={() => setIsNModalOpen(false)} />
        </div>
    )
}
