import { form1 } from "@/form-1";

export const getNextStep = (stepIdx: number): JSX.Element => {

    return (
        <div className="min-w-full overflow-hidden" key={Math.random()}>
            <p className="font-bold mt-5">{form1.sections[stepIdx].sectionTitle}</p>
        </div>
    );
}
