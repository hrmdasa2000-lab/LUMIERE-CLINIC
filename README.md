# LUMIÈRE Clinic — Portfolio Demo

A responsive Persian/English clinic website concept built with React 18 UMD, ReactDOM, Babel Standalone and plain CSS. No local build, npm, Node.js or backend is required to publish it on GitHub Pages.

## Included sections and interactions
- Persian RTL / English LTR language switch
- Responsive navigation with accessible expanded state
- Hero, trust strip, services, clinic introduction, illustrative specialist profiles and sample testimonials
- Unsplash image CDN with responsive `srcSet`, lazy loading for below-the-fold images and high priority for the hero image
- Gallery lightbox with previous/next controls, Escape to close and arrow-key navigation
- Client-side demo consultation form; no information is transmitted or stored
- FAQ accordion with accessible expanded state
- Reduced-motion support and keyboard focus styles

## SEO and publishing
- Canonical URL, Persian metadata, Open Graph and Twitter metadata
- Website JSON-LD, `robots.txt`, `sitemap.xml`, SVG favicon and custom `404.html`
- See `SEO-CHECKLIST.md` for post-publish verification

## Font
Keep the existing font files in `assets/fonts/` with these names:
- `IRANSansMobile.woff2`
- `IRANSansMobile.woff`
- `IRANSansMobile.ttf`
- `IRANSansMobile.eot`

Font binaries are intentionally not included in this update ZIP, so existing files are not overwritten.

## Images and demo content
Images load from `images.unsplash.com`; visitors need internet access. Clinic identity, specialist profiles, testimonials, address and phone details are illustrative placeholders. The form is a front-end demonstration only, not a real appointment system.

## GitHub Pages
Keep `index.html` at the repository root and publish from the `main` branch / root folder. No build command is required.
