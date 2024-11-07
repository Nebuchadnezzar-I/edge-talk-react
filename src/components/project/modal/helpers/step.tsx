import { form1 } from "@/form-1";

export const getNextStep = (stepIdx: number): JSX.Element => {

    return (
        <div className="min-w-full overflow-hidden" key={Math.random()}>
            <p>
                {JSON.stringify(form1.sections[stepIdx] || "No more steps")}
            </p>
        </div>
    );
}
