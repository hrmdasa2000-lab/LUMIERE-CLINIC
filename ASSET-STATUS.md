# Asset status — image loading fix

- Image host changed from Unsplash to the Pexels image CDN.
- Image URLs use Pexels photo IDs matched to clinic, treatment, and illustrative doctor imagery.
- A fallback image handler is applied to page images and gallery lightbox images.
- Images are remote CDN assets; they are not bundled into the repository.
- The font files in `assets/fonts` are user-managed and must be preserved during upload.
- Verify the live site after deployment on the user's network because CDN access can vary by network/provider.
