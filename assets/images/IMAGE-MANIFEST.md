# Image CDN manifest

Images are intentionally loaded from the Unsplash CDN; do not download or upload image files for this version.

| Placement | Unsplash image ID | CDN delivery |
|---|---|---|
| Hero / clinic visual | `photo-1576091160399-112ba8d25d1d` | `images.unsplash.com` |
| Skin rejuvenation service | `photo-1616394584738-fc6e612e71b9` | `images.unsplash.com` |
| Laser service | `photo-1570172619644-dfd03ed5d881` | `images.unsplash.com` |
| Hair care service | `photo-1522337360788-8b13dee7a37e` | `images.unsplash.com` |
| About / clinic visual | `photo-1606811971618-4486d14f3f99` | `images.unsplash.com` |
| Sample specialist 1 | `photo-1559839734-2b71ea197ec2` | `images.unsplash.com` |
| Sample specialist 2 | `photo-1612349317150-e413f6a5b16d` | `images.unsplash.com` |
| Sample specialist 3 | `photo-1594824476967-48c8b964273f` | `images.unsplash.com` |

## Delivery behavior
- URLs request `auto=format`, crop-to-fill, and quality 82.
- Responsive `srcSet` candidates: 480, 800, and 1200 pixels.
- `sizes` hints let the browser choose a suitable candidate for the layout.
- The browser loads the selected image directly from Unsplash; the repository stores no image binaries.
