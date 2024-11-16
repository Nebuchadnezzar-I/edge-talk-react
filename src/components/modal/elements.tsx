import { Button } from "../ui/button";
import { Textarea } from "../ui/textarea";

interface QProps {
    toggleNav: () => void;
    SwipeParentNext: () => void;
}

export function Q0() {
    return (
        <div className="min-w-full snap-start flex flex-col items-center justify-center">
            <h3 className="text-xl font-semibold">Context and Objectives</h3>
        </div>
    );
}

export function Q1({ SwipeParentNext }: QProps) {
    return (
        <>
            <div className="min-w-full snap-start flex flex-col">
                <p className="text-md"><strong>1.</strong> What is prompting this negotiation?</p>
                <div className="h-full flex flex-col gap-3 justify-center">
                    <Button onClick={SwipeParentNext} variant="outline">New Opportunity</Button>
                    <Button onClick={SwipeParentNext} variant="outline">Ongoing Partnership</Button>
                    <Button onClick={SwipeParentNext} variant="outline">Competitive Bid / Vendor Selection</Button>
                    <Button onClick={SwipeParentNext} variant="outline">Other</Button>
                </div>
            </div>

            <div className="min-w-full snap-start hidden">
                <p className="text-md"><strong>1.</strong> Please explain how you plan to achieve this objective.</p>
                <div className="p-1">
                    <Textarea />
                </div>
            </div>
        </>
    );
}

export function Q2() {
    return (
        <div className="min-w-full snap-start flex flex-col">
            <p className="text-md"><strong>2.</strong> What specific aspects or topics make this opportunity or partnership worth discussing in negotiation?</p>
            <div className="p-1">
                <Textarea />
            </div>
        </div>
    );
}

export function Q3() {
    return (
        <div className="min-w-full snap-start flex flex-col">
            <p className="text-md"><strong>3.</strong> Is this a formal negotiation or an exploratory discussion?</p>
            <div className="w-full h-full flex flex-col gap-3 justify-center">
                <Button variant="outline">Formal negotiation</Button>
                <Button variant="outline">Exploratory discussion</Button>
            </div>
        </div>
    );
}

export function Q4() {
    return (
        <>
            <div className="min-w-full snap-start flex flex-col">
                <p className="text-md"><strong>4.</strong> Are there any competitors involved in this negotiation?</p>
                <div className="w-full h-full flex flex-col gap-3 justify-center">
                    <Button variant="outline">Yes</Button>
                    <Button variant="outline">No</Button>
                </div>
            </div>
            <div className="min-w-full snap-start hidden">
                <p className="text-md"><strong>4.</strong> Identify the competitors and explain how they might affect the negotiation.</p>
                <div className="p-1">
                    <Textarea />
                </div>
            </div>
        </>
    );
}

export function Q5() {
    return (
        <div className="min-w-full snap-start flex flex-col">
            <p className="text-md"><strong>5.</strong> What are your positions (specific demands or statements)?</p>
            <div className="p-1">
                <Textarea />
            </div>
        </div>
    );
}

export function Q6() {
    return (
        <>
            <div className="min-w-full snap-start flex flex-col">
                <p className="text-md"><strong>6.</strong> What are your primary objectives in this negotiation?</p>
                <div className="w-full h-full flex flex-col gap-3 justify-center">
                    <Button variant="outline">Maximize Value (beyond just price)</Button>
                    <Button variant="outline">Establish Partnership Terms</Button>
                    <Button variant="outline">Reduce Costs</Button>
                    <Button variant="outline">Secure Short-Term Wins</Button>
                    <Button variant="outline">Define expectations</Button>
                </div>
            </div>
            <div className="min-w-full snap-start hidden">
                <p className="text-md"><strong>6.</strong> Please explain how you plan to achieve this objective.</p>
                <div className="p-1">
                    <Textarea />
                </div>
            </div>
        </>
    );
}

