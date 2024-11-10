export type FormQuestions = {
    qes: string,
    elt: "multi-choice" | "textarea" | "binary-choice" | "yes/no" | "ref",
    refopts?: string[],
    plh?: string,
    opt?: { lab: string, plh: string, elm: "textarea"}[]
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
    },

    // Reference

    {
        qes: "What are your primary objectives in this negotiation?",
        elt: "ref",
        refopts: [ "Maximize Value (beyond just price)", "Establish Partnership Terms", "Reduce Costs", "Secure Short-Term Wins" ]
    },
    {
        qes: "Do you have a history of past interactions with the counterpart?",
        elt: "ref",
        refopts: [ "Textarea" ]
    },
    {
        qes: "Are there any time constraints or deadlines affecting this negotiation?",
        elt: "ref",
        refopts: [ "Yes / No" ]
    },
    {
        qes: "Are there any legal or compliance considerations relevant to this negotiation?",
        elt: "ref",
        refopts: [ "Yes / No" ]
    },
    {
        qes: "Is price a critical factor in this negotiation?",
        elt: "ref",
        refopts: [ "Yes / No" ]
    },
    {
        qes: "If price is not a primary focus, what factors hold the most importance?",
        elt: "ref",
        refopts: [ "Quality", "Delivery Speed", "Partnership Stability", "Innovation", "Process Efficiency", "Other" ],
    },
    {
        qes: "Where does your product/service fit in the Commodity Matrix?",
        elt: "ref",
        refopts: [ "multiple-choice selection" ],
    },
    {
        qes: "Are there any specific attributes of your offering that strengthen your position in this quadrant?",
        elt: "ref",
        refopts: [ "Textarea" ],
    },
    {
        qes: "Who are the primary parties involved in this negotiation?",
        elt: "ref",
        refopts: [ "Multiple-choice Selection" ],
    },
    {
        qes: "Can you identify other stakeholders who might influence or be affected by the negotiation outcome?",
        elt: "ref",
        refopts: [ "Yes/No" ],
    },
    {
        qes: "What is your role and position relative to the counterpart?",
        elt: "ref",
        refopts: [ "Multiple-choice Selection" ],
    },
    {
        qes: "Is there a formal or informal hierarchy affecting this negotiation?",
        elt: "ref",
        refopts: [ "Yes/No Selection" ],
    },
    {
        qes: "What are your preferred communication methods and channels?",
        elt: "ref",
        refopts: [ "In-Person Meetings", "Video Calls", "Emails", "Phone Calls", "Messaging Apps", "Other" ],
    },
    {
        qes: "Are there any cultural or language considerations to be aware of?",
        elt: "ref",
        refopts: [ "Textarea" ],
    },
    {
        qes: "Are there any emotional or cultural factors that might impact the negotiation?",
        elt: "ref",
        refopts: [ "Yes/No Selection" ],
    },
    {
        qes: "How do you plan to build rapport with the counterpart?",
        elt: "ref",
        refopts: [ "Textarea" ],
    },
    {
        qes: "What techniques will you use to handle objections and foster a collaborative atmosphere?",
        elt: "ref",
        refopts: [ "Textarea" ],
    },
    {
        qes: "What negotiation style do you plan to adopt?",
        elt: "ref",
        refopts: [ "Competitive", "Collaborative", "Compromising", "Avoiding", "Accommodating" ],
    },
    {
        qes: "How would you assess your negotiation power relative to the counterpart?",
        elt: "ref",
        refopts: [ "We have significantly more leverage", "We have slightly more leverage", "Leverage is balanced", "They have slightly more leverage", "They have significantly more leverage" ],
    },
    {
        qes: "What are the primary risks you anticipate in this negotiation?",
        elt: "ref",
        refopts: [ "Price Pressure", "Contractual or Delivery Risks", "Competitive Positioning Risks", "Relationship Deterioration", "Other" ],
    },
    {
        qes: "Can you identify potential barriers to reaching an agreement?",
        elt: "ref",
        refopts: [ "Yes/No Selection" ],
    },
    {
        qes: "Are you making any assumptions about the counterpart or the negotiation context?",
        elt: "ref",
        refopts: [ "Yes/No Selection" ],
    },
    {
        qes: "What expectations do you believe the other party has?",
        elt: "ref",
        refopts: [ "Cost Reduction", "Extended Services", "Process Improvements", "Stability in Terms", "Non-Monetary Interests", "Other" ],
    },
    {
        qes: "Are there any competitors influencing the counterpart's expectations or offers?",
        elt: "ref",
        refopts: [ "Yes/No Selection" ],
    },
    {
        qes: "How would you describe the anticipated outcome if all goes as planned?",
        elt: "ref",
        refopts: [ "Long-Term Agreement", "Short-Term Contract", "Framework Agreement", "Other" ],
    },
    {
        qes: "Is your priority to achieve a long-term partnership or immediate results?",
        elt: "ref",
        refopts: [ "Long-Term Partnership", "Immediate Results", "Balanced Approach" ],
    },
    {
        qes: "What non-monetary interests are important to you in this negotiation?",
        elt: "ref",
        refopts: [ "Intellectual Property Rights", "Exclusivity Agreements", "Future Collaboration Opportunities", "Brand Recognition", "Corporate Social Responsibility", "Other" ],
    },
    {
        qes: "How comfortable are you with managing emotions during the negotiation?",
        elt: "ref",
        refopts: [ "Scale Selection" ],
    },
    {
        qes: "Are there potential emotional triggers you should be aware of for yourself or the counterpart?",
        elt: "ref",
        refopts: [ "Yes/No Selection" ],
    },
    {
        qes: "How will you address cultural differences to prevent misunderstandings?",
        elt: "ref",
        refopts: [ "Textarea" ],
    },
    {
        qes: "What are your underlying interests in this negotiation (needs, desires)?",
        elt: "ref",
        refopts: [ "Textarea" ],
    },
    {
        qes: "What are your positions (specific demands or statements)?",
        elt: "ref",
        refopts: [ "Repeating Section" ],
    },
    {
        qes: "Are you aware of the counterpart's interests and positions?",
        elt: "ref",
        refopts: [ "Yes/No Selection" ],
    },
    {
        qes: "Are there clear points where you and the counterpart are aligned?",
        elt: "ref",
        refopts: [ "Yes/No Selection" ],
    },
    {
        qes: "What is your BATNA if this negotiation does not result in an agreement?",
        elt: "ref",
        refopts: [ "Textarea" ],
    },
    {
        qes: "What do you believe is the counterpart's BATNA?",
        elt: "ref",
        refopts: [ "Textarea" ],
    },
    {
        qes: "What concessions are you willing to make during the negotiation?",
        elt: "ref",
        refopts: [ "Repeating Section" ],
    },
    {
        qes: "What concessions do you expect or require from the counterpart?",
        elt: "ref",
        refopts: [ "Repeating Section" ],
    },
    {
        qes: "What does a successful outcome look like for you?",
        elt: "ref",
        refopts: [ "Textarea" ],
    },
    {
        qes: "How will you measure the success of this negotiation?",
        elt: "ref",
        refopts: [ "Quantitative Measures", "Qualitative Measures" ],
    },
    {
        qes: "What unique strengths or advantages do you bring to this negotiation?",
        elt: "ref",
        refopts: [ "Textarea" ],
    },
    {
        qes: "Based on the information gathered, would you like a summary of key areas to focus on next?",
        elt: "ref",
        refopts: [ "Yes/No Selection" ],
    },
];
