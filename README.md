# LUMIÈRE Clinic — Phase 1

A responsive Persian/English clinic concept website for a portfolio demonstration.

## Deployment

This project is a static GitHub Pages site. It does not require Node.js, npm, a build step, or a backend. React 18, ReactDOM 18, and Babel Standalone are loaded from unpkg CDN; clinic imagery is delivered responsively from the Unsplash CDN.

Upload the **contents of this folder** to the root of the `main` branch in the `LUMIERE-CLINIC` repository. Keep the existing font files in `assets/fonts/`.

## Included

- `index.html` — page shell and CDN dependencies
- `css/style.css` — responsive layout and visual system
- `js/app.jsx` — bilingual React interface and demo interactions
- `assets/images/IMAGE-MANIFEST.md` — image CDN inventory

## Font files

The stylesheet references these existing files in `assets/fonts/`:

- `IRANSansMobile.woff2`
- `IRANSansMobile.woff`
- `IRANSansMobile.ttf`
- `IRANSansMobile.eot`

Do not delete this folder when replacing the project files.

## Images

Images are requested from `images.unsplash.com` with responsive widths (480, 800, and 1200 px), automatic format selection, and lazy loading below the hero. No image binaries need to be uploaded to GitHub.

## Demo notice

Doctor profiles, testimonials, address, and phone details are illustrative. The consultation button only displays a demo notice; no real appointment or patient information is submitted. This project is not a real clinic or medical service.
