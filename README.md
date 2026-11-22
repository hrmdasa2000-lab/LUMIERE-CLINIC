# LUMIÈRE Clinic — Phase 1

A responsive, Persian-first dermatology / skin / hair clinic portfolio homepage.

## Current phase scope
- Responsive homepage and navigation
- Brand identity and hero section
- Services preview cards
- Clinic introduction
- Specialist profile cards (explicitly illustrative)
- Sample testimonials (explicitly illustrative)
- Consultation CTA with demo-only feedback
- FAQ accordion
- Persian / English language toggle
- SEO basics and accessible page structure

## Technology
- React 18 UMD + ReactDOM loaded from CDN
- Babel Standalone CDN for JSX in this no-build demo
- Plain CSS (no Tailwind / Bootstrap)
- No Node.js, npm, package installation, build command, or backend
- GitHub Pages compatible static files

## Important limitations
1. React and Babel are loaded from public CDNs, so a network connection and CDN availability are required.
2. The site uses `IranMobileSans` globally, including the Latin brand wordmark. The project owner confirmed that `assets/fonts/IranMobileSans.woff2` is published and downloads successfully from GitHub Pages.
3. Images are currently loaded from Unsplash URLs and are not bundled locally. Network access to images.unsplash.com is required. Local image packaging and image-by-image source/license review remain outstanding. Do not describe the image requirement as fully completed until local files and an image audit are delivered.
4. The mobile navigation and FAQ accordion expose expanded/collapsed state and relationships for assistive technology.
5. All clinic, staff, contact, and testimonial content is fictional / illustrative. Do not present it as a real medical provider or real patient feedback.
6. The consultation button is a demo interaction only. It does not send or store a real appointment request.

## Publish on GitHub Pages
Upload the folder contents to a GitHub repository and enable GitHub Pages from the repository settings. No build step is required. Keep `index.html` at the published root.

## Project structure
```
LUMIERE-CLINIC/
├── index.html
├── README.md
├── css/style.css
├── js/app.jsx
└── assets/
    ├── fonts/
    ├── icons/
    └── images/
```


## Images

Site photos are served directly from the Unsplash CDN (`images.unsplash.com`). Responsive `srcSet` variants are defined in `js/app.jsx`; no image files need to be uploaded. See `assets/images/IMAGE-MANIFEST.md` for the image IDs and placements.