export function Q7() {
    return (
        <>
            <div className="min-w-full snap-start flex flex-col">
                <p className="text-md"><strong>7.</strong> Do you have a history of past interactions with the counterpart?s this a formal negotiation or an exploratory discussion?</p>
                <div className="w-full h-full flex flex-col gap-3 justify-center">
                    <Button variant="outline">Yes</Button>
                    <Button variant="outline">No</Button>
                </div>
            </div>
            <div className="min-w-full snap-start hidden">
                <p className="text-md"><strong>7.</strong> Describe previous dealings, outcomes, and how they might influence the current negotiation.</p>
                <div className="p-1">
                    <Textarea />
                </div>
            </div>
        </>
    );
}

export function Q8() {
    return (
        <>
            <div className="min-w-full snap-start flex flex-col">
                <p className="text-md"><strong>8.</strong> Are there any time constraints or deadlines affecting this negotiation?</p>
                <div className="w-full h-full flex flex-col gap-3 justify-center">
                    <Button variant="outline">Yes</Button>
                    <Button variant="outline">No</Button>
                </div>
            </div>
            <div className="min-w-full snap-start hidden">
                <p className="text-md"><strong>8.</strong> Specify the critical timelines or deadlines and explain their impact on the negotiation.</p>
                <div className="p-1">
                    <Textarea />
                </div>
            </div>
        </>
    );
}

export function Q9() {
    return (
        <>
        <div className="min-w-full snap-start flex flex-col">
            <p className="text-md"><strong>9.</strong> Are there any legal or compliance considerations relevant to this negotiation?</p>
            <div className="w-full h-full flex flex-col gap-3 justify-center">
                <Button variant="outline">Yes</Button>
                <Button variant="outline">No</Button>
            </div>
        </div>
            <div className="min-w-full snap-start hidden">
                <p className="text-md"><strong>9.</strong> Outline the legal, regulatory, or compliance issues that must be addressed.</p>
                <div className="p-1">
                    <Textarea />
                </div>
            </div>
        </>
    );
}

export function Q10() {
    return (
        <>
            <div className="min-w-full snap-start flex flex-col">
                <p className="text-md"><strong>10.</strong> Is price a critical factor in this negotiation?</p>
                <div className="w-full h-full flex flex-col gap-3 justify-center">
                    <Button variant="outline">Yes</Button>
                    <Button variant="outline">No</Button>
                </div>
            </div>
            <div className="min-w-full snap-start hidden">
                <p className="text-md"><strong>10.</strong> Detail your pricing flexibility, cost boundaries, and any alternative cost structures you are willing to consider.</p>
                <div className="p-1">
                    <Textarea />
                </div>
            </div>
        </>
    );
}

export function Q11() {
    return (
        <>
            <div className="min-w-full snap-start flex flex-col">
                <p className="text-md"><strong>11.</strong> If price is not a primary focus, what factors hold the most importance?</p>
                <div className="w-full h-full flex flex-col gap-3 justify-center">
                    <Button variant="outline">Quality</Button>
                    <Button variant="outline">Delivery Speed</Button>
                    <Button variant="outline">Delivery Speed</Button>
                    <Button variant="outline">Innovation</Button>
                    <Button variant="outline">Process Efficiency</Button>
                    <Button variant="outline">Other</Button>
                </div>
            </div>
            <div className="min-w-full snap-start hidden">
                <p className="text-md"><strong>11.</strong> Please elaborate on why this factor is important and how it influences the negotiation.</p>
                <div className="p-1">
                    <Textarea />
                </div>
            </div>
        </>
    );
}

export function Q12() {
    return (
        <>
            <div className="min-w-full snap-start flex flex-col">
                <p className="text-md"><strong>12.</strong> How would you assess your negotiation power relative to the counterpart?</p>
                <div className="w-full h-full flex flex-col gap-3 justify-center">
                    <Button variant="outline">We have significantly more leverage</Button>
                    <Button variant="outline">We have slightly more leverage</Button>
                    <Button variant="outline">Leverage is balanced</Button>
                    <Button variant="outline">They have slightly more leverage</Button>
                    <Button variant="outline">They have significantly more leverage</Button>
                </div>
            </div>
            <div className="min-w-full snap-start hidden">
                <p className="text-md"><strong>12.</strong> Explain the factors contributing to this power dynamic.</p>
                <div className="p-1">
                    <Textarea />
                </div>
            </div>
        </>
    );
}

