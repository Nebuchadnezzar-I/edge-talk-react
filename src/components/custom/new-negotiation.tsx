import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../../components/ui/dialog";
import React from "react";
import { Button } from "../ui/button";
import { Plus } from "lucide-react";

export default function NewNegotiation() {
    return (
        <Dialog>
            <DialogTrigger>
                <Button variant='ghost'>
                    <Plus />
                </Button>
            </DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Add new negotiation</DialogTitle>
                </DialogHeader>
                <DialogFooter>
                    <Button type="submit">Create</Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
}

