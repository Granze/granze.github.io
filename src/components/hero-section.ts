import { LitElement, html, css } from 'lit';
import { ScrollAnimationMixin } from '../mixins/scroll-animation-mixin.js';
import { customElement } from 'lit/decorators.js';
import { sharedStyles } from '../styles/shared.js';

@customElement('hero-section')
export class HeroSection extends ScrollAnimationMixin(LitElement) {
  static styles = [
    sharedStyles,
    css`
      :host {
        display: block;
      }

      .hero-grid {
        display: grid;
        grid-template-columns: 1fr max-content;
        min-height: calc(100vh - 60px);
      }

      /* Left side - text content */
      .hero-text {
        position: absolute;
        display: flex;
        flex-direction: column;
        justify-content: center;
      }

      .name {
        font-size: clamp(3.5rem, 5vw, 5.5rem);
        line-height: 1.05;
        margin-bottom: 0;
      }

      .name span {
        display: block;
      }

      .nickname {
        color: var(--color-teal);
      }

      .full-name {
        font-size: 80%;
      }

      .title {
        font-size: clamp(1rem, 2vw, 1.25rem);
        color: var(--color-slate);
        font-weight: 400;
        max-width: 400px;
      }

      .scroll-text {
        height: 1.5em;
        overflow: hidden;
        position: relative;
        margin-top: 10px;
      }
      
      .scroll-wrapper {
        display: block;
        animation: scroll-vertical 9s cubic-bezier(0.2, 0, 0.2, 1) infinite;
      }

      .scroll-wrapper span {
        display: block;
        height: 1.5em;
        line-height: 1.5em;
        white-space: nowrap;
      }

      @keyframes scroll-vertical {
        0%, 25% { transform: translateY(0); }
        33.33%, 58.33% { transform: translateY(-1.5em); }
        66.66%, 91.66% { transform: translateY(-3em); }
        100% { transform: translateY(-4.5em); }
      }

      /* Right side - portrait */
      .hero-portrait {
        display: flex;
        align-items: flex-end;
        justify-content: flex-end;
      }

      .hero-portrait img {
        display: block;
        height: auto;
        max-height: calc(100vh - 60px);
        object-fit: contain;
        object-position: right bottom;
      }

      @media (max-width: 900px) {
        .hero-grid {
          grid-template-columns: 1fr;
          min-height: auto;
        }

        .hero-text {
          position: absolute;
          left: var(--container-padding);
          right: var(--container-padding); /* Ensure it doesn't overflow right */
          top: 80px; /* Increased top margin */
          z-index: 10; /* Ensure text is above image */
        }

        .title {
          max-width: 100%;
          text-shadow: 2px 2px 0px rgba(255, 255, 255, 0.8);
        }

        .name {
          text-shadow: 2px 2px 0px rgba(255, 255, 255, 0.8);
        }

        .scroll-text {
          font-weight: bold;
          text-shadow: 2px 2px 0px rgba(255, 255, 255, 0.8);
        }


        .hero-portrait {
          order: 2;
          justify-content: center;
        }

        .hero-portrait img {
          max-height: 50vh;
          margin-left: 30%; 
          object-position: right bottom;
        }
      }

      @media (max-width: 600px) {
        .hero-portrait img {
          max-height: 40vh;
        }
      }
    `,
  ];

  render() {
    return html`
      <div class="container">
        <div class="hero-grid">
          <div class="hero-text">
            <h1 class="name">
              <span class="nickname">Granze</span>
              <span class="full-name">Maurizio<br />Mangione</span>
            </h1>
            <div class="title scroll-text">
              <div class="scroll-wrapper">
                <span>Community Professional & Career Coach</span>
                <span>Former Google Developers Expert</span>
                <span>Former Microsoft MVP</span>
                <span aria-hidden="true">Community Professional & Career Coach</span>
              </div>
            </div>
          </div>

          <div class="hero-portrait">
            <picture>
              <source srcset="/images/granze-portrait-mobile.webp" media="(max-width: 600px)" type="image/webp" width="400" height="331">
              <source srcset="/images/granze-portrait.webp" type="image/webp" width="814" height="674">
              <img src="/images/granze-portrait.png" alt="Maurizio Mangione" width="814" height="674" fetchpriority="high" style="aspect-ratio: 814/674;" />
            </picture>
          </div>
        </div>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'hero-section': HeroSection;
  }
}
