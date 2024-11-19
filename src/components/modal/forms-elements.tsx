import { Textarea } from '../ui/textarea';

interface FormElementProps {
    setVal: (name: string, value: string) => void;
}

export function FormElementZero({ setVal }: FormElementProps) {
    return (
        <div className="min-w-full snap-start flex flex-col gap-3">
            <p>
                <strong>1. </strong>What is the purpose of this negotiation, and
                what has prompted it?
            </p>
            <div className="p-1">
                <Textarea
                    onChange={(e) => setVal('elmZero', e.target.value)}
                    placeholder="Understanding the primary trigger helps align expectations and define goals."
                />
            </div>
        </div>
    );
}

export function FormElementOne({ setVal }: FormElementProps) {
    return (
        <div className="min-w-full snap-start flex flex-col gap-3">
            <p>
                <strong>2. </strong>What are the key objectives you aim to
                achieve in this negotiation?
            </p>
            <div className="p-1">
                <Textarea
                    onChange={(e) => setVal('elmOne', e.target.value)}
                    placeholder="Define clear outcomes to measure success and guide strategies effectively."
                />
            </div>
        </div>
    );
}

export function FormElementTwo({ setVal }: FormElementProps) {
    return (
        <div className="min-w-full snap-start flex flex-col gap-3">
            <p>
                <strong>3. </strong>What unique value or benefit does your
                product/service bring to the table?
            </p>
            <div className="p-1">
                <Textarea
                    onChange={(e) => setVal('elmTwo', e.target.value)}
                    placeholder="This question aids in identifying competitive advantages."
                />
            </div>
        </div>
    );
}

export function FormElementThree({ setVal }: FormElementProps) {
    return (
        <div className="min-w-full snap-start flex flex-col gap-3">
            <p>
                <strong>4. </strong>How do you intend to communicate the
                specific benefits of your offering to differentiate it from
                competitors?
            </p>
            <div className="p-1">
                <Textarea
                    onChange={(e) => setVal('elmThree', e.target.value)}
                    placeholder="Knowing how to highlight uniqueness can strengthen the negotiation position."
                />
            </div>
        </div>
    );
}

export function FormElementFour({ setVal }: FormElementProps) {
    return (
        <div className="min-w-full snap-start flex flex-col gap-3">
            <p>
                <strong>5. </strong>What are the main needs or pain points of
                the counterpart, and how do your solutions address these?
            </p>
            <div className="p-1">
                <Textarea
                    onChange={(e) => setVal('elmFour', e.target.value)}
                    placeholder="Tailoring the offering to solve real problems boosts relevance."
                />
            </div>
        </div>
    );
}

export function FormElementFive({ setVal }: FormElementProps) {
    return (
        <div className="min-w-full snap-start flex flex-col gap-3">
            <p>
                <strong>6. </strong>What concessions are you willing to make,
                and what are the limits of those concessions?
            </p>
            <div className="p-1">
                <Textarea
                    onChange={(e) => setVal('elmFive', e.target.value)}
                    placeholder="Being clear on where flexibility exists helps in making calculated trade-offs."
                />
            </div>
        </div>
    );
}

export function FormElementSix({ setVal }: FormElementProps) {
    return (
        <div className="min-w-full snap-start flex flex-col gap-3">
            <p>
                <strong>7. </strong>What is your Best Alternative to a
                Negotiated Agreement (BATNA)?
            </p>
            <div className="p-1">
                <Textarea
                    onChange={(e) => setVal('elmSix', e.target.value)}
                    placeholder="Knowing your fallback options establishes negotiation power."
                />
            </div>
        </div>
    );
}

export function FormElementSeven({ setVal }: FormElementProps) {
    return (
        <div className="min-w-full snap-start flex flex-col gap-3">
            <p>
                <strong>8. </strong>How does your product/service align with the
                customer’s strategic needs or goals?
            </p>
            <div className="p-1">
                <Textarea
                    onChange={(e) => setVal('elmSeven', e.target.value)}
                    placeholder="This question connects your offering directly to the client’s long-term plans."
                />
            </div>
        </div>
    );
}

export function FormElementEight({ setVal }: FormElementProps) {
    return (
        <div className="min-w-full snap-start flex flex-col gap-3">
            <p>
                <strong>9. </strong>Are there any critical deadlines or time
                constraints we need to be aware of?
            </p>
            <div className="p-1">
                <Textarea
                    onChange={(e) => setVal('elmEight', e.target.value)}
                    placeholder="Timing can be a key factor in negotiation tactics."
                />
            </div>
        </div>
    );
}

export function FormElementNine({ setVal }: FormElementProps) {
    return (
        <div className="min-w-full snap-start flex flex-col gap-3">
            <p>
                <strong>10. </strong>What is the anticipated financial impact of
                a successful or unsuccessful negotiation?
            </p>
            <div className="p-1">
                <Textarea
                    onChange={(e) => setVal('elmNine', e.target.value)}
                    placeholder="This helps prioritize negotiation elements based on financial outcomes."
                />
            </div>
        </div>
    );
}

export function FormElementTen({ setVal }: FormElementProps) {
    return (
        <div className="min-w-full snap-start flex flex-col gap-3">
            <p>
                <strong>11. </strong>Do we understand the competition well, and
                what is their likely approach or offering?
            </p>
            <div className="p-1">
                <Textarea
                    onChange={(e) => setVal('elmTen', e.target.value)}
                    placeholder="Competitor analysis ensures that strategies are well-prepared."
                />
            </div>
        </div>
    );
}

export function FormElementEleven({ setVal }: FormElementProps) {
    return (
        <div className="min-w-full snap-start flex flex-col gap-3">
            <p>
                <strong>12. </strong>What are the non-monetary factors that are
                important to us or the counterpart (e.g., exclusivity,
                innovation, quality)?
            </p>
            <div className="p-1">
                <Textarea
                    onChange={(e) => setVal('elmEleven', e.target.value)}
                    placeholder="Recognizing value beyond price can open up negotiation avenues."
                />
            </div>
        </div>
    );
}

export function FormElementTwelve({ setVal }: FormElementProps) {
    return (
        <div className="min-w-full snap-start flex flex-col gap-3">
            <p>
                <strong>13. </strong>How prepared are you for potential
                objections, and what arguments or responses do you have ready?
            </p>
            <div className="p-1">
                <Textarea
                    onChange={(e) => setVal('elmTwelve', e.target.value)}
                    placeholder="Preparation for objections ensures smoother discussions."
                />
            </div>
        </div>
    );
}

export function FormElementThirteen({ setVal }: FormElementProps) {
    return (
        <div className="min-w-full snap-start flex flex-col gap-3">
            <p>
                <strong>14. </strong>How will you manage and respond to
                unexpected negotiation developments or barriers?
            </p>
            <div className="p-1">
                <Textarea
                    onChange={(e) => setVal('elmThirteen', e.target.value)}
                    placeholder="Scenario planning prevents surprises from derailing the process."
                />
            </div>
        </div>
    );
}

export function FormElementFourteen({ setVal }: FormElementProps) {
    return (
        <div className="min-w-full snap-start flex flex-col gap-3">
            <p>
                <strong>15. </strong>What measures will you use to evaluate the
                success of the negotiation, both short-term and long-term?
            </p>
            <div className="p-1">
                <Textarea
                    onChange={(e) => setVal('elmFourteen', e.target.value)}
                    placeholder="Defining success criteria clarifies post-negotiation expectations."
                />
            </div>
        </div>
    );
}
