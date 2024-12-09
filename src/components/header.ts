class Header extends HTMLElement {
    constructor() {
        super();

        const shadow =
            this.attachShadow({ mode: 'open' });

        shadow.innerHTML = `
            <div class="n-list" id="select">
                Header
            </div>
        `;

        document.addEventListener('my-custom-event', function (event) {
            console.log("Custom even catch: ", event);
        });
    }

    connectedCallback() {
        console.log("Header Loaded");
    }
}

customElements.define('header-component', Header);
