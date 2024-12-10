import { MoveToNextWindow, MoveToPrevWindow } from "../aux/ui/swipe"

class C2Layout extends HTMLElement {
    constructor() { super() }

    async connectedCallback() { this.render() }

    render() {
        const shadow = this.attachShadow({ mode: "open" })

        shadow.innerHTML = `
        <style>
        p, h3 { margin: 0; }
        .option-menu {
            display: flex;
            flex-direction: column;
            gap: 1rem;
        }
        .option {
            padding: .5rem 1rem;
            border-radius: .5rem;
            transition: 100ms background;
            cursor: pointer;
            display: flex;
            flex-direction: column;
            gap: .25rem;

            &:hover {
                background: var(--sec);
            }
        }
        .wrapper {
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            height: 100%;
        }
        </style>
        <div class="wrapper">
            <div class="option-menu" id="module-list">
                <div class="option" data-id="consulting">
                    <h3>Consulting AI</h3>
                    <p>Consult you negotiation with AI.</p>
                </div>
                <div class="option" data-id="live-chat">
                    <h3>Live chat</h3>
                    <p>Write messages to you opponent in real time.</p>
                </div>
                <div class="option" data-id="email">
                    <h3>Email</h3>
                    <p>Write messages to you opponent in longer time period.</p>
                </div>
            </div>
            <div class="option" data-id="email" id="move-back">
                <h3>Move back</h3>
            </div>
        </div>
        `;

        const moveBackButton = shadow.getElementById("move-back")
        moveBackButton?.addEventListener("click", function (event: MouseEvent) {
            const target = (event.target as HTMLElement).closest(".option")
            if (target) { MoveToPrevWindow() }
        });

        const moduleList = shadow.getElementById("module-list")
        moduleList?.addEventListener("click", function (event: MouseEvent) {
            const target = (event.target as HTMLElement).closest(".option")
            if (target) { MoveToNextWindow() }
        });
    }
}

customElements.define("c2-layout", C2Layout);
