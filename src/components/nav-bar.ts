import { LitElement, html, css } from 'lit';
import { customElement, state } from 'lit/decorators.js';
import { sharedStyles } from '../styles/shared.js';

@customElement('nav-bar')
export class NavBar extends LitElement {
  static styles = [
    sharedStyles,
    css`
      :host {
        display: block;
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        z-index: 100;
        padding: var(--spacing-sm) 0;
        background: rgba(220, 220, 221, 0.9);
        backdrop-filter: blur(10px);
        transition: background 0.3s ease;
      }

      .nav-container {
        display: flex;
        justify-content: space-between;
        align-items: center;
      }

      .logo {
        font-family: var(--font-heading);
        font-weight: 700;
        font-size: 1.2rem;
        color: var(--color-dark-gray);
        text-decoration: none;
        display: none; /* Hidden by default, maybe show on mobile? */
      }
      
      @media (max-width: 600px) {
        .logo {
            display: block;
        }
      }

      .nav-content {
        display: flex;
        justify-content: flex-end; /* Align right on desktop if we had a logo, or just keep left */
        gap: var(--spacing-lg);
      }

      .nav-link {
        position: relative;
        font-family: var(--font-body);
        font-size: 0.85rem;
        font-weight: 500;
        color: var(--color-dark-gray);
        text-transform: uppercase;
        letter-spacing: 1px;
        text-decoration: none;
        padding-top: 0.5rem;
        transition: color 0.2s ease;
      }

      .nav-link::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 2px;
        background-color: var(--color-teal);
        transform: scaleX(0);
        transform-origin: left;
        transition: transform 0.3s ease;
      }

      .nav-link:hover {
        color: var(--color-teal);
      }

      .nav-link:hover::before,
      .nav-link.active::before {
        transform: scaleX(1);
      }
      
      .nav-link.active {
        color: var(--color-teal);
      }

      /* Mobile Menu Toggle */
      .nav-toggle {
        display: none;
        background: none;
        border: none;
        cursor: pointer;
        padding: 0;
        z-index: 101;
      }

      .hamburger {
        width: 24px;
        height: 20px;
        position: relative;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
      }

      .hamburger span {
        display: block;
        width: 100%;
        height: 2px;
        background-color: var(--color-dark-gray);
        transition: all 0.3s ease;
      }

      /* Mobile Styles */
      @media (max-width: 600px) {
        .nav-toggle {
          display: block;
        }

        .nav-content {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100vh;
          background: rgba(220, 220, 221, 0.98);
          backdrop-filter: blur(15px);
          flex-direction: column;
          justify-content: center;
          align-items: center;
          gap: var(--spacing-xl);
          transform: translateX(100%);
          transition: transform 0.3s cubic-bezier(0.4, 0.0, 0.2, 1);
          padding: 0;
        }

        .nav-content.open {
          transform: translateX(0);
        }
        
        /* Hamburger Animation */
        .nav-toggle.open .hamburger span:nth-child(1) {
          transform: translateY(9px) rotate(45deg);
        }
        
        .nav-toggle.open .hamburger span:nth-child(2) {
          opacity: 0;
        }
        
        .nav-toggle.open .hamburger span:nth-child(3) {
          transform: translateY(-9px) rotate(-45deg);
        }

        .nav-link {
          font-size: 1.5rem;
          padding: 0;
        }
      }
    `,
  ];
  @state()
  private activeSection = '';

  @state()
  private isMenuOpen = false;

  private observer: IntersectionObserver | null = null;

  firstUpdated() {
    const options = {
      root: null,
      rootMargin: '-50% 0px -50% 0px', // Active when element is in middle 50% of screen
      threshold: 0
    };

    this.observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          this.activeSection = entry.target.id;
        }
      });
    }, options);

    // Observe all sections that have corresponding links
    const links = this.shadowRoot?.querySelectorAll('a[href^="#"]');
    links?.forEach((link) => {
      const id = link.getAttribute('href')?.substring(1);
      // Look for elements in the main document (light DOM) since they are outside nav-bar shadow DOM
      // We need to look in the main document or the parent granze-app shadow DOM
      // Since nav-bar is in granze-app, we can look at the host's root node
      const root = this.getRootNode() as ShadowRoot | Document;
      const section = root.getElementById(id || '');
      if (section) {
        this.observer?.observe(section);
      }
    });
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    this.observer?.disconnect();
  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
    // Prevent body scrolling when menu is open
    if (this.isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }

  scrollToSection(e: Event) {
    e.preventDefault();

    // Close menu if open
    if (this.isMenuOpen) {
      this.toggleMenu();
    }

    const target = e.target as HTMLAnchorElement;
    const id = target.getAttribute('href')?.substring(1);
    if (!id) return;

    const root = this.getRootNode() as ShadowRoot;
    const element = root.getElementById(id);
    if (!element) return;

    const headerOffset = 60; // Approximate height of the fixed navbar
    const elementPosition = element.getBoundingClientRect().top;
    const startPosition = window.scrollY;
    // We want the final position to be elementPosition + startPosition - headerOffset
    // But elementPosition is relative to viewport.
    // Target scrollY = startPosition + elementPosition - headerOffset
    const targetPosition = startPosition + elementPosition - headerOffset;

    window.scrollTo({
      top: targetPosition,
      behavior: 'smooth'
    });

    // Update URL hash manually if needed, or let the browser handle it?
    // Browser doesn't verify URL updates on scrollTo.
    // We can update history but avoid the default jump behavior which we prevented.
    history.pushState(null, '', `#${id}`);
  }

  render() {
    return html`
      <div class="container nav-container">
        <a href="#" class="logo" @click="${(e: Event) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}">G</a>
        
        <button class="nav-toggle ${this.isMenuOpen ? 'open' : ''}" @click="${this.toggleMenu}" aria-label="Toggle menu">
          <div class="hamburger">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </button>

        <div class="nav-content ${this.isMenuOpen ? 'open' : ''}">
          <a href="#about" class="nav-link ${this.activeSection === 'about' ? 'active' : ''}" @click="${this.scrollToSection}">About</a>
          <a href="#what-i-do" class="nav-link ${this.activeSection === 'what-i-do' ? 'active' : ''}" @click="${this.scrollToSection}">What I Do</a>
          <a href="#recognition" class="nav-link ${this.activeSection === 'recognition' ? 'active' : ''}" @click="${this.scrollToSection}">Recognition</a>
          <a href="#community" class="nav-link ${this.activeSection === 'community' ? 'active' : ''}" @click="${this.scrollToSection}">Community</a>
          <a href="#hobbies" class="nav-link ${this.activeSection === 'hobbies' ? 'active' : ''}" @click="${this.scrollToSection}">Hobbies</a>
          <a href="#contact" class="nav-link ${this.activeSection === 'contact' ? 'active' : ''}" @click="${this.scrollToSection}">Contact</a>
        </div>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'nav-bar': NavBar;
  }
}
