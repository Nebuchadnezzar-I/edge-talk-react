import { Supabase } from "../aux/db/supabase";
import { MoveToNextWindow } from "../aux/ui/swipe";

class C1Layout extends HTMLElement {
    constructor() { super() }

    async connectedCallback() {
        let { data } = await Supabase.from("Negotiations").select("*")
        this.render(data)
    }

    render(data: any) {
        const shadow = this.attachShadow({ mode: "open" })

        let negotiationList = ""
        data.map((e: any) => {
            negotiationList +=
                `<div class="item" data-id="${e.id}">${e.name}</div>`
        })

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
        <div class="n-list" id="negotiation-list">
            ${negotiationList}
        </div>
        `


        const negotiationOptionList = shadow.getElementById("negotiation-list")
        negotiationOptionList?.addEventListener("click", function (event: MouseEvent) {
            const target = (event.target as HTMLElement).closest(".item")
            if (target) { MoveToNextWindow() }
        });
    }
}

customElements.define("c1-layout", C1Layout)
