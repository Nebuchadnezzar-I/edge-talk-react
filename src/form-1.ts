export const form1 = {
    "sections": [
        {
            "sectionTitle": "1.1 What is prompting this negotiation?",
            "formElement": "Multiple-choice Selection",
            "options": [
                {
                    "label": "New Opportunity",
                    "prompt": "Please elaborate on the objectives and goals for starting this new relationship.",
                    "formElement": "Textarea"
                },
                {
                    "label": "Ongoing Partnership",
                    "prompt": "Describe how you aim to sustain and improve existing agreements.",
                    "formElement": "Textarea"
                },
                {
                    "label": "Competitive Bid / Vendor Selection",
                    "prompt": "Highlight your unique selling points and how you differentiate from competitors.",
                    "formElement": "Textarea"
                },
                {
                    "label": "Other",
                    "prompt": "Please describe the context in detail.",
                    "formElement": "Textarea"
                }
            ]
        },
        {
            "sectionTitle": "1.2 Why is this particular opportunity or partner a good fit for negotiation?",
            "formElement": "Textarea",
            "prompt": "Explain the alignment or strategic fit with the partner and how it benefits both parties."
        },
        {
            "sectionTitle": "1.3 Is this a formal negotiation or an exploratory discussion?",
            "formElement": "Binary Choice",
            "options": [
                {
                    "label": "Formal Negotiation",
                    "prompt": "Outline the key issues to be negotiated and any formal procedures that need to be followed.",
                    "formElement": "Textarea"
                },
                {
                    "label": "Exploratory Discussion",
                    "prompt": "Describe the main topics you wish to explore and any preliminary goals you have.",
                    "formElement": "Textarea"
                }
            ]
        },
        {
            "sectionTitle": "1.4 Are there any competitors involved in this negotiation?",
            "formElement": "Yes/No Selection",
            "responses": {
                "Yes": {
                    "prompt": "Identify the competitors and discuss how their involvement influences your positioning and strategy.",
                    "formElement": "Textarea"
                },
                "No": {
                    "prompt": "Even without direct competitors, are there alternative solutions or substitutes the counterpart might consider? Please elaborate.",
                    "formElement": "Textarea"
                }
            }
        },
        {
            "sectionTitle": "1.5 What are your primary objectives in this negotiation?",
            "formElement": "Checkboxes",
            "options": [
                "Maximize Value (beyond just price)",
                "Establish Partnership Terms",
                "Reduce Costs",
                "Secure Short-Term Wins"
            ],
            "followUp": {
                "prompt": "Please explain how you plan to achieve this objective.",
                "formElement": "Textarea"
            }
        },
        {
            "sectionTitle": "1.6 Do you have a history of past interactions with the counterpart?",
            "formElement": "Yes/No Selection",
            "responses": {
                "Yes": {
                    "prompt": "Describe previous dealings, outcomes, and how they might influence the current negotiation.",
                    "formElement": "Textarea"
                },
                "No": {
                    "prompt": "How do you plan to establish rapport and trust with the counterpart in the absence of prior interactions?",
                    "formElement": "Textarea"
                }
            }
        },
        {
            "sectionTitle": "1.7 Are there any time constraints or deadlines affecting this negotiation?",
            "formElement": "Yes/No Selection",
            "responses": {
                "Yes": {
                    "prompt": "Specify the critical timelines or deadlines and explain their impact on the negotiation.",
                    "formElements": ["Date Picker", "Textarea"]
                },
                "No": {
                    "prompt": "Even without specific deadlines, are there factors that could influence the timing or urgency of the negotiation? Please explain.",
                    "formElement": "Textarea"
                }
            }
        },
        {
            "sectionTitle": "1.8 Are there any legal or compliance considerations relevant to this negotiation?",
            "formElement": "Yes/No Selection",
            "responses": {
                "Yes": {
                    "prompt": "Outline the legal, regulatory, or compliance issues that must be addressed.",
                    "formElement": "Textarea"
                },
                "No": {
                    "prompt": "Are there any industry standards or best practices that should be considered during the negotiation? Please elaborate.",
                    "formElement": "Textarea"
                }
            }
        },
        {
            "sectionTitle": "2.1 Is price a critical factor in this negotiation?",
            "formElement": "Yes/No Selection",
            "responses": {
                "Yes": {
                    "prompt": "Detail your pricing flexibility, cost boundaries, and any alternative cost structures you are willing to consider.",
                    "formElement": "Textarea"
                },
                "No": {
                    "prompt": "Specify which factors are more important than price and explain why they hold greater significance.",
                    "formElement": "Textarea"
                }
            }
        },
        {
            "sectionTitle": "2.2 If price is not a primary focus, what factors hold the most importance?",
            "formElement": "Checkboxes",
            "options": [
                "Quality",
                "Delivery Speed",
                "Partnership Stability",
                "Innovation",
                "Process Efficiency",
                "Other"
            ],
            "followUp": {
                "prompt": "Please elaborate on why this factor is important and how it influences the negotiation.",
                "formElement": "Textarea"
            }
        },
        {
            "sectionTitle": "3.1 Where does your product/service fit in the Commodity Matrix?",
            "formElement": "Multiple-choice Selection",
            "options": [
                {
                    "label": "High Volume / Competitive (Yellow Quadrant)",
                    "prompt": "Explain how you will focus on negotiation leverage and cost efficiencies.",
                    "formElement": "Textarea"
                },
                {
                    "label": "Key Supplies / Partnership Focused (Red Quadrant)",
                    "prompt": "Emphasize the partnership value and plans for long-term continuity.",
                    "formElement": "Textarea"
                },
                {
                    "label": "Process-Oriented (Blue Quadrant)",
                    "prompt": "Highlight integration and efficiency improvements you can offer.",
                    "formElement": "Textarea"
                },
                {
                    "label": "Unique or Niche Supply",
                    "prompt": "Emphasize the critical importance and specialized nature of your offering.",
                    "formElement": "Textarea"
                }
            ]
        },
        {
            "sectionTitle": "3.2 Are there any specific attributes of your offering that strengthen your position in this quadrant?",
            "formElement": "Textarea",
            "prompt": "Provide details on features or advantages that enhance your position."
        },
        {
            "sectionTitle": "4.1 Who are the primary parties involved in this negotiation?",
            "formElement": "Multiple-choice Selection",
            "options": [
                {
                    "label": "Primary Decision-Maker",
                    "prompt": "Describe your decision authority and how it influences negotiation power.",
                    "formElement": "Textarea"
                },
                {
                    "label": "Influencer or Facilitator",
                    "prompt": "Explain how you can support decision-making indirectly.",
                    "formElement": "Textarea"
                },
                {
                    "label": "Negotiating on Behalf of Team or Organization",
                    "prompt": "Clarify alignment with internal objectives and team expectations.",
                    "formElement": "Textarea"
                },
                {
                    "label": "Other",
                    "prompt": "Describe your unique position and its impact on the negotiation.",
                    "formElement": "Textarea"
                }
            ]
        },
        {
            "sectionTitle": "4.2 Can you identify other stakeholders who might influence or be affected by the negotiation outcome?",
            "formElement": "Yes/No Selection",
            "responses": {
                "Yes": {
                    "prompt": "List the stakeholders and describe their potential impact on the negotiation.",
                    "formElement": "Repeating Section",
                    "fields": [
                        { "label": "Stakeholder Name", "formElement": "Text Input" },
                        { "label": "Role/Impact", "formElement": "Textarea" }
                    ]
                },
                "No": {
                    "prompt": "Are you certain that no other parties will be impacted? Please elaborate on how you've determined this.",
                    "formElement": "Textarea"
                }
            }
        },
        {
            "sectionTitle": "4.3 What is your role and position relative to the counterpart?",
            "formElement": "Multiple-choice Selection",
            "options": [
                {
                    "label": "Equal Status",
                    "prompt": "Explain how this power dynamic affects the negotiation.",
                    "formElement": "Textarea"
                },
                {
                    "label": "Customer Dominance",
                    "prompt": "Explain how this power dynamic affects the negotiation.",
                    "formElement": "Textarea"
                },
                {
                    "label": "Supplier Leverage",
                    "prompt": "Explain how this power dynamic affects the negotiation.",
                    "formElement": "Textarea"
                },
                {
                    "label": "Dependent Partner",
                    "prompt": "Explain how this power dynamic affects the negotiation.",
                    "formElement": "Textarea"
                },
                {
                    "label": "Other",
                    "prompt": "Explain how this power dynamic affects the negotiation.",
                    "formElement": "Textarea"
                }
            ]
        },
        {
            "sectionTitle": "4.4 Is there a formal or informal hierarchy affecting this negotiation?",
            "formElement": "Yes/No Selection",
            "responses": {
                "Yes": {
                    "prompt": "Outline the decision chains and authority levels that may impact the negotiation.",
                    "formElement": ["Organizational Chart Upload", "Textarea"]
                },
                "No": {
                    "prompt": "Even without a formal hierarchy, are there informal power dynamics or influences that could affect the negotiation? Please explain.",
                    "formElement": "Textarea"
                }
            }
        },
        {
            "sectionTitle": "4.5 What are your preferred communication methods and channels?",
            "formElement": "Checkboxes",
            "options": [
                "In-Person Meetings",
                "Video Calls",
                "Emails",
                "Phone Calls",
                "Messaging Apps",
                "Other"
            ],
            "followUp": {
                "prompt": "Explain why this method is preferred and any considerations for its use.",
                "formElement": "Textarea"
            }
        },
        {
            "sectionTitle": "4.6 Are there any cultural or language considerations to be aware of?",
            "formElement": "Yes/No Selection",
            "responses": {
                "Yes": {
                    "prompt": "Describe the cultural or language factors that may impact communication and how you plan to address them.",
                    "formElement": "Textarea"
                },
                "No": {
                    "prompt": "How will you ensure clear and effective communication with the counterpart?",
                    "formElement": "Textarea"
                }
            }
        },
        {
            "sectionTitle": "4.7 Are there any emotional or cultural factors that might impact the negotiation?",
            "formElement": "Yes/No Selection",
            "responses": {
                "Yes": {
                    "prompt": "Describe the emotional or cultural factors and how you plan to address them.",
                    "formElement": "Textarea"
                },
                "No": {
                    "prompt": "How will you remain sensitive to potential emotional or cultural nuances during the negotiation?",
                    "formElement": "Textarea"
                }
            }
        },
        {
            "sectionTitle": "4.8 How do you plan to build rapport with the counterpart?",
            "formElement": "Textarea",
            "prompt": "Describe strategies you will use to build trust and a positive relationship, considering emotional intelligence and cultural factors."
        },
        {
            "sectionTitle": "4.9 What techniques will you use to handle objections and foster a collaborative atmosphere?",
            "formElement": "Textarea",
            "prompt": "Outline the methods you plan to employ to address objections effectively and keep the negotiation constructive."
        },
        {
            "sectionTitle": "4.10 What negotiation style do you plan to adopt?",
            "formElement": "Multiple-choice Selection",
            "options": [
                "Competitive",
                "Collaborative",
                "Compromising",
                "Avoiding",
                "Accommodating"
            ],
            "followUp": {
                "prompt": "Explain why this style is appropriate for this negotiation.",
                "formElement": "Textarea"
            }
        },
        {
            "sectionTitle": "4.11 How would you assess your negotiation power relative to the counterpart?",
            "formElement": "Multiple-choice Selection",
            "options": [
                "We have significantly more leverage",
                "We have slightly more leverage",
                "Leverage is balanced",
                "They have slightly more leverage",
                "They have significantly more leverage"
            ],
            "followUp": {
                "prompt": "Explain the factors contributing to this power dynamic.",
                "formElement": "Textarea"
            }
        },
        {
            "sectionTitle": "5.1 What are the primary risks you anticipate in this negotiation?",
            "formElement": "Checkboxes",
            "options": [
                "Price Pressure",
                "Contractual or Delivery Risks",
                "Competitive Positioning Risks",
                "Relationship Deterioration",
                "Other"
            ],
            "riskDetails": {
                "fields": [
                    { "label": "Likelihood", "formElement": "Dropdown", "options": ["Low", "Medium", "High"] },
                    { "label": "Severity", "formElement": "Dropdown", "options": ["Low", "Medium", "High"] },
                    { "label": "Details", "formElement": "Textarea" }
                ],
                "prompt": "Explain your assessment and how you plan to manage this risk."
            }
        },
        {
            "sectionTitle": "5.2 Can you identify potential barriers to reaching an agreement?",
            "formElement": "Yes/No Selection",
            "responses": {
                "Yes": {
                    "prompt": "Describe obstacles such as conflicting interests, resource limitations, external pressures, or assumptions and biases.",
                    "formElement": "Textarea"
                },
                "No": {
                    "prompt": "What steps will you take to ensure the negotiation proceeds smoothly?",
                    "formElement": "Textarea"
                }
            }
        },
        {
            "sectionTitle": "5.3 Are you making any assumptions about the counterpart or the negotiation context?",
            "formElement": "Yes/No Selection",
            "responses": {
                "Yes": {
                    "prompt": "List your assumptions and consider how they might influence your strategy.",
                    "formElement": "Textarea"
                },
                "No": {
                    "prompt": "Confirming you have identified and addressed all potential assumptions.",
                    "formElement": "Acknowledgment"
                }
            }
        },
        {
            "sectionTitle": "5.4 What expectations do you believe the other party has?",
            "formElement": "Checkboxes",
            "options": [
                "Cost Reduction",
                "Extended Services",
                "Process Improvements",
                "Stability in Terms",
                "Non-Monetary Interests",
                "Other"
            ],
            "followUp": {
                "prompt": "Elaborate on why you believe they have this expectation and how it affects the negotiation.",
                "formElement": "Textarea"
            }
        },
        {
            "sectionTitle": "5.5 Are there any competitors influencing the counterpart's expectations or offers?",
            "formElement": "Yes/No Selection",
            "responses": {
                "Yes": {
                    "prompt": "Identify the competitors and explain how they might affect the negotiation.",
                    "formElement": "Textarea"
                },
                "No": {
                    "prompt": "What factors do you think are shaping the counterpart's expectations?",
                    "formElement": "Textarea"
                }
            }
        },
        {
            "sectionTitle": "5.6 How would you describe the anticipated outcome if all goes as planned?",
            "formElement": "Multiple-choice Selection",
            "options": [
                "Long-Term Agreement",
                "Short-Term Contract",
                "Framework Agreement",
                "Other"
            ],
            "followUp": {
                "prompt": "Provide specifics about this anticipated outcome.",
                "formElement": "Textarea"
            }
        },
        {
            "sectionTitle": "5.7 Is your priority to achieve a long-term partnership or immediate results?",
            "formElement": "Multiple-choice Selection",
            "options": [
                "Long-Term Partnership",
                "Immediate Results",
                "Balanced Approach"
            ],
            "followUp": {
                "prompt": "Explain how this focus affects your negotiation approach.",
                "formElement": "Textarea"
            }
        },
        {
            "sectionTitle": "5.8 What non-monetary interests are important to you in this negotiation?",
            "formElement": "Checkboxes",
            "options": [
                "Intellectual Property Rights",
                "Exclusivity Agreements",
                "Future Collaboration Opportunities",
                "Brand Recognition",
                "Corporate Social Responsibility",
                "Other"
            ],
            "followUp": {
                "prompt": "Explain why this non-monetary interest is important and how it influences the negotiation.",
                "formElement": "Textarea"
            }
        },
        {
            "sectionTitle": "5.9 How comfortable are you with managing emotions during the negotiation?",
            "formElement": "Scale Selection",
            "scale": { "min": 1, "max": 5, "description": "1 is not comfortable, 5 is very comfortable" },
            "followUp": {
                "prompt": "Explain your rating and describe any strategies you plan to use to manage both your own emotions and those of the counterpart.",
                "formElement": "Textarea"
            }
        },
        {
            "sectionTitle": "5.10 Are there potential emotional triggers you should be aware of for yourself or the counterpart?",
            "formElement": "Yes/No Selection",
            "responses": {
                "Yes": {
                    "prompt": "Identify these emotional triggers and explain how you plan to navigate them.",
                    "formElement": "Textarea"
                },
                "No": {
                    "prompt": "Describe how you will remain vigilant for any emotional cues during the negotiation.",
                    "formElement": "Textarea"
                }
            }
        },
        {
            "sectionTitle": "5.11 How will you address cultural differences to prevent misunderstandings?",
            "formElement": "Textarea",
            "prompt": "Detail your approach to recognizing and respecting cultural differences to maintain clear communication."
        },
        {
            "sectionTitle": "6.1 What are your underlying interests in this negotiation (needs, desires)?",
            "formElement": "Textarea",
            "prompt": "Describe your fundamental needs and motivations, including any non-monetary interests such as Intellectual Property Rights, Exclusivity Agreements, or Future Collaboration Opportunities."
        },
        {
            "sectionTitle": "6.2 What are your positions (specific demands or statements)?",
            "formElement": "Repeating Section",
            "fields": [
                { "label": "Position", "formElement": "Text Input" },
                { "label": "Details", "formElement": "Textarea" }
            ],
            "prompt": "List your explicit negotiation positions or demands."
        },
        {
            "sectionTitle": "6.3 Are you aware of the counterpart's interests and positions?",
            "formElement": "Yes/No Selection",
            "responses": {
                "Yes": {
                    "prompt": "Outline your understanding of their interests and positions.",
                    "formElement": "Repeating Section",
                    "fields": [
                        { "label": "Interest/Position", "formElement": "Text Input" },
                        { "label": "Details", "formElement": "Textarea" }
                    ]
                },
                "No": {
                    "prompt": "How do you plan to gain insight into the counterpart's interests and positions during the negotiation?",
                    "formElement": "Textarea"
                }
            }
        },
        {
            "sectionTitle": "6.4 Are there clear points where you and the counterpart are aligned?",
            "formElement": "Yes/No Selection",
            "responses": {
                "Yes": {
                    "prompt": "Outline common goals or shared interests.",
                    "formElement": "Repeating Section",
                    "fields": [
                        { "label": "Aligned Point", "formElement": "Text Input" },
                        { "label": "Details", "formElement": "Textarea" }
                    ]
                },
                "No": {
                    "prompt": "What strategies will you employ to find areas of potential alignment?",
                    "formElement": "Textarea"
                }
            }
        },
        {
            "sectionTitle": "7.1 What is your BATNA if this negotiation does not result in an agreement?",
            "formElement": "Textarea",
            "prompt": "Describe your best alternative course of action and how it impacts your negotiation strategy."
        },
        {
            "sectionTitle": "7.2 What do you believe is the counterpart's BATNA?",
            "formElement": "Textarea",
            "prompt": "Speculate on their alternatives if an agreement is not reached and how it might affect their negotiation stance."
        },
        {
            "sectionTitle": "8.1 What concessions are you willing to make during the negotiation?",
            "formElement": "Repeating Section",
            "fields": [
                { "label": "Concession", "formElement": "Text Input" },
                { "label": "Must-Have or Optional", "formElement": "Dropdown", "options": ["Must-Have", "Optional"] },
                { "label": "Level of Flexibility", "formElement": "Dropdown", "options": ["Low", "Medium", "High"] },
                { "label": "Justification", "formElement": "Textarea" }
            ],
            "prompt": "Provide details for each concession."
        },
        {
            "sectionTitle": "8.2 What concessions do you expect or require from the counterpart?",
            "formElement": "Repeating Section",
            "fields": [
                { "label": "Expected Concession", "formElement": "Text Input" },
                { "label": "Must-Have or Optional", "formElement": "Dropdown", "options": ["Must-Have", "Optional"] },
                { "label": "Level of Flexibility", "formElement": "Dropdown", "options": ["Low", "Medium", "High"] },
                { "label": "Explanation", "formElement": "Textarea" }
            ],
            "prompt": "Specify what you need from them and why it's important."
        },
        {
            "sectionTitle": "9.1 What does a successful outcome look like for you?",
            "formElement": "Textarea",
            "prompt": "Define your criteria for success and how you will measure them, including both qualitative and quantitative terms (e.g., financial gain, partnership strength, market positioning)."
        },
        {
            "sectionTitle": "9.2 How will you measure the success of this negotiation?",
            "formElements": [
                {
                    "label": "Quantitative Measures",
                    "formElement": "Textarea",
                    "prompt": "Detail specific metrics (e.g., financial gain, cost savings, contract duration)."
                },
                {
                    "label": "Qualitative Measures",
                    "formElement": "Textarea",
                    "prompt": "Describe metrics such as partnership strength, market positioning, satisfaction levels."
                }
            ]
        },
        {
            "sectionTitle": "10.1 What unique strengths or advantages do you bring to this negotiation?",
            "formElement": "Textarea",
            "prompt": "Reflect on your current positioning, competitive edge, and any unique value propositions."
        },
        {
            "sectionTitle": "10.2 Based on the information gathered, would you like a summary of key areas to focus on next?",
            "formElement": "Yes/No Selection",
            "responses": {
                "Yes": {
                    "action": "A summary will be provided by the system."
                },
                "No": {
                    "prompt": "Please confirm you are ready to proceed to the strategy phase or indicate if you need further clarification on any points.",
                    "formElement": "Confirmation Dialog"
                }
            }
        }
    ]
}
