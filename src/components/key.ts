import { css, html, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';

@customElement('x-key')
export class Key extends LitElement {
    static styles = css`
        .key-container {
            border: 1rem solid black;
            width: 6rem;
            height: 6rem;
            border-radius: 6rem;
            box-shadow: gray;
            background-color: darkred;
            color:white;
            display: flex;
            align-items: center;
            justify-content: center;
            margin: 1rem;
        }
        .key-container:hover,.key-container:focus,.key-container:active {
            background-color: red;
        }
        .key {
            font-size: 4rem;
            font-family: Arial, Helvetica, sans-serif;
            font-weight: bolder;
            margin: 1rem;
        }
    `;

    @property()
    number = "0"

    onPressed = (number: string) => {
        this.dispatchEvent(new CustomEvent("onPressed", { detail: number }));
    }

    render() {
        return html`
        <div class="key-container" @click="${() => this.onPressed(this.number)}">
            <div class="key">
                ${this.number}
            </div>
        </div>`;
    }
}