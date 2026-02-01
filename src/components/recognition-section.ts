import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js';
import { sharedStyles } from '../styles/shared.js';

@customElement('recognition-section')
export class RecognitionSection extends LitElement {
  static styles = [
    sharedStyles,
    css`
      :host {
        display: block;
        background: var(--color-slate);
        color: white;
        position: relative;
        overflow: hidden;
      }

      .section-title {
        color: white;
      }

      .section-title::after {
        background-color: var(--color-teal);
      }

      .recognition-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
        gap: var(--spacing-lg);
      }

      .recognition-item {
        position: relative;
        padding: var(--spacing-md);
        background: rgba(255, 255, 255, 0.05);
        border-left: 4px solid var(--color-teal);
      }

      .recognition-title {
        font-family: var(--font-heading);
        font-size: 1.125rem;
        font-weight: 600;
        color: white;
        margin-bottom: var(--spacing-xs);
      }

      .recognition-year {
        font-size: 0.8125rem;
        color: var(--color-light-gray);
        font-weight: 500;
        margin-bottom: var(--spacing-xs);
      }

      .recognition-desc {
        font-size: 0.9375rem;
        color: var(--color-medium-gray);
        line-height: 1.6;
      }`,
  ];

  render() {
    return html`
      <section class="section">
        <div class="container">
          <h2 class="section-title">Recognition & Achievements</h2>

          <div class="recognition-grid">
            <div class="recognition-item">
              <h3 class="recognition-title">Google Developers Expert</h3>
              <p class="recognition-year">2015 - 2022</p>
              <p class="recognition-desc">
                Recognized as an expert for web technologies, contributing to
                the global developer community.
              </p>
            </div>

            <div class="recognition-item">
              <h3 class="recognition-title">Microsoft TAG Team</h3>
              <p class="recognition-year">2017 - 2018</p>
              <p class="recognition-desc">
                Selected among 150 open source and community experts worldwide.
              </p>
            </div>

            <div class="recognition-item">
              <h3 class="recognition-title">Microsoft MVP</h3>
              <p class="recognition-year">2018 - 2022</p>
              <p class="recognition-desc">
                Recognized for outstanding contributions to technical
                communities.
              </p>
            </div>

          </div>
        </div>
      </section>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'recognition-section': RecognitionSection;
  }
}
