class C2Layout extends HTMLElement {
    constructor() {
        super();

        const shadow =
            this.attachShadow({ mode: 'open' });

        shadow.innerHTML = `
            <p>
                C2
            </p>
        `;
    }

    connectedCallback() {
        console.log("C2 Loaded");
    }
}

customElements.define('c2-layout', C2Layout);
