import { html, css, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';

import './my-element.ts';
import { IPerson } from './peepType';

/**
 * An example element.
 *
 * @slot - This element has a slot
 * @csspart button - The button
 */
@customElement('parent-element')
export class ParentMyElement extends LitElement {
  /**
   * The name to say "Hello" to.
   */

  person: IPerson = {
    age: 29,
    title: 'Mr',
  };

  data = ['thulani', 'sihle'];

  render() {
    return html`
     <h1> Parent</h1>
     <my-element 
      name='good'
      count='10'
      .person='${this.person}'
      .data='${this.data}'></my-element>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'parent-element': ParentMyElement;
  }
}
