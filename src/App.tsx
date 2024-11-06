import { ModeToggle } from "./components/project/mode-toggle";

export default function App() {
    return (
        <div className="layout p-3 w-full h-full flex flex-col gap-3">
            <div className="flex items-center justify-between">
                <h3 className="text-xl font-bold">EdgeTalk.ai</h3>
                <ModeToggle />
            </div>

            <div className="w-full h-full bg-zinc-100">
                1233
            </div>
        </div>
    )
}
