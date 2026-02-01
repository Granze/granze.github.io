
import { LitElement, PropertyValues } from 'lit';

type Constructor<T = {}> = new (...args: any[]) => T;

export const ScrollAnimationMixin = <T extends Constructor<LitElement>>(superClass: T) => {
    class ScrollAnimation extends superClass {
        protected _observer: IntersectionObserver | undefined;

        protected firstUpdated(_changedProperties: PropertyValues) {
            super.firstUpdated(_changedProperties);
            this._initScrollObserver();
        }

        protected _initScrollObserver() {
            const options = {
                root: null,
                rootMargin: '0px',
                threshold: 0.1
            };

            this._observer = new IntersectionObserver((entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('visible');
                        // Stop observing once visible to prevent re-triggering (optional but usually desired for entry anims)
                        this._observer?.unobserve(entry.target);
                    }
                });
            }, options);

            // Select elements to animate
            const animateElements = this.shadowRoot?.querySelectorAll('.animate-on-scroll');
            animateElements?.forEach((el) => {
                this._observer?.observe(el);
            });

            // Also observe the host itself if desired, or specific sections
            const sections = this.shadowRoot?.querySelectorAll('section');
            sections?.forEach((section) => {
                this._observer?.observe(section);
                section.classList.add('animate-on-scroll'); // Ensure class is added if targeting section directly
            });
        }

        disconnectedCallback() {
            super.disconnectedCallback();
            this._observer?.disconnect();
        }
    }
    return ScrollAnimation as T;
};
