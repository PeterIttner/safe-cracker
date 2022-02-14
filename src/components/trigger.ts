import { css, html, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';

@customElement('x-trigger')
export class Trigger extends LitElement {
    static styles = css`
        .trigger-container {
            border: 1rem solid black;
            box-shadow: gray;
            background-color: lightgreen;
            display: flex;
            align-items: center;
            justify-content: center;
            border-radius: 0%;
            padding: 2rem;
            height: 60%;
            width:100%;
        }
        .trigger-container:hover,.key-container:focus,.key-container:active {
            background-color: lime;
        }
        .trigger {
            font-size: 5rem;
            font-family: Arial, Helvetica, sans-serif;
            font-weight: bolder;
        }
    `;

    @property({ type: Boolean })
    isOpen = false

    onClick = () => {
        this.dispatchEvent(new CustomEvent("onTrigger", { detail: this.isOpen }));
    }

    render() {
        return html`
        <link href="assets/fontawesome/css/all.css" rel="stylesheet">
        <div class="trigger-container" @click="${() => this.onClick()}">
            <div class="trigger">
                ${this.isOpen === true
                ? html`<i class="fa-solid fa-repeat"></i>`
                : html`<i class="fa-solid fa-turn-down fa-rotate-90"></i>`}
            </div>
        </div>`;
    }
}