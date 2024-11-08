export type FormQuestions = {
    qes: string,
    elt: "multi-choice" | "textarea" | "binary-choice" | "yes/no",
    plh?: string,
    opt?: { lab: string, plh: string, elm: "textarea" }[]
    res?: { [key: string]: { prompt: string, formElement: string } }
}

export const formRemakeV1: FormQuestions[] = [
    {
        qes: "What is prompting this negotiation?",
        elt: "multi-choice",
        opt: [
            {
                lab: "New Opportunity",
                plh: "Please elaborate on the objectives and goals for starting this new relationship.",
                elm: "textarea"
            },
            {
                lab: "Ongoing Partnership",
                plh: "Describe how you aim to sustain and improve existing agreements.",
                elm: "textarea"
            },
            {
                lab: "Competitive Bid / Vendor Selection",
                plh: "Highlight your unique selling points and how you differentiate from competitors.",
                elm: "textarea"
            },
            {
                lab: "Other",
                plh: "Please describe the context in detail.",
                elm: "textarea"
            }
        ]
    },
    {
        qes: "Why is this particular opportunity or partner a good fit for negotiation?",
        plh: "Explain the alignment or strategic fit with the partner and how it benefits both parties.",
        elt: "textarea"
    },
    {
        qes: "Is this a formal negotiation or an exploratory discussion?",
        elt: "binary-choice",
        opt: [
            {
                lab: "Formal Negotiation",
                plh: "Outline the key issues to be negotiated and any formal procedures that need to be followed.",
                elm: "textarea"
            },
            {
                lab: "Exploratory Discussion",
                plh: "Describe the main topics you wish to explore and any preliminary goals you have.",
                elm: "textarea"
            }
        ]
    },
    {
        qes: "Are there any competitors involved in this negotiation?",
        elt: "yes/no",
        opt: [
            {
                lab: "Yes",
                plh: "Identify the competitors and discuss how their involvement influences your positioning and strategy.",
                elm: "textarea"
            },
            {
                lab: "No",
                plh: "Even without direct competitors, are there alternative solutions or substitutes the counterpart might consider? Please elaborate.",
                elm: "textarea"
            }
        ]
    }
];
