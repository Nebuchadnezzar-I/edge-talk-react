import { FormQuestions, firstForm } from "./temp";

export const GetNextStep = (stepIdx: number): JSX.Element => {
    const renderData = firstForm[stepIdx];

    if (!renderData) {
        return renderLastStep();
    }

    switch (renderData.elt) {
        default:
            return <RenderTemplate data={renderData} idx={stepIdx} />;
    }
}

interface templProps {
    data: FormQuestions
    idx: number
}

export const RenderTemplate = ({ data, idx }: templProps) => {
    return (
        <div className="flex flex-col w-full mb-3 mt-3">
            <p><strong>{idx + 1}.</strong> {data.qes}</p>
            <p className="opacity-80 text-sm">{data.note && data.note}</p>
            <div className="mt-3">
                {data.refopts?.map((opt) => (
                    <p>-- {opt}</p>
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
