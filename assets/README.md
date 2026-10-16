# Site assets

Save website-ready files here:

```text
assets/
  brand/               Logos, wordmarks, and brand graphics
  fonts/               Locally hosted font files (prefer .woff2)
  icons/               SVG icons and favicon files
  images/
    hero/              Large opening-section photos
    provisions/        Photos for the provisions cards
    general/           Other site photography
```

Use descriptive lowercase filenames with hyphens, such as `shared-table.webp` or `seasonal-vegetables.webp`. Avoid spaces. The `.gitkeep` files keep empty folders in version control; they can be removed once a folder contains assets.

## Adding a photo

1. Resize and compress the photo before saving it. Prefer WebP; JPEG is also suitable for photos. Use SVG for vector logos and icons, or PNG when transparency is needed.
2. Aim for roughly 1600–2000 pixels wide for hero photos and 800–1000 pixels for card photos. Keep original, full-resolution source files outside the served site folder.
3. Save the file in the appropriate folder, then update the image's `src` in `index.html`:

```html
<img
  src="assets/images/hero/shared-table.webp"
  alt="Describe the content of the photo"
  fetchpriority="high"
>
```

Use `loading="lazy"` for images below the opening section. Use an empty `alt=""` for purely decorative images.

Paths in `index.html` are relative to that file. Paths in `styles.css` are relative to the stylesheet, which is also currently in the project root:

```css
background-image: url('assets/images/general/table-setting.webp');
```

The existing photos still use external URLs, and fonts still load from Google Fonts. Replace those references as local assets are added. Only use photos, logos, and font files you have permission to publish; retain any required license or attribution alongside the asset.
