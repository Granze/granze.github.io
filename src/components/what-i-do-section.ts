import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js';
import { sharedStyles } from '../styles/shared.js';

@customElement('what-i-do-section')
export class WhatIDoSection extends LitElement {
  static styles = [
    sharedStyles,
    css`
      :host {
        display: block;
        background: white;
        position: relative;
        overflow: hidden;
      }

      /* Shared role block base */
      .role-block {
        margin-bottom: var(--spacing-xl);
      }

      .role-label {
        font-family: var(--font-body);
        font-size: 0.75rem;
        font-weight: 600;
        letter-spacing: 0.08em;
        text-transform: uppercase;
        color: var(--color-teal);
        margin-bottom: var(--spacing-xs);
      }

      .role-title {
        font-family: var(--font-heading);
        font-size: clamp(1.25rem, 2vw, 1.5rem);
        font-weight: 600;
        color: var(--color-dark-gray);
        margin-bottom: var(--spacing-sm);
        line-height: 1.3;
      }

      .role-title a {
        color: var(--color-teal);
        text-decoration: none;
        transition: color 0.2s ease;
      }

      .role-title a:hover {
        color: var(--color-dark-gray);
      }

      .role-desc {
        font-family: var(--font-body);
        font-size: 1rem;
        color: var(--color-slate);
        line-height: 1.7;
        max-width: 680px;
      }

    `,
  ];

  render() {
    return html`
      <section class="section" id="what-i-do">
        <div class="container">
          <h2 class="section-title">What I Do Now</h2>

          <div class="role-block">
            <p class="role-label">Co-founder & CEO</p>
            <h3 class="role-title">
              <a href="https://www.faustplatform.com/" target="_blank" rel="noopener">Faust S.r.l.</a>
            </h3>
            <p class="role-desc">
              Faust is an AI-powered platform that integrates the entire editorial workflow, from manuscript evaluation and assisted editing to marketing material generation and contract management. We help publishing houses streamline their processes so they can focus on what truly matters: discovering and nurturing great stories.
            </p>
          </div>


        </div>
      </section>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'what-i-do-section': WhatIDoSection;
  }
}
