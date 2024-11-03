import { useState } from "react";

import NegotiationDrawer from "./drawer";
import Nav from "./nav"

import { Button } from "@/components/ui/button";
import { CircleArrowRight } from "lucide-react";

export default function Dashboard() {
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);
    const isFirstNegotiation = true;

    return (
        <div className="w-full h-full">
            <Nav />

            {isFirstNegotiation && (
                <div className="w-full h-full max-elm-h flex items-center justify-center">
                    <Button
                        className="rounded-full flex items-center gap-3"
                        onClick={() => setIsDrawerOpen(true)}
                    >
                        New negotiation
                        <CircleArrowRight />
                    </Button>
                </div>
            )}

            {!isFirstNegotiation && (
                <div className="w-full h-full max-elm-h bg-red-500">
                    {/* TODO */}
                </div>
            )}

            <NegotiationDrawer isOpen={isDrawerOpen} setIsOpen={setIsDrawerOpen} />
        </div>
    );
}