export function Q13s() {
    return (
        <div className="min-w-full snap-start flex flex-col items-center justify-center">
            <h3 className="text-xl font-semibold">Strengths and Weaknesses</h3>
        </div>
    );
}

export function Q13() {
    return (
        <div className="min-w-full snap-start flex flex-col">
            <p className="text-md"><strong>13.</strong> Where does your product/service fit in the Commodity Matrix?</p>
            <div className="p-1">
                TODO: Matrix
            </div>
        </div>
    );
}

export function Q14() {
    return (
        <div className="min-w-full snap-start flex flex-col">
            <p className="text-md"><strong>14.</strong> Are there any specific attributes of your offering that strengthen your position in this quadrant?</p>
            <div className="p-1">
                <Textarea />
            </div>
        </div>
    );
}

export function Q15() {
    return (
        <div className="min-w-full snap-start flex flex-col">
            <p className="text-md"><strong>15.</strong> What unique strengths or advantages do you bring to this negotiation?</p>
            <div className="p-1">
                <Textarea />
            </div>
        </div>
    );
}

export function Q16() {
    return (
        <div className="min-w-full snap-start flex flex-col">
            <p className="text-md"><strong>16.</strong> Are there any specific attributes of your offering that could potentially weaken your position in this quadrant?</p>
            <div className="p-1">
                <Textarea />
            </div>
        </div>
    );
}

export function Q17() {
    return (
        <>
            <div className="min-w-full snap-start flex flex-col">
                <p className="text-md"><strong>17.</strong> What are the primary risks you anticipate in this negotiation?</p>
                <div className="w-full h-full flex flex-col gap-3 justify-center">
                    <Button variant="outline">Price Pressure</Button>
                    <Button variant="outline">Contractual or Delivery Risks</Button>
                    <Button variant="outline">Competitive Positioning Risks</Button>
                    <Button variant="outline">Relationship Deterioration</Button>
                    <Button variant="outline">Other</Button>
                </div>
            </div>
            <div className="min-w-full snap-start hidden">
                <p className="text-md"><strong>17.</strong> Explain your assessment and how you plan to manage this risk.</p>
                <div className="p-1">
                    <Textarea />
                </div>
            </div>
        </>
    );
}

export function Q18() {
    return (
        <div className="min-w-full snap-start flex flex-col">
            <p className="text-md"><strong>18.</strong> What concessions are you willing to make during the negotiation?</p>
            <div className="p-1">
                <Textarea />
            </div>
        </div>
    );
}

export function Q19() {
    return (
        <div className="min-w-full snap-start flex flex-col">
            <p className="text-md"><strong>19.</strong> What does a successful outcome look like for you?</p>
            <div className="p-1">
                <Textarea />
            </div>
        </div>
    );
}

export function Q20() {
    return (
        <>
        <div className="min-w-full snap-start flex flex-col">
            <p className="text-md"><strong>20.</strong> How will you measure the success of this negotiation?</p>
            <div className="w-full h-full flex flex-col gap-3 justify-center">
                <Button variant="outline">Quantitative Measures</Button>
                <Button variant="outline">Qualitative Measures</Button>
            </div>
        </div>
        {/* Quantitative Measures */}
        <div className="min-w-full snap-start hidden">
            <p className="text-md"><strong>20.</strong> Detail specific metrics (e.g., financial gain, cost savings, contract duration).</p>
            <div className="p-1">
                <Textarea />
            </div>
        </div>
        {/* Quntitative Measures */}
        <div className="min-w-full snap-start hidden">
            <p className="text-md"><strong>20.</strong> Describe metrics such as partnership strength, market positioning, satisfaction levels.</p>
            <div className="p-1">
                <Textarea />
            </div>
        </div>
        </>
    );
}

