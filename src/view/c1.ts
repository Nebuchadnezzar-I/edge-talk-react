import { Supabase } from '../aux/db/supabase';
import { MoveToNextWindow } from '../aux/ui/swipe';
import globalStyles from '../global.css?inline';

class C1Layout extends HTMLElement {
    constructor() {
        super();
    }

    // TODO: It would be nice to divide this into more
    // consistent way
    render(data: any) {
        const shadow = this.attachShadow({ mode: 'open' });

        // Data
        const wrapper = document.createDocumentFragment();
        for (let idx = 0; idx < data.length; idx++) {
            const n = data[idx];

            const div = document.createElement('div');
            div.classList.add('n-item');
            div.setAttribute('data-id', n.id);

            const h3 = document.createElement('h3');
            h3.append(n.name);

            const p = document.createElement('p');
            p.append('Open negotiation');

            div.appendChild(h3);
            div.appendChild(p);

            wrapper.appendChild(div);
        }

        // Style
        const style = document.createElement('style');
        style.textContent = globalStyles;
        shadow.appendChild(style);

        // Content
        const page = document.createElement('div');
        page.classList.add('c1');
        page.id = 'n-list';
        page.appendChild(wrapper);
        shadow.appendChild(page);

        // Handlers
        const negotiationOptionList = shadow.getElementById('n-list');
        negotiationOptionList?.addEventListener(
            'click',
            function (event: MouseEvent) {
                const target = (event.target as HTMLElement).closest('.n-item');
                if (target) {
                    MoveToNextWindow();
                }
            }
        );
    }

    async connectedCallback() {
        const fetch = await Supabase.from('Negotiations').select('*');
        this.render(fetch.data);
    }
}

customElements.define('c1-layout', C1Layout);
