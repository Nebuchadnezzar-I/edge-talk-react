export type FormQuestions = {
    qes: string;
    elt?:
    | "textarea"
    | "yes-no"
    | "multiple-choice"
    | "scale"
    | "repeating-section"
    | "unknown"
    | "matrix"
    | "section";
    note?: string;
    refopts?: string[];
};

export const firstForm: FormQuestions[] = [
    {
        qes: "Context and Objectives",
        elt: "section",
    },
    {
        qes: "What is prompting this negotiation?",
        elt: "unknown",
        refopts: [
            "New Opportunity",
            "Ongoing Partnership",
            "Competitive Bid / Vendor Selection",
            "Other",
        ],
    },
    {
        qes: "What specific aspects or topics make this opportunity or partnership worth discussing in negotiation?",
        elt: "textarea",
    },
    {
        qes: "Is this a formal negotiation or an exploratory discussion?",
        elt: "unknown",
        refopts: ["Formal Negotiation", "Exploratory Discussion"],
    },
    {
        qes: "Are there any competitors involved in this negotiation?",
        elt: "yes-no",
    },
    {
        qes: "What are your positions (specific demands or statements)?",
        elt: "repeating-section",
    },
    {
        qes: "What are your primary objectives in this negotiation?",
        elt: "unknown",
        refopts: [
            "Maximize Value (beyond just price)",
            "Establish Partnership Terms",
            "Reduce Costs",
            "Secure Short-Term Wins",
            "Define expectations",
        ],
    },
    {
        qes: "Do you have a history of past interactions with the counterpart?",
        elt: "textarea",
    },
    {
        qes: "Are there any time constraints or deadlines affecting this negotiation?",
        elt: "yes-no",
    },
    {
        qes: "Are there any legal or compliance considerations relevant to this negotiation?",
        elt: "yes-no",
    },
    {
        qes: "Is price a critical factor in this negotiation?",
        elt: "yes-no",
    },
    {
        qes: "If price is not a primary focus, what factors hold the most importance?",
        elt: "unknown",
        refopts: [
            "Quality",
            "Delivery Speed",
            "Partnership Stability",
            "Innovation",
            "Process Efficiency",
            "Other",
        ],
    },
    {
        qes: "How would you assess your negotiation power relative to the counterpart?",
        elt: "unknown",
        refopts: [
            "We have significantly more leverage",
            "We have slightly more leverage",
            "Leverage is balanced",
            "They have slightly more leverage",
            "They have significantly more leverage",
        ],
    },
    {
        qes: "Strengths and Weaknesses",
        elt: "section",
    },
    {
        qes: "Where does your product/service fit in the Commodity Matrix?",
        elt: "matrix",
    },
    {
        qes: "Are there any specific attributes of your offering that strengthen your position in this quadrant?",
        elt: "textarea",
    },
    {
        qes: "What unique strengths or advantages do you bring to this negotiation?",
        elt: "textarea",
    },
    {
        qes: "Are there any specific attributes of your offering that could potentially weaken your position in this quadrant?",
        elt: "textarea",
    },
    {
        qes: "What are the primary risks you anticipate in this negotiation?",
        elt: "unknown",
        refopts: [
            "Price Pressure",
            "Contractual or Delivery Risks",
            "Competitive Positioning Risks",
            "Relationship Deterioration",
            "Other",
        ],
    },
    {
        qes: "What concessions are you willing to make during the negotiation?",
        elt: "repeating-section",
    },
    {
        qes: "What does a successful outcome look like for you?",
        elt: "textarea",
    },
    {
        qes: "How will you measure the success of this negotiation?",
        elt: "unknown",
        refopts: ["Quantitative Measures", "Qualitative Measures"],
    },
    {
        qes: "Stakeholders and Relationships",
        elt: "section",
    },
    {
        qes: "Who are the primary parties involved in this negotiation?",
        elt: "multiple-choice",
    },
    {
        qes: "Can you identify other stakeholders who might influence or be affected by the negotiation outcome?",
        elt: "yes-no",
    },
    {
        qes: "What is your role and position relative to the counterpart?",
        elt: "multiple-choice",
    },
    {
        qes: "Is there a formal or informal hierarchy affecting this negotiation?",
        elt: "yes-no",
    },
    {
        qes: "What are your preferred communication methods and channels?",
        elt: "unknown",
        refopts: [
            "In-Person Meetings",
            "Video Calls",
            "Emails",
            "Phone Calls",
            "Messaging Apps",
            "Other",
        ],
    },
    {
        qes: "Are there any cultural or language considerations to be aware of?",
        note: "Be mindful of the countries and nationalities of the parties involved.",
        elt: "textarea",
    },
    {
        qes: "Are there any emotional or cultural factors that might impact the negotiation?",
        elt: "yes-no",
    },
    {
        qes: "Negotiation Strategy and Style",
        elt: "section",
    },
    {
        qes: "Do you plan to build rapport with the counterpart?",
        elt: "textarea",
        // TODO: Ask how they plan to build rapport if they answer yes
    },
    {
        qes: "What techniques will you use to handle objections and foster a collaborative atmosphere?",
        elt: "textarea",
    },
    {
        qes: "What negotiation style do you plan to adopt?",
        elt: "unknown",
        refopts: [
            "Competitive",
            "Collaborative",
            "Compromising",
            "Avoiding",
            "Accommodating",
        ],
    },
    {
        qes: "Can you identify potential barriers to reaching an agreement?",
        elt: "yes-no",
    },
    {
        qes: "Are you making any assumptions about the counterpart or the negotiation context?",
        elt: "yes-no",
    },
    {
        qes: "What expectations do you believe the other party has?",
        elt: "unknown",
        refopts: [
            "Cost Reduction",
            "Extended Services",
            "Process Improvements",
            "Stability in Terms",
            "Non-Monetary Interests",
            "Other",
        ],
    },
    {
        qes: "Are there any competitors influencing the counterpart's expectations or offers?",
        elt: "yes-no",
    },
    {
        qes: "How would you describe the anticipated outcome if all goes as planned?",
        elt: "unknown",
        refopts: [
            "Long-Term Agreement",
            "Short-Term Contract",
            "Framework Agreement",
            "One-Time Transaction",
            "Elimination of Agreement",
            "Other",
        ],
    },
    {
        qes: "Is your priority to achieve a long-term partnership or immediate results?",
        elt: "unknown",
        refopts: [
            "Long-Term Partnership",
            "Immediate Results",
            "Balanced Approach",
        ],
    },
    {
        qes: "What non-monetary interests are important to you in this negotiation?",
        elt: "unknown",
        refopts: [
            "Intellectual Property Rights",
            "Exclusivity Agreements",
            "Future Collaboration Opportunities",
            "Brand Recognition",
            "Corporate Social Responsibility",
            "Other",
        ],
    },
    {
        qes: "How comfortable are you with managing emotions during the negotiation?",
        elt: "scale",
    },
    {
        qes: "Are there potential emotional triggers you should be aware of for yourself or the counterpart?",
        elt: "yes-no",
    },
    {
        qes: "How will you address cultural differences to prevent misunderstandings?",
        elt: "textarea",
    },
    {
        qes: "Interests and Risk Management",
        elt: "section",
    },
    {
        qes: "What are your underlying interests in this negotiation (needs, desires)?",
        elt: "textarea",
    },
    {
        qes: "Are you aware of the counterpart's interests and positions?",
        elt: "yes-no",
    },
    {
        qes: "Are there clear points where you and the counterpart are aligned?",
        elt: "yes-no",
    },
    {
        qes: "What is your BATNA if this negotiation does not result in an agreement?",
        elt: "textarea",
    },
    {
        qes: "What do you believe is the counterpart's BATNA?",
        elt: "textarea",
    },
    {
        qes: "What concessions do you expect or require from the counterpart?",
        elt: "repeating-section",
    },
    {
        qes: "Are there any inconsistencies or points requiring clarification?",
        elt: "textarea",
        note: "Document any inconsistencies identified during the negotiation or preparation."
    },


    // TODO: Recapitulation
];
