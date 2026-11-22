# LUMIÈRE Clinic — Portfolio Demo

A responsive Persian/English clinic website concept built with React 18 UMD, ReactDOM, Babel Standalone and plain CSS. No local build, npm, Node.js or backend is required to publish it on GitHub Pages.

## Included sections and interactions
- Persian RTL / English LTR language switch
- Responsive navigation with accessible expanded state
- Hero, trust strip, services, clinic introduction, illustrative specialist profiles and sample testimonials
- Unsplash image CDN with responsive `srcSet`, lazy loading for below-the-fold images and high priority for the hero image
- Gallery lightbox with previous/next controls, Escape to close and arrow-key navigation
- Client-side demo consultation form with required fields, phone input validation and visible success feedback; no information is transmitted or stored
- FAQ accordion with expanded state and accessible relationships
- Reduced-motion support and visible keyboard focus styles

## Font
The stylesheet references the existing font files in `assets/fonts/` using these names:
- `IRANSansMobile.woff2`
- `IRANSansMobile.woff`
- `IRANSansMobile.ttf`
- `IRANSansMobile.eot`

Keep these files in `assets/fonts/` when updating the repository. The font binaries are not included in this source update ZIP, so existing uploaded font files will not be overwritten.

## Images and demo content
Images load from `images.unsplash.com`, so visitors need an internet connection. Clinic identity, specialist profiles, testimonials, address and phone details are illustrative placeholders. The form is a front-end demonstration only, not a real appointment system.

## GitHub Pages
Keep `index.html` at the repository root and publish from the `main` branch / root folder. There is no build command.
