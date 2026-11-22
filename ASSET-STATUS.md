# Asset status — LUMIÈRE Clinic

## Images
- All site photography is served directly from the Unsplash image CDN (`images.unsplash.com`).
- No image binaries need to be uploaded to the repository.
- Image URLs are centralized through `photo()` and responsive candidates through `photoSet()` in `js/app.jsx`.
- The browser selects an appropriate 480px, 800px, or 1200px image candidate using `srcSet` and `sizes`.
- The hero image is prioritized; other images use lazy loading where applicable and asynchronous decoding.
- The current image IDs are documented in `assets/images/IMAGE-MANIFEST.md`.

## Font
- CSS expects `assets/fonts/IranMobileSans.woff2`.
- User confirmed the GitHub Pages URL for this font downloads successfully.

## Hosting
- Static GitHub Pages deployment. No backend, local image storage, npm, or build step is required.
