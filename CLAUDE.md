# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # Start dev server at http://localhost:5173 (opens browser automatically)
npm run build    # Production build
npm run preview  # Preview the production build locally
```

No test runner or linter is configured. Requires Node 18+.

## Architecture

React 18 SPA built with Vite + Tailwind CSS. Currently a single-page home page; future pages (About, Admissions, Academics, Hospital) are planned.

**`src/App.jsx`** is the composition root for the home page. Section order is intentional (see comment in the file) and mirrors the prospective-student journey.

**`src/data/navigation.js`** is the single source of truth for all site content data: `NAV` (menu tree), `FOOTER_LINKS`, `CONTACT`, `LEADERSHIP`, and `CAMPUS_SLIDES`. Editing this file propagates changes to Navbar, MobileMenu, Footer, and all sections that consume these arrays.

**`src/styles/tokens.js`** exports `T` (8 brand color hex values) and `fontDisplay`/`fontBody` font stacks. These are imported as `{ T }` and applied via inline `style={{}}` props — not Tailwind arbitrary values. This is intentional: Tailwind handles layout/spacing, tokens handle brand identity.

**Component structure:**
- `src/components/ui/` — context-free primitives (`Button`, `Container`, `Eyebrow`, `BotanicalAccent`, `FontLoader`). These know nothing about Amaltas.
- `src/components/layout/` — site-wide chrome (TopUtilityBar, Navbar, NavDropdown, MobileMenu, Logo, Footer). Reused across all future pages.
- `src/components/home/` — home-only sections. Future pages get their own `components/<page>/` folder.

**Static assets** live in `public/` and are referenced by absolute path (e.g., `/logo.jpg`, `/leadership/chairman.jpg`, `/campus/campus.jpg`). Leadership image paths are defined in `LEADERSHIP` inside `navigation.js`.

**Fonts** (Fraunces + Outfit) are loaded at runtime from Google Fonts via `FontLoader.jsx`. For production, self-hosting via Fontsource is recommended to remove the network dependency.

## Key design decisions

- Brand tokens (`T.*`) via inline styles, Tailwind for everything else — keeps the palette editable from one file without polluting class names with arbitrary values.
- All navigation and content data centralized in `navigation.js` — never hardcode menu labels or contact info in component files.
- New pages reuse `ui/` and `layout/` components and add sections under `components/<page>/`.
