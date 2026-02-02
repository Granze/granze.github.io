import { LitElement, html, css } from 'lit';

import { customElement } from 'lit/decorators.js';
import { sharedStyles } from '../styles/shared.js';

@customElement('community-section')
export class CommunitySection extends LitElement {
  static styles = [
    sharedStyles,
    css`
      :host {
        display: block;
        background: white;
        position: relative;
        overflow: hidden;
      }

      .intro-text {
        font-size: 1.125rem;
        color: var(--color-slate);
        margin-bottom: var(--spacing-xl);
        max-width: 800px;
      }

      .community-grid {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: var(--spacing-md);
      }

      .community-item {
        display: flex;
        flex-direction: column;
        padding: var(--spacing-lg);
        border: 1px solid var(--color-medium-gray);
        transition: transform 0.2s ease, box-shadow 0.2s ease;
        background: white;
      }

      .community-item:hover {
        transform: translateY(-2px);
        box-shadow: 4px 4px 0px var(--color-light-gray);
      }

      .community-header {
        display: flex;
        align-items: baseline;
        justify-content: space-between;
        margin-bottom: var(--spacing-sm);
        flex-wrap: wrap;
        gap: var(--spacing-xs);
      }

      .community-info {
        display: flex;
        flex-direction: column;
        gap: 4px;
      }

      .community-info h3 {
        font-family: var(--font-heading);
        font-size: 1.5rem;
        font-weight: 700;
        color: var(--color-dark-gray);
        margin: 0;
        line-height: 1.1;
      }

      .website-link {
        font-size: 0.75rem;
        font-weight: 600;
        text-transform: uppercase;
        letter-spacing: 0.05em;
        color: var(--color-teal);
        text-decoration: none;
        display: inline-flex;
        align-items: center;
        gap: 4px;
        align-self: flex-end; /* Align to right */
        margin-top: auto;     /* Push to bottom */
        padding-top: var(--spacing-sm);
      }

      .website-link:hover {
        text-decoration: underline;
        color: var(--color-dark-gray);
      }

      .community-years {
        font-family: var(--font-body);
        font-size: 0.75rem;
        text-transform: uppercase;
        letter-spacing: 0.05em;
        color: var(--color-slate);
        font-weight: 600;
        white-space: nowrap;
        opacity: 0.8;
      }

      .community-desc {
        font-size: 0.9375rem;
        color: var(--color-slate);
        line-height: 1.5;
        margin-bottom: var(--spacing-sm); /* Add space before potential link */
      }

      @media (max-width: 768px) {
        .community-grid {
          grid-template-columns: 1fr;
        }
      }
    `,
  ];

  render() {
    return html`
      <section class="section" id="community">
        <div class="container">
          <h2 class="section-title">Community Leadership</h2>

          <p class="intro-text">
            I'm deeply committed to building and nurturing tech communities. I
            believe in the power of bringing people together, whether through
            in-person meetups, online communities, or international conferences.
          </p>

          <div class="community-grid">
            
            <!-- Item 1 -->
            <div class="community-item">
              <div class="community-header">
                <div class="community-info">
                  <h3>Milano JS</h3>
                </div>
                <span class="community-years">Founder • 2013 - Present</span>
              </div>
              <p class="community-desc">
                One of Italy's most influential JavaScript communities,
                bringing developers together for knowledge sharing and
                networking.
              </p>
              <a href="https://milanojs.com/" target="_blank" rel="noopener" class="website-link">
                milanojs.com
                <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <line x1="7" y1="17" x2="17" y2="7"></line>
                  <polyline points="7 7 17 7 17 17"></polyline>
                </svg>
              </a>
            </div>

            <!-- Item 2 -->
            <div class="community-item">
              <div class="community-header">
                <div class="community-info">
                  <h3>Italia JS</h3>
                </div>
                <span class="community-years">Founder • 2016 - Present</span>
              </div>
              <p class="community-desc">
                Italian JavaScript online community, bringing together developers
                from all over Italy on Discord.
              </p>
               <a href="https://italia-js.org/" target="_blank" rel="noopener" class="website-link">
                italia-js.org
                <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <line x1="7" y1="17" x2="17" y2="7"></line>
                  <polyline points="7 7 17 7 17 17"></polyline>
                </svg>
              </a>
            </div>

            <!-- Item 3 -->
            <div class="community-item">
              <div class="community-header">
                <div class="community-info">
                  <h3>JS Girls</h3>
                </div>
                <span class="community-years">Founder</span>
              </div>
              <p class="community-desc">
                An international initiative aimed at involving more women in
                programming and tech. Events organized in Milan, Rome and London.
              </p>
            </div>

            <!-- Item 4 (Former Roles) -->
            <div class="community-item">
               <div class="community-header">
                <div class="community-info">
                  <h3>Former Roles</h3>
                </div>
              </div>
              <div style="display: flex; flex-direction: column; gap: 8px; margin-top: 1rem;">
                <div style="font-size: 0.9375rem; color: var(--color-slate);">
                  • Co-organizer of Codebar Amsterdam
                </div>
                <div style="font-size: 0.9375rem; color: var(--color-slate);">
                  • Program Committee Member at Codemotion and JS Day
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'community-section': CommunitySection;
  }
}
