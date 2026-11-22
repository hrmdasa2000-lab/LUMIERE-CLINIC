# LUMIÈRE Clinic — Asset Status

## Font
- Required family: IranMobileSans
- Expected file: `assets/fonts/IranMobileSans.woff2`
- Status: waiting for the actual font file from the project owner.
- CSS now applies the IranMobileSans family to all text, including the Latin wordmark. Until the font binary is supplied, browsers will show the fallback font.

## Photographs
- Current page photographs are real photographic image URLs from Unsplash.
- They are still remotely loaded and are not yet stored in `assets/images/`.
- Local packaging, source/permission verification, image integrity checks, and the final image audit are still pending.
- No AI-generated image is being represented as a real clinic, doctor, device, or treatment photograph.

## Release gate
Do not mark Phase 1 asset completion as finished until the font file is present, all selected photographs are locally bundled, and the site is checked again on GitHub Pages.
