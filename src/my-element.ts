import { html, css, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { IPerson } from './peepType';

@customElement('my-element')
export class MyElement extends LitElement {
  /**
   * The name to say "Hello" to.
   */

  @property({ type: Object })
  person: IPerson;

  @property({ type: Array })
  data: string[];

  @property()
  name = 'World';

  @property({ type: Number })
  count = 0;

  render() {
    return html`
      <h1>${this.name}!</h1>
      <h1>${this.count}!</h1>
      <h1>${this.count * 2}!</h1>
      <h1>${this.person.title}!</h1>
      <h1>${this.person.age + 1}!</h1>
      ${this.data.map((item) => html`<p>${item}</p>`)}
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'my-element': MyElement;
  }
}
