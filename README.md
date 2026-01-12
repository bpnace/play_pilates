# Play Pilates – Code Dokumentation

Diese README beschreibt ausschließlich den aktuellen Code-Stand, Struktur und relevante Konventionen.
Die Roadmap liegt in `dev_plan.md`.

## Quickstart

```bash
pnpm install
pnpm dev
```

## Wichtige Scripts

- `pnpm run check` – Svelte/TypeScript checks
- `pnpm run lint` – ESLint
- `pnpm run format` – Prettier
- `pnpm test` – Vitest (Unit)
- `pnpm run test:e2e` – Playwright (E2E)

Falls Playwright meldet, dass Browser fehlen:

```bash
pnpm exec playwright install chromium
```

## Projektstruktur (relevant)

```text
src/
  app.css                 # globale Styles + Tailwind Base
  lib/
    components/
      layout/             # Header, Footer, Navigation, MobileMenu
      ui/                 # Button, Card, Container, Section, Input
    config/
      theme.tokens.json   # zentrale Design Tokens (JSON)
      theme.ts            # TS-Typing/Exports der Tokens
  routes/
    +layout.svelte        # globales Layout (Header/Footer)
    +page.svelte          # Startseite (kompakte Demo)
static/
tests/
```

## Design Tokens & Tailwind

- Tokens liegen in `src/lib/config/theme.tokens.json`.
- Tailwind liest Tokens direkt aus JSON (`tailwind.config.cjs`).
- Fonts werden in `src/app.css` eingebunden und als `font-heading`/`font-body` genutzt.

Beispiele:

```svelte
<h1 class="font-heading text-5xl text-primary-600">Heading</h1>
<p class="font-body text-gray-600">Body</p>
```

## Layout

- Globales Layout: `src/routes/+layout.svelte`
- Layout-Komponenten: `src/lib/components/layout/*`
- UI-Bausteine: `src/lib/components/ui/*`

## Tests

- Unit Tests: `tests/unit`
- E2E Tests: `tests/e2e` (Playwright)

## Konventionen

- pnpm als Package Manager
- Tailwind Utility-First, Tokens kommen aus `theme.tokens.json`
- Svelte 5 Runes Syntax in neuen Komponenten
