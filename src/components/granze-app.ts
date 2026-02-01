import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js';

import './nav-bar.js';
import './hero-section.js';
import './what-i-do-section.js';

import './community-section.js';
import './recognition-section.js';
import './hobbies-section.js';
import './contact-section.js';

@customElement('granze-app')
export class GranzeApp extends LitElement {
  static styles = css`
    :host {
      display: block;
      background: #dcdcdd;
    }

    main {
      display: flex;
      flex-direction: column;
      padding-top: 60px;
    }
  `;

  render() {
    return html`
      <nav-bar></nav-bar>
      <main>
        <hero-section id="about"></hero-section>
        <what-i-do-section id="what-i-do"></what-i-do-section>
        <recognition-section id="recognition"></recognition-section>
        <community-section id="community"></community-section>
        <hobbies-section id="hobbies"></hobbies-section>
        <contact-section id="contact"></contact-section>
      </main>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'granze-app': GranzeApp;
  }
}
