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

## Pages & routing (react-router-dom)
The site now has multiple pages sharing the same top bar, navbar and footer:
- /              Home (unchanged)
- /about         About Us (company content)
- /products      Our Products (category cards + all-products grid, same card style)
- /services      Our Services
- /manufacturing Manufacturing
- /contact       Contact Us (details + form)

Source: src/pages/* (page content), src/components/Layout.jsx (shared chrome),
routes defined in src/App.jsx.

Note for production static hosting (Render/Railway static, Netlify, etc.):
add a catch-all rewrite so every path serves index.html (SPA fallback),
e.g. Netlify `_redirects`:  /*  /index.html  200
`npm run dev` and `npm run preview` already handle this automatically.
