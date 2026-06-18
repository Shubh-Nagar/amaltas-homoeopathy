# Amaltas Institute of Homoeopathy — Website

A modern, production-grade redesign of the institutional website for the Amaltas Institute of Homoeopathy, Dewas (Madhya Pradesh, India). Built with React 18 + Vite + Tailwind CSS.

---

## Quick start

```bash
# 1. Install dependencies
npm install

# 2. Start the dev server (opens http://localhost:5173)
npm run dev

# 3. Build for production
npm run build

# 4. Preview the production build locally
npm run preview
```

Requires Node 18+.

---

## Project structure

```
amaltas-homoeopathy/
├── index.html                    # Vite entry HTML
├── package.json
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
├── public/                       # Static assets served at the site root
│   ├── logo.jpg                  # → /logo.jpg
│   └── leadership/
│       ├── chairman.jpg          # → /leadership/chairman.jpg
│       ├── director.jpg          # → /leadership/director.jpg
│       └── principal.jpg         # → /leadership/principal.jpg
└── src/
    ├── main.jsx                  # ReactDOM mount point
    ├── App.jsx                   # Home page composition root
    ├── data/
    │   └── navigation.js         # NAV menu + FOOTER_LINKS + CONTACT + LEADERSHIP
    ├── styles/
    │   ├── tokens.js             # Brand colors + font stacks
    │   └── index.css             # Tailwind directives + base resets
    └── components/
        ├── ui/                   # Generic, reusable primitives
        │   ├── Container.jsx
        │   ├── Eyebrow.jsx
        │   ├── Button.jsx
        │   ├── FontLoader.jsx
        │   └── BotanicalAccent.jsx
        ├── layout/               # Site-wide chrome
        │   ├── TopUtilityBar.jsx
        │   ├── Logo.jsx
        │   ├── NavDropdown.jsx
        │   ├── Navbar.jsx
        │   ├── MobileMenu.jsx
        │   └── Footer.jsx
        └── home/                 # Sections specific to the home page
            ├── Hero.jsx
            ├── AboutInstitution.jsx
            ├── Leadership.jsx
            ├── PrincipalMessage.jsx
            └── QuickStats.jsx
```

### Why this layout

- **`ui/`** holds context-free primitives. `Button`, `Container`, `Eyebrow` know nothing about Amaltas — they'd work on any site. Reusing them across the About / Admissions / Hospital pages keeps the visual language tight.
- **`layout/`** holds the chrome that wraps every page (nav, footer, top bar). When we add the About page, we re-import these — never duplicate them.
- **`home/`** holds sections that are home-only. The About page will get its own `components/about/` folder.
- **`data/navigation.js`** is the canonical menu. Edit one file → Navbar + MobileMenu + Footer all update.
- **`styles/tokens.js`** is the canonical palette. Change 8 hex values → the entire brand shifts.

---

## Design system

### Color palette

| Token         | Hex       | Role                                                    |
| ------------- | --------- | ------------------------------------------------------- |
| `gold600`     | `#C9A227` | Primary brand — buttons, accents, headline flourish     |
| `gold700`     | `#A37A14` | Hover states, depth                                     |
| `gold100`     | `#F4E5A3` | Highlight backgrounds, badges                           |
| `forest800`   | `#1A4D3E` | Top bar, dark sections, deep CTAs (healing / nature)    |
| `forest600`   | `#2D6A55` | Secondary accents                                       |
| `cream50`     | `#FAF6EE` | Page background — warmer than pure white, premium feel  |
| `ink900`      | `#0D1F18` | Body text — near-black with green undertone             |
| `muted500`    | `#6B7872` | Captions, metadata                                      |

The palette stays faithful to the existing site's Amaltas-gold + green-ink identity, refined for premium institutional perception.

### Typography

- **Fraunces** (display, variable optical-sized serif) — for headlines and editorial moments
- **Outfit** (body, geometric sans) — for everything else

Loaded at runtime via `FontLoader.jsx`. For production, consider self-hosting with [Fontsource](https://fontsource.org/) to eliminate the network dependency.

### Styling approach

Tailwind CSS for layout, spacing, and typography utilities. Brand colors are applied via inline `style={{}}` referencing `tokens.js` — this avoids Tailwind's arbitrary-value syntax cluttering JSX and keeps brand tokens trivially editable from one file.

---

## How to extend

### Add a new page section

1. Create `src/components/home/MyNewSection.jsx`
2. Import `Container`, `Eyebrow`, and `T` (tokens) — those handle 80% of the styling
3. Import the section in `App.jsx` and place it in the JSX

### Add a menu item

Open `src/data/navigation.js` and add an entry to the `NAV` array. Navbar, MobileMenu, and any future page that imports `NAV` will pick it up automatically.

### Rebrand

Edit the 8 hex values in `src/styles/tokens.js`. The entire interface re-skins.

### Swap leadership images

Replace the files in `public/leadership/`:
- `chairman.jpg`
- `director.jpg`
- `principal.jpg`

The filenames are referenced from `src/data/navigation.js` under `LEADERSHIP`. If you change the filenames, update them there too. Recommended portrait size: 800×1000 px (4:5), JPG ≤200 KB.

### Swap the logo

Replace `public/logo.jpg` with a new file (keep the filename, or update the path in `src/components/layout/Logo.jsx` + `src/components/layout/Footer.jsx`). PNG with a transparent background works well too.

### Edit leadership bios and the Principal's quote

Open `src/data/navigation.js` → `LEADERSHIP` array. Each entry has `name`, `role`, `blurb`, and (for the Principal) `quote` — edit in place.

---

## What's next

This is the home page only. Planned follow-ups in priority order:

1. **About** — Institution, Vision & Mission, Chairman / Director messages, Awards
2. **Admissions** — Procedure, Fees, Entrance, Enquiry form, Scholarships, Brochure
3. **Academics / Departments** — grid of clinical departments + faculty
4. **Hospital** — separate user flow for patients and community

Each new page will reuse `ui/` and `layout/` components and add its own sections under `components/<page>/`.

---

## Notes for the institution

- The bodies named in the hero (CCH / NCH / NABH) are placeholders — please confirm the exact accrediting / regulatory bodies before publishing
- The Principal's quote is paraphrased from the existing site's homoeopathy description — please replace with an authentic message from Dr. Yogendra Singh Bhadoria
- Phone numbers, email, and address are pulled directly from the existing live site and live in `src/data/navigation.js` under `CONTACT`

---

## License

Proprietary — Amaltas Group. Code structure and design system are the work of the redesign engagement.
