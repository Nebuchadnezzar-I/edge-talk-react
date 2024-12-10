class Header extends HTMLElement {
    constructor() { super() }

    connectedCallback() { this.render() }

    render() {
        const shadow = this.attachShadow({ mode: 'open' });

        shadow.innerHTML = `
        <style>
        .n-list {
            display: flex;
            align-items: center;
            gap: 1rem;
        }
        </style>
        <div class="n-list" id="select">
            <h3 class="logo">EdgeTalk</h3>
            <div class="menu"></div>
        </div>
        `
    }
}

customElements.define('header-component', Header)
