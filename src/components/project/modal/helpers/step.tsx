import { FormQuestions, formRemakeV1 } from "./temp";
import { Textarea } from "@/components/ui/textarea";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"

export const GetNextStep = (stepIdx: number): JSX.Element => {
    const renderData = formRemakeV1[stepIdx];

    if (!renderData) {
        return renderLastStep();
    }

    switch (renderData.elt) {
        case "multi-choice":
            return <RenderMultiChoice data={renderData} idx={stepIdx} />;

        case "textarea":
            return <RenderTextarea data={renderData} idx={stepIdx} />;

        case "binary-choice":
            return <RenderBinaryChoice data={renderData} idx={stepIdx} />;

        case "yes/no":
            return <RenderYesNo data={renderData} idx={stepIdx} />;

        default:
            return <div>Not implemented</div>;
    }
}

interface RenderMultiChoiceProps {
    data: FormQuestions;
    idx: number;
}

export const RenderMultiChoice = ({ data, idx }: RenderMultiChoiceProps) => {
    return (
        <div className="flex flex-col gap-3 w-full mb-3 mt-5">
            <p><strong>{idx + 1}</strong> {data.qes}</p>
            <Accordion type="single" collapsible className="w-full">
                {data.opt?.map((opt, idx) => (
                    <AccordionItem value={idx.toString()}>
                        <AccordionTrigger>{opt.lab}</AccordionTrigger>
                        <AccordionContent className="p-1">
                            <Textarea
                                placeholder={opt.plh}
                                className="w-full h-full"
                            />
                        </AccordionContent>
                    </AccordionItem>
                ))}
            </Accordion>
        </div>
    );
}

interface RenderTextareaProps {
    data: FormQuestions;
    idx: number;
}

export const RenderTextarea = ({ data, idx }: RenderTextareaProps) => {
    return (
        <div className="flex flex-col gap-3 w-full mb-3 mt-5 p-1">
            <p><strong>{idx + 1}</strong> {data.qes}</p>
            <Textarea
                placeholder={data.plh}
                className="w-full h-full"
            />
        </div>
    );
}

interface BinaryChoiceProps {
    data: FormQuestions;
    idx: number;
}

export const RenderBinaryChoice = ({ data, idx }: BinaryChoiceProps) => {
    return (
        <div className="flex flex-col gap-3 w-full mb-3 mt-5">
            <p><strong>{idx + 1}</strong> {data.qes}</p>
            <Accordion type="single" collapsible className="w-full">
                {data.opt?.map((opt, idx) => (
                    <AccordionItem value={idx.toString()}>
                        <AccordionTrigger>{opt.lab}</AccordionTrigger>
                        <AccordionContent className="p-1">
                            <Textarea
                                placeholder={opt.plh}
                                className="w-full h-full"
                            />
                        </AccordionContent>
                    </AccordionItem>
                ))}
            </Accordion>
        </div>
    );
}

interface YesNoProps {
    data: FormQuestions;
    idx: number;
}

export const RenderYesNo = ({ data, idx }: YesNoProps) => {
    return (
        <div className="flex flex-col gap-3 w-full mb-3 mt-5">
            <p><strong>{idx + 1}</strong> {data.qes}</p>
            <Accordion type="single" collapsible className="w-full">
                {data.opt?.map((opt, idx) => (
                    <AccordionItem value={idx.toString()}>
                        <AccordionTrigger>{opt.lab}</AccordionTrigger>
                        <AccordionContent className="p-1">
                            <Textarea
                                placeholder={opt.plh}
                                className="w-full h-full"
                            />
                        </AccordionContent>
                    </AccordionItem>
                ))}
            </Accordion>
        </div>
    );
}

const renderLastStep = () => {
    return (
        <div>
            All done!
        </div>
    );
}
