import { MoveToNextWindow } from "../aux/ui/swipe";

class C1Layout extends HTMLElement {
    constructor() {
        super();

        const shadow =
            this.attachShadow({ mode: 'open' });

        shadow.innerHTML = `
            <style>
            .n-list {
                display: flex;
                flex-direction: column;
                gap: .5rem;

                .item {
                    padding: .5rem 1rem;
                    border-radius: .5rem;
                    transition: 100ms background;
                    cursor: pointer;

                    &:hover {
                        background: var(--sec);
                    }
                }
            }
            </style>
            <div class="n-list" id="select">
                <div class="item" data-id="0">123</div>
                <div class="item" data-id="1">123</div>
                <div class="item" data-id="2">123</div>
                <div class="item" data-id="3">123</div>
            </div>
        `;

        const parent = shadow.getElementById('select');
        parent?.addEventListener('click', function (event: MouseEvent) {
            const target = event.target as HTMLElement;

            if (target.classList.contains('item')) {
                MoveToNextWindow();

                let event = new CustomEvent("my-custom-event");
                document.dispatchEvent(event)
                console.log("Dispatch: ", event);
            }
        });
    }

    connectedCallback() {
        console.log("C1 Loaded");
    }
}

customElements.define('c1-layout', C1Layout);
