import { css } from 'lit';

export const sharedStyles = css`
  :host {
    --color-light-gray: #dcdcdd;
    --color-medium-gray: #c5c3c6;
    --color-dark-gray: #46494c;
    --color-slate: #4c5c68;
    --color-teal: #1985a1;

    --font-heading: 'Libre Baskerville', serif;
    --font-body: 'Inter', sans-serif;

    --spacing-xs: 0.5rem;
    --spacing-sm: 1rem;
    --spacing-md: 1.5rem;
    --spacing-lg: 2rem;
    --spacing-xl: 3rem;
    --spacing-2xl: 4rem;

    --max-width: 1200px;
    --container-padding: 1.5rem;

    display: block;
  }

  .container {
    max-width: var(--max-width);
    margin: 0 auto;
    padding: 0 var(--container-padding);
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: var(--font-heading);
    font-weight: 600;
    color: var(--color-dark-gray);
    line-height: 1.2;
  }

  h1 {
    font-size: clamp(2.5rem, 5vw, 4rem);
    font-weight: 700;
  }

  h2 {
    font-size: clamp(1.75rem, 3vw, 2.5rem);
  }

  h3 {
    font-size: clamp(1.25rem, 2vw, 1.5rem);
  }

  p {
    font-family: var(--font-body);
    color: var(--color-slate);
    line-height: 1.7;
  }

  a {
    color: var(--color-teal);
    text-decoration: none;
    transition: color 0.2s ease;
  }

  a:hover {
    color: var(--color-dark-gray);
  }

  .section {
    padding: var(--spacing-2xl) 0;
  }

  .section-title {
    margin-bottom: var(--spacing-lg);
    position: relative;
    display: inline-block;
  }

  .section-title::after {
    content: '';
    position: absolute;
    bottom: -8px;
    left: 0;
    width: 60px;
    height: 4px;
    background-color: var(--color-teal);
  }


  @media (max-width: 768px) {
    :host {
      --container-padding: 1rem;
    }

    .section {
      padding: var(--spacing-xl) 0;
    }
  }


`;
