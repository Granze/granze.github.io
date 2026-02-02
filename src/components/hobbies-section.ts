import { LitElement, html, css } from 'lit';

import { customElement } from 'lit/decorators.js';
import { sharedStyles } from '../styles/shared.js';

@customElement('hobbies-section')
export class HobbiesSection extends LitElement {
  static styles = [
    sharedStyles,
    css`
      :host {
        display: block;
        background: var(--color-light-gray); /* Keeping light gray backdrop */
        position: relative;
        overflow: hidden;
        padding-bottom: var(--spacing-2xl);
      }

      .hobbies-grid {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        border-top: 1px solid var(--color-medium-gray);
        border-bottom: 1px solid var(--color-medium-gray);
        background: white;
      }

      .hobby-item {
        display: flex;
        flex-direction: column;
        padding: var(--spacing-xl) var(--spacing-lg);
        border-right: 1px solid var(--color-medium-gray);
        transition: background-color 0.2s ease;
      }

      .hobby-item:last-child {
        border-right: none;
      }

      .hobby-item:hover {
        background-color: rgba(0, 0, 0, 0.02);
      }

      .hobby-number {
        font-family: var(--font-body);
        font-size: 0.75rem;
        font-weight: 600;
        color: var(--color-teal);
        opacity: 0.8;
        margin-bottom: var(--spacing-md);
        display: block;
      }

      .hobby-item h3 {
        font-family: var(--font-heading);
        font-size: 1.5rem;
        font-weight: 700;
        color: var(--color-dark-gray);
        margin-bottom: var(--spacing-md);
        line-height: 1.2;
        min-height: 3.6rem; /* Align descriptions */
      }

      .hobby-item p {
        font-family: var(--font-body);
        font-size: 0.9375rem;
        color: var(--color-slate);
        line-height: 1.6;
        margin: 0;
      }

      @media (max-width: 900px) {
        .hobbies-grid {
          grid-template-columns: 1fr;
          border-bottom: none;
        }

        .hobby-item {
          border-right: none;
          border-bottom: 1px solid var(--color-medium-gray);
          padding: var(--spacing-lg);
        }

        .hobby-item:last-child {
          border-bottom: 1px solid var(--color-medium-gray); /* Close the grid on mobile */
        }
        
        .hobby-item h3 {
            min-height: auto;
        }
      }
    `,
  ];

  render() {
    return html`
      <section class="section" id="hobbies">
        <div class="container">
          <h2 class="section-title">Hobbies & Interests</h2>

          <div class="hobbies-grid">
            
            <div class="hobby-item">
              <span class="hobby-number">01</span>
              <h3>Rock Climbing</h3>
              <p>
                I started rock climbing many years ago and It has been a life-changer in terms of habits, friends and fitness. So much so I became an Italian Alpine Club (CAI) instructor, which allowed me to share my passion with others. During my years in Amsterdam I also worked as a route setter and coach for a local climbing gym.
              </p>
            </div>

            <div class="hobby-item">
              <span class="hobby-number">02</span>
              <h3>Literature & Writing</h3>
              <p>
                I'm passionate about literature, especially russian literature but I also enjoy reading contemporary fiction. I'm also a writer, I wrote some short stories, published in some literary magazines and I recently finished my first novel.
              </p>
            </div>

            <div class="hobby-item">
              <span class="hobby-number">03</span>
              <h3>Music Production</h3>
              <p>
                I enjoy playing guitar, programming drums and composing. I have my own home studio where I can record and produce music. Attending live music events is a big part of my life.
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
    'hobbies-section': HobbiesSection;
  }
}
