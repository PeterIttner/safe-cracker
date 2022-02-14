import { html, LitElement } from 'lit';
import { customElement } from 'lit/decorators.js';

@customElement('x-treasure')
export class Treasure extends LitElement {


    render() {
        return html`
        <div class="treasure-container">
            <img width="600" height="350" src="assets/treasure.svg" alt="Schatzkiste">
        </div>`;
    }
}