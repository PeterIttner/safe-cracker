import { css, html, LitElement } from 'lit';
import { customElement } from 'lit/decorators.js';
import "./key";

@customElement('x-panel')
export class Panel extends LitElement {
    static styles = css`
       .panel-container {
           display:block;
       }
       .panel-row {
           display:flex;
           flex-direction: row;
           justify-content: space-evenly;
           flex-wrap: nowrap;
       }
    `;

    onPressed = (e: CustomEvent) => {
        this.dispatchEvent(new CustomEvent("onPressed", { detail: e.detail }));
    }

    render() {
        return html`
        <div class="panel-container">
            <div class="panel-row">
                <x-key @onPressed="${this.onPressed}" number="1"></x-key>
                <x-key @onPressed="${this.onPressed}" number="2"></x-key>
                <x-key @onPressed="${this.onPressed}" number="3"></x-key>
            </div>
            <div class="panel-row">
                <x-key @onPressed="${this.onPressed}" number="4"></x-key>
                <x-key @onPressed="${this.onPressed}" number="5"></x-key>
                <x-key @onPressed="${this.onPressed}" number="6"></x-key>
            </div>
            <div class="panel-row">
                <x-key @onPressed="${this.onPressed}" number="7"></x-key>
                <x-key @onPressed="${this.onPressed}" number="8"></x-key>
                <x-key @onPressed="${this.onPressed}" number="9"></x-key>
            </div>
            <div class="panel-row">
                <x-key @onPressed="${this.onPressed}" number="0"></x-key>
            </div>
        </div>`;
    }
}