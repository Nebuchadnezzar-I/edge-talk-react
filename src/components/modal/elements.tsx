import { Button } from "../ui/button";
import { Textarea } from "../ui/textarea";

export function Q0() {
    return (
        <div className="min-w-full snap-start flex flex-col items-center justify-center">
            <h3 className="text-xl font-semibold">Context and Objectives</h3>
        </div>
    );
}

export function Q1() {
    return (
        <>
            <div className="min-w-full snap-start flex flex-col">
                <p className="text-md"><strong>1.</strong> What is prompting this negotiation?</p>
                <div className="h-full flex flex-col gap-3 justify-center">
                    <Button variant="outline">New Opportunity</Button>
                    <Button variant="outline">Ongoing Partnership</Button>
                    <Button variant="outline">Competitive Bid / Vendor Selection</Button>
                    <Button variant="outline">Other</Button>
                </div>
            </div>

            <div className="min-w-full snap-start hidden">
                <p className="text-md"><strong>1.</strong> Please explain how you plan to achieve this objective.</p>
                <div className="p-1">
                    <Textarea />
                </div>
            </div>
        </>
    );
}

export function Q2() {
    return (
        <div className="min-w-full snap-start carouse-elm">
            <p className="text-md"><strong>2.</strong> What specific aspects or topics make this opportunity or partnership worth discussing in negotiation?</p>
            <div className="p-1">
                <Textarea />
            </div>
        </div>
    );
}
