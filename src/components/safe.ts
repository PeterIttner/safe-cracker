import { css, html, LitElement } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import "./display";
import "./panel";
import "./treasure";
import "./trigger";

@customElement('x-safe')
export class Safe extends LitElement {
    static styles = css`
       .safe-container {
           display:flex;
           justify-content: space-evenly;
           flex-direction: column;
           align-items: center;
       }
       .keys {
           display: flex;
       }
    `;

    @property()
    correctValue = "111234";

    @property({ type: Boolean })
    isOpen = false

    @state()
    private _currentValue = "";

    @state()
    private _currentValues: string[] = [];

    onPressed = (e: CustomEvent<string>) => {
        const num = e.detail;

        this._currentValues.push(num);
        if (this._currentValues.length <= 6) {
            this._currentValue = this._currentValues.join("");
        } else {
            this._currentValues = [];
            this._currentValue = "";
        }

    }

    onTrigger = (e: CustomEvent<boolean>) => {
        if (this.isOpen === false && this._currentValue === this.correctValue) {
            this.isOpen = true;
        } else if (this.isOpen === true) {
            this.isOpen = false;
            this._currentValue = "";
            this._currentValues = [];
        }
    }

    render() {
        return html`
        <div class="safe-container">
            ${this.isOpen
                ? html`
                    <div class="keys">
                        <x-treasure></x-treasure>
                        <x-trigger @onTrigger="${this.onTrigger}" ?isOpen="${this.isOpen}"></x-trigger>
                    </div>`
                : html`
                    <x-display currentValue="${this._currentValue}"></x-display>
                    <div class="keys">
                        <x-panel class="panel" @onPressed="${this.onPressed}"></x-panel>
                        <x-trigger class="trigger" @onTrigger="${this.onTrigger}" ?isOpen="${this.isOpen}"></x-trigger>
                    </div>`

            }
        </div>`;
    }
}