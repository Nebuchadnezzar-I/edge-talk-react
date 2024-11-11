import { FormQuestions, firstForm } from "./temp";

export type NextStepData = {
    ui: JSX.Element | null;
    hasOwnCtroller: boolean;
}

export const GetNextStep = (stepIdx: number): NextStepData => {
    const questionData = firstForm[stepIdx];
    const returnObject: NextStepData = {
        ui: null,
        hasOwnCtroller: false,
    };

    if (!questionData) {
        returnObject.ui = renderLastStep();
        return returnObject;
    }

    switch (questionData.elt) {
        case "section":
            returnObject.ui = <RenderSection data={questionData} idx={stepIdx} />
            break;

        default:
            returnObject.ui =  <RenderDef data={questionData} idx={stepIdx} />;
            break;
    }

    return returnObject;
}

interface SectionProps {
    data: FormQuestions
    idx: number
}

export const RenderSection = ({ data }: SectionProps) => {
    return (
        <div className="min-w-full flex flex-col w-full h-full items-center justify-center">
            <h3 className="text-lg font-bold">{data.qes}</h3>
        </div>
    );
}

interface DefProps {
    data: FormQuestions
    idx: number
}

export const RenderDef = ({ data, idx }: DefProps) => {
    return (
        <div className="flex flex-col w-full mb-3 mt-3">
            <p><strong>{idx}.</strong> {data.qes}</p>
            <p className="opacity-80 text-sm mt-1">{data.note && data.note}</p>
            <div className="mt-3">
                {data.refopts?.map((opt, idx) => (
                    <p key={idx}>-- {opt}</p>
                ))}
            </div>
        </div>
    );
}

const renderLastStep = () => {
    return (
        <div className="flex flex-col w-full mb-3 mt-3">
            All done!
        </div>
    );
}
