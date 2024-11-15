import { useState } from "react";
import Header from "./components/layout/header";
import { Button } from "./components/ui/button";
import NewNegotiation from "./components/modal/new-n";

export default function App() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const toggleModal = () => setIsModalOpen(!isModalOpen);

    return (
        <div className="p-3 h-full w-full">
            <Header />

            <div className="body-content w-full h-full flex items-center justify-center">
                <Button className="rounded-full px-6" onClick={toggleModal}>
                    New Negotiation
                </Button>
            </div>

            <NewNegotiation modalState={isModalOpen} toggleModal={toggleModal} />
        </div>
    )
}
