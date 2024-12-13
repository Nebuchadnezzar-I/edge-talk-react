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
        page.classList.add('l2-max-height-nav');
        page.classList.add('c3');

        const pageHeader = document.createElement('div');
        pageHeader.classList.add('head');

        const backButton = document.createElement('p');
        backButton.innerText = 'Back';
        backButton.id = 'back-button';

        const newButton = document.createElement('p');
        newButton.innerText = 'New';

        pageHeader.appendChild(backButton);
        pageHeader.appendChild(newButton);
        page.appendChild(pageHeader);

        // Email item
        {
            const emailItem = document.createElement('div');
            emailItem.classList.add('email-item');

            const header = document.createElement('div');
            header.classList.add('header');

            const hH3 = document.createElement('h3');
            hH3.innerText = 'AI';
            header.appendChild(hH3);

            const hp = document.createElement('p');
            hp.innerText = '2.11.2024';
            header.appendChild(hp);

            const msgContent = document.createElement('p');
            msgContent.innerText = 'MSG Content';

            emailItem.appendChild(header);
            emailItem.appendChild(msgContent);

            for (let i = 0; i < 5; i++) {
                const clonedItem = emailItem.cloneNode(true);
                page.appendChild(clonedItem);
            }
        }

        this.shadowRoot?.appendChild(page);

        backButton.addEventListener('click', () => {
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
