class C3Layout extends HTMLElement {
    constructor() {
        super();

        const shadow =
            this.attachShadow({ mode: 'open' });

        shadow.innerHTML = `
            <p>
                C3
            </p>
        `;
    }

    connectedCallback() {
        console.log("C3 Loaded");
    }
}

customElements.define('c3-layout', C3Layout);
