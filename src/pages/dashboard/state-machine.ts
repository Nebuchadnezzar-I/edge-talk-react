type State = "PENDING" | "QUESTIONING" | "REVIEW" | "FINISH";
type MachineEvent = "Ask" | "Again" | "FeedBack" | "NO" | "YES";

const transitions: Record<State, Partial<Record<MachineEvent, State>>> = {
    PENDING: { Ask: "QUESTIONING" },
    QUESTIONING: { Again: "QUESTIONING", FeedBack: "REVIEW" },
    REVIEW: { NO: "REVIEW", YES: "FINISH" },
    FINISH: {},
};

let currentState: State = "PENDING";

const transition = (event: MachineEvent): State => {
    const nextState = transitions[currentState][event];
    if (nextState) {
        currentState = nextState;
        console.log(`Transitioned to state: ${currentState}`);
    } else {
        console.log(`Invalid transition from ${currentState} on event ${event}`);
    }
    return currentState;
};

transition("Ask");
console.log("State:", currentState);
transition("Again");
console.log("State:", currentState);
transition("FeedBack");
console.log("State:", currentState);
transition("NO");
console.log("State:", currentState);
transition("YES");
console.log("State:", currentState);
