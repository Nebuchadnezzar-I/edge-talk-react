import { MoveToPrevWindow } from "../aux/ui/swipe";

class C3Layout extends HTMLElement {
    constructor() { super() }

    connectedCallback() { this.render() }

    render() {
        const shadow = this.attachShadow({ mode: "open" })

        shadow.innerHTML = `
        <style>
        .placeholder {
            display: flex;
            width: 100%;
            height: 100%;
            align-items: center;
            justify-content: center;
        }
        </style>
        <div class="placeholder" id="placeholder">
            <h3>Work in progress</h3>
        </div>
        `

        // Temp
        const moveBack = shadow.getElementById("placeholder")
        moveBack?.addEventListener("click", function () {
            MoveToPrevWindow()
        });
        //
    }
}

customElements.define('c3-layout', C3Layout);