export function Q21s() {
    return (
        <div className="min-w-full snap-start flex flex-col items-center justify-center">
            <h3 className="text-xl font-semibold">Stakeholders and Relationships</h3>
        </div>
    );
}

export function Q21() {
    return (
        <div className="min-w-full snap-start flex flex-col">
            <p className="text-md"><strong>21.</strong> Who are the primary parties involved in this negotiation?</p>
            <div className="p-1">
                <Textarea />
            </div>
        </div>
    );
}

export function Q22() {
    return (
        <>
        <div className="min-w-full snap-start flex flex-col">
            <p className="text-md"><strong>22.</strong> Can you identify other stakeholders who might influence or be affected by the negotiation outcome?</p>
            <div className="w-full h-full flex flex-col gap-3 justify-center">
                <Button variant="outline">Yes</Button>
                <Button variant="outline">No</Button>
            </div>
        </div>
        <div className="min-w-full snap-start hidden">
            <p className="text-md"><strong>22.</strong> Are you certain that no other parties will be impacted? Please elaborate on how you've determined this</p>
            <div className="p-1">
                <Textarea />
            </div>
        </div>
        </>
    );
}

export function Q23() {
    return (
        <div className="min-w-full snap-start flex flex-col">
            <p className="text-md"><strong>23.</strong> What is your role and position relative to the counterpart?</p>
            <div className="p-1">
                <Textarea />
            </div>
        </div>
    );
}

export function Q24() {
    return (
        <>
        <div className="min-w-full snap-start flex flex-col">
            <p className="text-md"><strong>24.</strong> Is there a formal or informal hierarchy affecting this negotiation?</p>
            <div className="w-full h-full flex flex-col gap-3 justify-center">
                <Button variant="outline">Yes</Button>
                <Button variant="outline">No</Button>
            </div>
        </div>
        {/* Yes */}
        <div className="min-w-full snap-start hidden">
            <p className="text-md"><strong>24.</strong> Outline the decision chains and authority levels that may impact the negotiation.</p>
            <div className="p-1">
                <Textarea />
            </div>
        </div>
        {/* No */}
        <div className="min-w-full snap-start hidden">
            <p className="text-md"><strong>24.</strong> Even without a formal hierarchy, are there informal power dynamics or influences that could affect the negotiation? Please explain.</p>
            <div className="p-1">
                <Textarea />
            </div>
        </div>
        </>
    );
}

export function Q25() {
    return (
        <div className="min-w-full snap-start flex flex-col">
            <p className="text-md"><strong>25.</strong> What are your preferred communication methods and channels?</p>
            <div className="w-full h-full flex flex-col gap-3 justify-center">
                <Button variant="outline">In-Person Meetings</Button>
                <Button variant="outline">Video Calls</Button>
                <Button variant="outline">Emails</Button>
                <Button variant="outline">Phone Calls</Button>
                <Button variant="outline">Messaging Apps</Button>
                <Button variant="outline">Other</Button>
            </div>
        </div>
    );
}

export function Q26() {
    return (
        <div className="min-w-full snap-start flex flex-col">
            <p className="text-md"><strong>26.</strong> Are there any cultural or language considerations to be aware of?</p>
            <div className="p-1">
                <Textarea />
            </div>
        </div>
    );
}

export function Q27() {
    return (
        <div className="min-w-full snap-start flex flex-col">
            <p className="text-md"><strong>27.</strong> Are there any emotional or cultural factors that might impact the negotiation?</p>
            <div className="w-full h-full flex flex-col gap-3 justify-center">
                <Button variant="outline">Yes</Button>
                <Button variant="outline">No</Button>
            </div>
        </div>
    );
}

export function Q28s() {
    return (
        <div className="min-w-full snap-start flex flex-col items-center justify-center">
            <h3 className="text-xl font-semibold">Negotiation Strategy and Style</h3>
        </div>
    );
}

