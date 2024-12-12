import { MoveToNextWindow, MoveToPrevWindow } from '../aux/ui/swipe';
import globalStyles from '../global.css?inline';

class C2Layout extends HTMLElement {
    constructor() {
        super();
    }

    render() {
        const shadow = this.attachShadow({ mode: 'open' });

        // Style
        const style = document.createElement('style');
        style.textContent = globalStyles;
        shadow.appendChild(style);

        // Page
        const page = document.createElement('div');
        page.classList.add('c2');

        const select = document.createElement('div');
        select.classList.add('options');
        select.id = 'options';

        // Option One
        {
            const optionOne = document.createElement('div');
            optionOne.classList.add('item');
            optionOne.setAttribute('data-id', 'consulting');

            const h3 = document.createElement('h3');
            h3.append('Consulting AI');

            const p = document.createElement('p');
            p.append('Consult you negotiation with AI.');

            optionOne.appendChild(h3);
            optionOne.appendChild(p);
            select.appendChild(optionOne);
        }

        // Options Two
        {
            const optionTwo = document.createElement('div');
            optionTwo.classList.add('item');
            optionTwo.setAttribute('data-id', 'live-chat');

            const h3 = document.createElement('h3');
            h3.append('Live chat');

            const p = document.createElement('p');
            p.append('Write messages to you opponent in real time.');

            optionTwo.appendChild(h3);
            optionTwo.appendChild(p);
            select.appendChild(optionTwo);
        }

        // Options Three
        {
            const optionThree = document.createElement('div');
            optionThree.classList.add('item');
            optionThree.setAttribute('data-id', 'email');

            const h3 = document.createElement('h3');
            h3.append('Email');

            const p = document.createElement('p');
            p.append('Write messages to you opponent (longer period).');

            optionThree.appendChild(h3);
            optionThree.appendChild(p);
            select.appendChild(optionThree);
        }

        //

        const moveBack = document.createElement('div');
        moveBack.id = 'move-back';
        moveBack.classList.add('move-back');
        moveBack.setAttribute('data-id', 'email');

        const h3 = document.createElement('h3');
        h3.append('Move back');

        moveBack.appendChild(h3);

        page.appendChild(select);
        page.appendChild(moveBack);
        shadow.appendChild(page);

        const moveBackButton = shadow.getElementById('move-back');
        moveBackButton?.addEventListener('click', function () {
            MoveToPrevWindow();
        });

        const moduleList = shadow.getElementById('options');
        moduleList?.addEventListener('click', function (event: MouseEvent) {
            const target = (event.target as HTMLElement).closest('.item');
            if (target) {
                document.dispatchEvent(
                    new CustomEvent('c3-event', {
                        detail: {
                            renderComponent: target.getAttribute('data-id'),
                        },
                        bubbles: true,
                        composed: true,
                    })
                );

                MoveToNextWindow();
            }
        });
    }

    connectedCallback() {
        this.render();
    }
}

customElements.define('c2-layout', C2Layout);
