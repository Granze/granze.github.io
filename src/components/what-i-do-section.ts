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

      .section-intro {
        max-width: 700px;
        margin-bottom: var(--spacing-xl);
      }

      .intro-text {
        font-size: 1.125rem;
        color: var(--color-slate);
      }

      .activities-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
        gap: var(--spacing-lg);
      }

      .activity-item {
        position: relative;
        padding-left: var(--spacing-lg);
      }

      .activity-item::before {
        content: '';
        position: absolute;
        left: 0;
        top: 0;
        width: 4px;
        height: 100%;
        background: var(--color-teal);
      }

      .activity-title {
        font-family: var(--font-heading);
        font-size: 1.125rem;
        font-weight: 600;
        color: var(--color-dark-gray);
        margin-bottom: var(--spacing-xs);
      }

      .activity-desc {
        font-size: 0.9375rem;
        color: var(--color-slate);
        line-height: 1.7;
      }

      @media (max-width: 768px) {
        .activities-grid {
          grid-template-columns: 1fr;
        }
      }
    `,
  ];

  render() {
    return html`
      <section class="section" id="what-i-do">
        <div class="container">
          <h2 class="section-title">What I Do Now</h2>

          <div class="section-intro">
            <p class="intro-text">
              As Head of Career Success at <a href="https://boolean.careers" target="_blank">Boolean</a>, I focus on multiple
              dimensions of professional development. My approach combines deep
              technical knowledge with a genuine passion for community building.
            </p>
          </div>

          <div class="activities-grid">
            <div class="activity-item">
              <h3 class="activity-title">Strategic Partnerships</h3>
              <p class="activity-desc">
                I develop and manage relationships with leading tech companies
                to create opportunities for our students.
              </p>
            </div>

            <div class="activity-item">
              <h3 class="activity-title">Career Services Design</h3>
              <p class="activity-desc">
                I oversee and design comprehensive learning and career service
                paths tailored to individual needs.
              </p>
            </div>

            <div class="activity-item">
              <h3 class="activity-title">Career Coaching</h3>
              <p class="activity-desc">
                I provide expert guidance to help students navigate their career
                journeys with confidence.
              </p>
            </div>

            <div class="activity-item">
              <h3 class="activity-title">Content Creation</h3>
              <p class="activity-desc">
                I lead engaging content initiatives, including video podcasts
                and YouTube videos that inspire and educate.
              </p>
            </div>

            <div class="activity-item">
              <h3 class="activity-title">Industry Engagement</h3>
              <p class="activity-desc">
                I actively participate in tech events and conferences, staying
                connected with the broader community.
              </p>
            </div>

            <div class="activity-item">
              <h3 class="activity-title">Public Speaking</h3>
              <p class="activity-desc">
                With more than 100 events under my belt, I'm a seasoned public speaker who loves sharing my knowledge and experience with others.
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
    'what-i-do-section': WhatIDoSection;
  }
}
