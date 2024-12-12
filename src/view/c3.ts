import { MoveToPrevWindow } from '../aux/ui/swipe';
import globalStyles from '../global.css?inline';

class C3Layout extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.handleEvent = this.handleEvent.bind(this);
    }

    connectedCallback() {
        document.addEventListener('c3-event', this.handleEvent);
    }

    disconnectedCallback() {
        document.removeEventListener('c3-event', this.handleEvent);
    }

    renderEmail() {
        this.clearShadowRoot();

        const style = document.createElement('style');
        style.textContent = globalStyles;
        this.shadowRoot?.appendChild(style);

        const page = document.createElement('div');
        page.classList.add('placeholder');
        page.id = 'placeholder';

        const h3 = document.createElement('h3');
        h3.textContent = 'Email';

        page.appendChild(h3);
        this.shadowRoot?.appendChild(page);

        page.addEventListener('click', () => {
            MoveToPrevWindow();
        });
    }

    renderConsulting() {
        this.clearShadowRoot();

        const style = document.createElement('style');
        style.textContent = globalStyles;
        this.shadowRoot?.appendChild(style);

        const page = document.createElement('div');
        page.classList.add('placeholder');
        page.id = 'placeholder';

        const h3 = document.createElement('h3');
        h3.textContent = 'Consulting';

        page.appendChild(h3);
        this.shadowRoot?.appendChild(page);

        page.addEventListener('click', () => {
            MoveToPrevWindow();
        });
    }

    renderLiveChat() {
        this.clearShadowRoot();

        const style = document.createElement('style');
        style.textContent = globalStyles;
        this.shadowRoot?.appendChild(style);

        const page = document.createElement('div');
        page.classList.add('placeholder');
        page.id = 'placeholder';

        const h3 = document.createElement('h3');
        h3.textContent = 'Live Chat';

        page.appendChild(h3);
        this.shadowRoot?.appendChild(page);

        page.addEventListener('click', () => {
            MoveToPrevWindow();
        });
    }

    clearShadowRoot() {
        while (this.shadowRoot?.firstChild) {
            this.shadowRoot.removeChild(this.shadowRoot.firstChild);
        }
    }

    handleEvent(event: any) {
        switch (event.detail.renderComponent) {
            case 'email':
                this.renderEmail();
                break;
            case 'consulting':
                this.renderConsulting();
                break;
            case 'live-chat':
                this.renderLiveChat();
                break;
        }
    }
}

customElements.define('c3-layout', C3Layout);
