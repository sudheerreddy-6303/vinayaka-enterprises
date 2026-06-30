# Vinayak Enterprises — Herbal Cosmetics Website

React (JavaScript) + Vite + Bootstrap 5 single-page frontend, built to match the poster
(same maroon palette, same structure and sections).

## Run
```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # production build -> dist/
```

## Brand colours (src/index.css)
--brand: #9e1b1b   (main maroon)
--brand-dark: #861515
--brand-darker: #6f1010  (footer bottom)

## Add your real images
Drop photos into `public/images/` and replace the placeholder `<div>` blocks
(marked with comments) with `<img src="/images/your-file.png" ... />`:
- Hero product photo  -> src/components/Hero.jsx
- Category photos     -> src/components/Categories.jsx
- Product photos      -> src/components/FeaturedProducts.jsx

## Sections (in order)
TopBar · Header(navbar) · Hero · TrustBar · Categories · MidBand · FeaturedProducts · Footer
