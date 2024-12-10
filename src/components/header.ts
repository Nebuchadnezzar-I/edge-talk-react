import { MoveToPrevWindow } from "../aux/ui/swipe";

class Header extends HTMLElement {
    constructor() {
        super();

        const shadow =
            this.attachShadow({ mode: 'open' });

        shadow.innerHTML = `
            <style>
                .n-list {
                    display: flex;
                    align-items: center;
                    gap: 1rem;
                }
                .back {
                    height: 2rem;
                    width: 4rem;
                    display: none;
                    align-items: center;
                    justify-content: center;
                    border-radius: 0.25rem;
                    cursor: pointer;

                    &:hover {
                        background: var(--sec);
                    }
                }
                .back.visible {
                    display: flex;
                }
            </style>
            <div class="n-list" id="select">
                <div class="back" id="back-button">Back</div>
                <h3 class="logo">EdgeTalk</h3>
                <div class="menu"></div>
            </div>
        `;

        const backButton = shadow.getElementById("back-button");

        backButton?.addEventListener("click", function() {
            backButton.style.display = "none";
            MoveToPrevWindow();
        })

        document.addEventListener("move-from-first-to-second-window", function (_event) {
            if (backButton) backButton.style.display = "flex";
        });
    }

    connectedCallback() {
        console.log("Header Loaded");
    }
}

customElements.define('header-component', Header);
