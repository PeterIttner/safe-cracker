import { css, html, LitElement } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';

@customElement('x-display')
export class Display extends LitElement {
    static styles = css`
       .display-container {
           border: 1rem solid darkgray;
           color: lime;
           background-color: black;
           font-family: 'Courier New', Courier, monospace;
           font-weight: bolder;
           font-size: 6rem;
           padding:5rem 5rem;
           margin: 5rem;
       }
    `;

    @property()
    currentValue = ""

    @state()
    private _numberParts: string[] = [];

    renderCurrentValue = () => {
        const parts = this.currentValue.split("");
        const partsFilled = parts.concat(["_", "_", "_", "_", "_", "_"])
        this._numberParts = partsFilled.slice(0, 6);
        return this._numberParts.join(" ");
    }

    render() {
        return html`
        <div class="display-container">
            <div class="display">
                ${this.renderCurrentValue()}
            </div>
        </div>`;
    }
}