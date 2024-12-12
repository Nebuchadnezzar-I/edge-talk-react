import globalStyles from '../global.css?inline';

class Header extends HTMLElement {
    constructor() {
        super();
    }

    render() {
        const shadow = this.attachShadow({ mode: 'open' });

        // Style
        const style = document.createElement('style');
        style.textContent = globalStyles;
        shadow.appendChild(style);

        const page = document.createElement('div');
        page.classList.add('header');

        const h3 = document.createElement('h3');
        h3.classList.add('logo');
        h3.append('EdgeTalk');

        page.appendChild(h3);
        shadow.appendChild(page);
    }

    connectedCallback() {
        this.render();
    }
}

customElements.define('header-component', Header);