export function Q28() {
    return (
        <div className="min-w-full snap-start flex flex-col">
            <p className="text-md"><strong>28.</strong> Do you plan to build rapport with the counterpart?</p>
            <div className="w-full h-full flex flex-col gap-3 justify-center">
                <Button variant="outline">Yes</Button>
                <Button variant="outline">No</Button>
            </div>
        </div>
    );
}

export function Q29() {
    return (
        <div className="min-w-full snap-start flex flex-col">
            <p className="text-md"><strong>29.</strong> What techniques will you use to handle objections and foster a collaborative atmosphere?</p>
            <div className="p-1">
                <Textarea />
            </div>
        </div>
    );
}

export function Q30() {
    return (
        <div className="min-w-full snap-start flex flex-col">
            <p className="text-md"><strong>30.</strong> What negotiation style do you plan to adopt?</p>
            <div className="w-full h-full flex flex-col gap-3 justify-center">
                <Button variant="outline">Competitive</Button>
                <Button variant="outline">Collaborative</Button>
                <Button variant="outline">Compromising</Button>
                <Button variant="outline">Avoiding</Button>
                <Button variant="outline">Accommodating</Button>
            </div>
        </div>
    );
}

export function Q31() {
    return (
        <div className="min-w-full snap-start flex flex-col">
            <p className="text-md"><strong>31.</strong> Can you identify potential barriers to reaching an agreement?</p>
            <div className="w-full h-full flex flex-col gap-3 justify-center">
                <Button variant="outline">Yes</Button>
                <Button variant="outline">No</Button>
            </div>
        </div>
    );
}

export function Q32() {
    return (
        <div className="min-w-full snap-start flex flex-col">
            <p className="text-md"><strong>32.</strong> Are you making any assumptions about the counterpart or the negotiation context?</p>
            <div className="w-full h-full flex flex-col gap-3 justify-center">
                <Button variant="outline">Yes</Button>
                <Button variant="outline">No</Button>
            </div>
        </div>
    );
}

export function Q33() {
    return (
        <div className="min-w-full snap-start flex flex-col">
            <p className="text-md"><strong>33.</strong> What expectations do you believe the other party has?</p>
            <div className="w-full h-full flex flex-col gap-3 justify-center">
                <Button variant="outline">Cost Reduction</Button>
                <Button variant="outline">Extended Services</Button>
                <Button variant="outline">Process Improvements</Button>
                <Button variant="outline">Stability in Terms</Button>
                <Button variant="outline">Non-Monetary Interests</Button>
                <Button variant="outline">Other</Button>
            </div>
        </div>
    );
}

export function Q34() {
    return (
        <div className="min-w-full snap-start flex flex-col">
            <p className="text-md"><strong>34.</strong> Are there any competitors influencing the counterpart's expectations or offers?</p>
            <div className="w-full h-full flex flex-col gap-3 justify-center">
                <Button variant="outline">Yes</Button>
                <Button variant="outline">No</Button>
            </div>
        </div>
    );
}

export function Q35() {
    return (
        <div className="min-w-full snap-start flex flex-col">
            <p className="text-md"><strong>35.</strong> How would you describe the anticipated outcome if all goes as planned?</p>
            <div className="w-full h-full flex flex-col gap-3 justify-center">
                <Button variant="outline">Long-Term Agreement</Button>
                <Button variant="outline">Short-Term Contract</Button>
                <Button variant="outline">Framework Agreement</Button>
                <Button variant="outline">One-Time Transaction</Button>
                <Button variant="outline">Elimination of Agreement</Button>
                <Button variant="outline">Other</Button>
            </div>
        </div>
    );
}

export function Q36() {
    return (
        <div className="min-w-full snap-start flex flex-col">
            <p className="text-md"><strong>36.</strong> Is your priority to achieve a long-term partnership or immediate results?</p>
            <div className="w-full h-full flex flex-col gap-3 justify-center">
                <Button variant="outline">Long-Term Partnership</Button>
                <Button variant="outline">Immediate Results</Button>
                <Button variant="outline">Framework Agreement</Button>
                <Button variant="outline">Balanced Approach</Button>
            </div>
        </div>
    );
}

