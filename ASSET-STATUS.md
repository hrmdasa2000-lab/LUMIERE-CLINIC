# Asset and release status

- Font family path: `assets/fonts/IRANSansMobile.*` (WOFF2, WOFF, TTF and EOT are expected to remain in the repository).
- Images: loaded from Unsplash CDN; no image binaries are required in the repository.
- Hero image: responsive `srcSet`, eager/high priority.
- Other images: responsive `srcSet`, lazy-loaded.
- Clinic, staff, testimonials and contact details: illustrative portfolio-demo content only.
- Consultation form: client-side demo only; no network submission and no persistence.
- Phase 3: gallery lightbox, keyboard navigation, FAQ ARIA states, mobile-menu ARIA state, phone-field validation, inline form confirmation, reduced-motion and focus-visible styles.

## Release checks performed in the working copy
- JSX/JavaScript transpilation syntax check passed using TypeScript's JSX transpiler.
- CSS opening/closing brace counts match.
- `index.html` contains the React root and `js/app.jsx` entry point.
- Live GitHub Pages browser verification remains a post-upload check.
