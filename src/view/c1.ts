import { Supabase } from "../aux/db/supabase";
import { MoveToNextWindow } from "../aux/ui/swipe";

class C1Layout extends HTMLElement {
    constructor() {
        super();
    }

    render(data: any) {
        const shadow = this.attachShadow({ mode: 'open' });

        let negotiationList = "";
        data.map((e: any) => {
            negotiationList +=
            `<div class="item" data-id="${e.id}">${e.name}</div>`
            ;
        });

        shadow.innerHTML = `
            <style>
            .n-list {
                display: flex;
                flex-direction: column;
                gap: .5rem;
            }
            .n-list .item {
                padding: .5rem 1rem;
                border-radius: .5rem;
                transition: 100ms background;
                cursor: pointer;

                &:hover {
                    background: var(--sec);
                }
            }
            </style>
            <div class="n-list" id="select">
                ${negotiationList}
            </div>
        `;


        const parent = shadow.getElementById('select');
        parent?.addEventListener('click', function (event: MouseEvent) {
            const target = event.target as HTMLElement;

            if (target.classList.contains('item')) {
                MoveToNextWindow();

                let event = new CustomEvent("move-from-first-to-second-window");
                document.dispatchEvent(event)
            }
        });
    }

    async connectedCallback() {
        let { data } = await Supabase
            .from("Negotiations")
            .select("*");

        this.render(data);
    }
}

customElements.define('c1-layout', C1Layout);
