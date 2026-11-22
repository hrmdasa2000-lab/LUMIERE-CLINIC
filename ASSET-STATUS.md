# Asset status — Phase 1

- Font: stylesheet now targets the user's existing `assets/fonts/IRANSansMobile.*` files (WOFF2, WOFF, TTF, EOT). Preserve these files in GitHub.
- Images: loaded from Unsplash CDN; no local image uploads are required.
- Responsive image delivery: 480w, 800w, and 1200w `srcset` candidates; browser chooses based on viewport.
- Hero image: eager/high priority. Remaining content images: lazy-loaded.
- Real clinic/staff claims: none intended; doctors and testimonials are explicitly marked as illustrative demo content.
- Backend and booking: not implemented; consultation CTA only shows a demo message.
