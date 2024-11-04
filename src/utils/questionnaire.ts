export type Questionnaire = {
    i: 't' | 'i'; // i = input, t = textarea
    q: string;
    a: string;
    p: string;
}[]

export const questionnaire: Questionnaire = [
    { i: "i", q: "What is the name of this negotiation?", a: "", p: "Car negotiation" },
    { i: "t", q: "What is the date and location of this negotiation?", a: "", p: "The meeting is scheduled for November 15, 2024, in Prague, Czech Republic." },
    { i: "t", q: "Who are the participants, and what are their roles?", a: "", p: "The key participants include our sales director, the client’s procurement officer, and their technical lead." },
    { i: "t", q: "Are there any specific countries or cultural considerations involved?", a: "", p: "Yes, our client is based in Germany, and they value punctuality and thorough documentation." },
    { i: "t", q: "Which stage of the negotiation process is this (e.g., initial, follow-up, final)?", a: "", p: "This is the initial meeting to discuss potential collaboration and assess fit." },
    { i: "t", q: "What is your main objective or priority in this negotiation?", a: "", p: "Our main priority is securing a long-term supply contract with favorable pricing terms." },
    { i: "t", q: "What is the user’s negotiation skill level, and are they familiar with any specific negotiation techniques?", a: "", p: "I’m relatively new to negotiation and have basic knowledge of techniques like active listening and open-ended questioning." },
    { i: "t", q: "What is the expected outcome or ideal result from this negotiation?", a: "", p: "Ideally, we’d reach an agreement that guarantees a minimum volume commitment for the next two years." },
    { i: "t", q: "What alternatives or backup options are available if this negotiation doesn’t yield the desired result?", a: "", p: "If we can’t reach an agreement on volume, we’ll consider offering limited availability at a higher price point." },
    { i: "t", q: "Are there specific points that you need to discuss (e.g., pricing, delivery terms, exclusivity)?", a: "", p: "Yes, we need to agree on bulk pricing, delivery schedule, and an exclusivity clause." },
    { i: "t", q: "Are there any risks or potential challenges anticipated in this negotiation?", a: "", p: "One risk is that the client may negotiate aggressively on pricing, which could reduce our margin." },
    { i: "t", q: "What’s the acquisition or engagement strategy for this client?", a: "", p: "We’re aiming to secure a long-term partnership with this client, ideally through exclusive supply agreements." },
    { i: "t", q: "What medium will you be using for the negotiation (in-person, virtual, via an intermediary)?", a: "", p: "The negotiation will be held in person, with follow-ups via email." },
    { i: "t", q: "Will you be negotiating alone or with a team? If with a team, who will handle which roles?", a: "", p: "I’ll be negotiating with two colleagues: one who will handle technical questions and another to manage legal and contract terms." },
];
