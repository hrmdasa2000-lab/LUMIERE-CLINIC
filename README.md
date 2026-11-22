# LUMIÈRE Clinic — Phase 5 (Image CDN update)

A Persian/English, RTL/LTR, responsive portfolio concept for a skin, hair and beauty clinic.

## What's included
- Responsive one-page clinic concept with service, gallery, about, specialist, FAQ and demo consultation sections.
- A bilingual educational journal section with sample articles and an accessible reading dialog.
- Article content is illustrative general information, not diagnosis or personal medical advice.
- Site photography uses image URLs from StockCake Persian-language pages; image files are remote and are not bundled locally.
- The app includes a built-in SVG fallback so broken image icons are not shown; photographic assets still require the visitor network to reach `images.stockcake.com`.
- React 18 UMD + ReactDOM + Babel Standalone are loaded from unpkg. No build step, npm, or Node.js is required for GitHub Pages.
- `404.html`, `robots.txt`, `sitemap.xml`, and favicon are included.

## Publish
Upload the *contents* of this ZIP to the root of the `main` branch of the existing GitHub repository and commit. Keep the existing `assets/fonts` folder and its four `IRANSansMobile` font files; they are intentionally not bundled here.

## Demo limitations
The consultation form does not send or store information. Specialist profiles, testimonials, contact details, and clinic information are placeholders. Replace them with verified client-approved content before any real business use.

## Image and CDN note
The website uses StockCake-hosted image URLs selected from Persian-language source pages. If `images.stockcake.com` is blocked or unavailable on a visitor network, remote photos may not load. The images are AI-generated illustrative assets, not photographs of real clinic staff or facilities. For guaranteed availability, the image files must be downloaded and hosted inside the repository.


See `ASSET-SOURCES.md` for image sources and attribution notes.