export function Q37() {
    return (
        <div className="min-w-full snap-start flex flex-col">
            <p className="text-md"><strong>37.</strong> What non-monetary interests are important to you in this negotiation?</p>
            <div className="w-full h-full flex flex-col gap-3 justify-center">
                <Button variant="outline">Intellectual Property Rights</Button>
                <Button variant="outline">Exclusivity Agreements</Button>
                <Button variant="outline">Future Collaboration Opportunities</Button>
                <Button variant="outline">Brand Recognition</Button>
                <Button variant="outline">Corporate Social Responsibility</Button>
                <Button variant="outline">Other</Button>
            </div>
        </div>
    );
}

export function Q38() {
    return (
        <div className="min-w-full snap-start flex flex-col">
            <p className="text-md"><strong>38.</strong> How comfortable are you with managing emotions during the negotiation?</p>
            <div className="w-full h-full flex flex-col gap-3 justify-center">
                // TODO: Scale
            </div>
        </div>
    );
}

export function Q39() {
    return (
        <div className="min-w-full snap-start flex flex-col">
            <p className="text-md"><strong>39.</strong> Are there potential emotional triggers you should be aware of for yourself or the counterpart?</p>
            <div className="w-full h-full flex flex-col gap-3 justify-center">
                <Button variant="outline">Yes</Button>
                <Button variant="outline">No</Button>
            </div>
        </div>
    );
}

export function Q40() {
    return (
        <div className="min-w-full snap-start flex flex-col">
            <p className="text-md"><strong>40.</strong> How will you address cultural differences to prevent misunderstandings?</p>
            <div className="p-1">
                <Textarea />
            </div>
        </div>
    );
}

export function Q41s() {
    return (
        <div className="min-w-full snap-start flex flex-col items-center justify-center">
            <h3 className="text-xl font-semibold">Interests and Risk Management</h3>
        </div>
    );
}

export function Q41() {
    return (
        <div className="min-w-full snap-start flex flex-col">
            <p className="text-md"><strong>41.</strong> What are your underlying interests in this negotiation (needs, desires)?</p>
            <div className="p-1">
                <Textarea />
            </div>
        </div>
    );
}

export function Q42() {
    return (
        <div className="min-w-full snap-start flex flex-col">
            <p className="text-md"><strong>42.</strong> Are you aware of the counterpart's interests and positions?</p>
            <div className="w-full h-full flex flex-col gap-3 justify-center">
                <Button variant="outline">Yes</Button>
                <Button variant="outline">No</Button>
            </div>
        </div>
    );
}

export function Q43() {
    return (
        <div className="min-w-full snap-start flex flex-col">
            <p className="text-md"><strong>43.</strong> Are there clear points where you and the counterpart are aligned?</p>
            <div className="w-full h-full flex flex-col gap-3 justify-center">
                <Button variant="outline">Yes</Button>
                <Button variant="outline">No</Button>
            </div>
        </div>
    );
}

export function Q44() {
    return (
        <div className="min-w-full snap-start flex flex-col">
            <p className="text-md"><strong>44.</strong> What is your BATNA if this negotiation does not result in an agreement?</p>
            <div className="p-1">
                <Textarea />
            </div>
        </div>
    );
}

export function Q45() {
    return (
        <div className="min-w-full snap-start flex flex-col">
            <p className="text-md"><strong>45.</strong> What do you believe is the counterpart's BATNA?</p>
            <div className="p-1">
                <Textarea />
            </div>
        </div>
    );
}

export function Q46() {
    return (
        <div className="min-w-full snap-start flex flex-col">
            <p className="text-md"><strong>46.</strong> What concessions do you expect or require from the counterpart?</p>
            <div className="p-1">
                <Textarea />
            </div>
        </div>
    );
}

export function Q47() {
    return (
        <div className="min-w-full snap-start flex flex-col">
            <p className="text-md"><strong>47.</strong> Are there any inconsistencies or points requiring clarification?</p>
            <div className="p-1">
                <Textarea />
            </div>
        </div>
    );
}
