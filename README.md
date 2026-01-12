# Pilates Studio Website – Entwicklungs-Roadmap

Developer-Roadmap für eine moderne Reformer-Pilates-Studio Website (SvelteKit + TailwindCSS + Headless Drupal + pnpm).

> Hinweis: Dieses Repo enthält bereits das Basis-Setup aus Phase 1. Die Roadmap beschreibt die nächsten Ausbaustufen.

## Inhalt

- [Überblick](#überblick)
- [Roadmap auf einen Blick](#roadmap-auf-einen-blick)
- [Zielbild: Projektstruktur](#zielbild-projektstruktur)
- [Phasen (Details)](#phasen-details)
- [Nächste Schritte](#nächste-schritte)

## Überblick

### Ziel

Performante Studio-Website mit gepflegten Inhalten über ein Headless-Drupal (JSON:API/REST) und einem modernen SvelteKit-Frontend.

### Tech Stack

- Framework: SvelteKit (SSR/SSG)
- Styling: TailwindCSS (zentrale Theme-Config)
- CMS: Headless Drupal (JSON:API / REST)
- i18n: DE/EN
- Animationen: Svelte Transitions / optional GSAP
- Forms: SvelteKit Actions + Validation (z. B. Zod)
- Auth (optional): JWT via Drupal
- Package Manager: pnpm
- Hosting: Static (z. B. Strato) oder Node (VPS)

### Konventionen

- Befehle/Install: `pnpm` (kein `npm`/`yarn`), `pnpm dlx` statt `npx`.
- Diese README beschreibt ein Zielbild; Details (Adapter, i18n-Strategy, Drupal-Model) bitte an die finalen Anforderungen anpassen.

### Quickstart (lokal)

```bash
pnpm install
pnpm dev
```

Nützliche Commands:

```bash
pnpm run check
pnpm run lint
pnpm test
pnpm run test:e2e
```

Falls Playwright meldet, dass Browser fehlen:

```bash
pnpm exec playwright install chromium
```

## Roadmap auf einen Blick

| Phase | Fokus                       | Dauer    | Ergebnis/Checkpoint                              |
| ----: | --------------------------- | -------- | ------------------------------------------------ |
|     1 | Setup & Foundation          | 2–3 Std  | SvelteKit + Tailwind läuft lokal                 |
|     2 | Theme & Design System       | 2–3 Std  | Theme-Config + Tailwind integriert               |
|     3 | Core Layout Components      | 1 Tag    | Header/Footer/UI-Bausteine ready                 |
|     4 | Page Implementation         | 2–3 Tage | Hauptseiten implementiert (Mock-Daten)           |
|     5 | Drupal Integration          | 2–3 Tage | Drupal Daten kommen serverseitig in SvelteKit an |
|     6 | Internationalization (i18n) | 1–2 Tage | DE/EN Umschaltung & Übersetzungen                |
|     7 | Animations & Polish         | 2–3 Tage | Micro-Interactions + Fade-In/Parallax            |
|     8 | Testing & Deployment        | 2–3 Tage | Tests/Build/Deployment live                      |

Geschätzte Gesamtdauer: 3–4 Wochen (Vollzeit; abhängig von Content/Drupal-Setup).

## Zielbild: Projektstruktur

<details>
<summary>Beispiel-Struktur (Zielbild)</summary>

```text
pilates-studio/
├── src/
│   ├── lib/
│   │   ├── components/
│   │   │   ├── layout/                # Header/Footer/Nav
│   │   │   ├── sections/              # Page Sections (Hero, Grid, CTA, ...)
│   │   │   ├── ui/                    # Reusable UI (Button, Card, Input, ...)
│   │   │   └── animations/            # FadeIn, Parallax, ...
│   │   ├── config/                    # theme.ts, site.ts
│   │   ├── stores/                    # auth/language/ui state
│   │   ├── api/                       # drupal client + types
│   │   ├── utils/                     # formatters/validators
│   │   └── i18n/                      # translations + setup
│   ├── routes/                        # Pages + server loads
│   └── styles/                        # app.css (Tailwind)
├── static/                            # images/fonts/favicon
├── tests/                             # unit/e2e (optional)
├── .env.example
├── package.json
├── pnpm-lock.yaml
└── README.md
```

</details>

## Phasen (Details)

### Phase 1: Setup & Foundation (2–3 Std)

Ziel: Projekt initialisieren, Tooling setzen, Tailwind aktivieren, Basis-Struktur anlegen.

#### 1.1 SvelteKit Projekt erstellen

```bash
# im Projekt-Ordner
pnpm create svelte@latest .

# Empfehlung bei den Prompts:
# - Skeleton project
# - TypeScript: Yes
# - ESLint: Yes
# - Prettier: Yes
# - Playwright (E2E): optional
# - Vitest (Unit): optional

pnpm install
pnpm dev
```

Checkpoint: SvelteKit läuft lokal (Welcome Page erreichbar).

#### 1.2 TailwindCSS installieren

```bash
pnpm add -D tailwindcss postcss autoprefixer @tailwindcss/typography @tailwindcss/forms
pnpm dlx tailwindcss init -p
```

`tailwind.config.js` (ESM):

```js
import typography from '@tailwindcss/typography';
import forms from '@tailwindcss/forms';

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: { extend: {} },
  plugins: [typography, forms],
};
```

`src/styles/app.css`:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  html {
    scroll-behavior: smooth;
  }
}
```

`src/routes/+layout.svelte`:

```svelte
<script lang="ts">
  import '../styles/app.css';
</script>

<slot />
```

Checkpoint: Tailwind-Klassen wirken (z. B. `text-blue-500` testweise in `+page.svelte`).

#### 1.3 Basis-Dependencies (optional/je nach Bedarf)

```bash
# Animation/Scroll
pnpm add gsap svelte-intersection-observer

# Forms/Validation
pnpm add zod

# Utilities
pnpm add clsx date-fns

# VPS Deployment (nur wenn benötigt)
pnpm add -D @sveltejs/adapter-node
```

#### 1.4 Ordnerstruktur + Environment

```bash
mkdir -p src/lib/components/{layout,sections,ui,animations}
mkdir -p src/lib/{config,stores,api,utils,i18n/translations}
mkdir -p src/styles
mkdir -p static/{images/{hero,courses,team},fonts}
```

`.env.example` (Vorschlag):

```dotenv
# Drupal API
PUBLIC_DRUPAL_BASE_URL=https://your-drupal-site.com
DRUPAL_API_KEY=your-api-key

# Site Config
PUBLIC_SITE_URL=http://localhost:5173
PUBLIC_DEFAULT_LANG=de

# Email (Kontaktformular)
SMTP_HOST=smtp.example.com
SMTP_PORT=587
SMTP_USER=your-email@example.com
SMTP_PASSWORD=your-password
```

```bash
cp .env.example .env
```

#### 1.5 Git initialisieren

```bash
git init
git add .
git commit -m "chore: initial setup (SvelteKit + Tailwind)"
```

Checkpoint: Repo sauber initialisiert, Dev-Server läuft.

---

### Phase 2: Theme & Design System (2–3 Std)

Ziel: Design-Tokens zentralisieren (Farben, Typo, Spacing, Animation-Dauern) und in Tailwind nutzbar machen.

#### 2.1 Theme-Config anlegen (`src/lib/config/theme.ts`)

<details>
<summary>Beispiel: theme.ts (Startpunkt)</summary>

```ts
export const theme = {
  colors: {
    primary: {
      DEFAULT: '#10B981',
      50: '#ECFDF5',
      100: '#D1FAE5',
      200: '#A7F3D0',
      300: '#6EE7B7',
      400: '#34D399',
      500: '#10B981',
      600: '#059669',
      700: '#047857',
      800: '#065F46',
      900: '#064E3B',
    },
    secondary: {
      DEFAULT: '#0EA5E9',
      50: '#F0F9FF',
      100: '#E0F2FE',
      200: '#BAE6FD',
      300: '#7DD3FC',
      400: '#38BDF8',
      500: '#0EA5E9',
      600: '#0284C7',
      700: '#0369A1',
      800: '#075985',
      900: '#0C4A6E',
    },
    black: '#0A0A0A',
    white: '#FFFFFF',
    gray: {
      50: '#F9FAFB',
      100: '#F3F4F6',
      200: '#E5E7EB',
      300: '#D1D5DB',
      400: '#9CA3AF',
      500: '#6B7280',
      600: '#4B5563',
      700: '#374151',
      800: '#1F2937',
      900: '#111827',
    },
  },
  fonts: {
    heading: "'Bebas Neue', 'Arial Black', 'Impact', sans-serif",
    body: "'Inter', system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif",
  },
  animations: {
    durations: { fast: '200ms', normal: '300ms', slow: '500ms' },
    easings: { smooth: 'cubic-bezier(0.4, 0, 0.2, 1)' },
  },
} as const;

export type Theme = typeof theme;
```

</details>

#### 2.2 Theme in Tailwind integrieren

Wichtig: `tailwind.config.*` wird von Node ausgeführt. Ein direktes Importieren von TypeScript (`theme.ts`) funktioniert ohne Zusatz-Setup in der Regel nicht. Wenn du Tokens teilen willst, lege sie als JS/JSON ab (z. B. `src/lib/config/theme.tokens.js`) und importiere diese Datei.

<details>
<summary>Beispiel: Tailwind colors/fontFamily aus shared tokens</summary>

```js
import typography from '@tailwindcss/typography';
import forms from '@tailwindcss/forms';
import tokens from './src/lib/config/theme.tokens.js';

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors: {
        primary: tokens.colors.primary,
        secondary: tokens.colors.secondary,
        gray: tokens.colors.gray,
        black: tokens.colors.black,
        white: tokens.colors.white,
      },
      fontFamily: {
        heading: [tokens.fonts.heading],
        body: [tokens.fonts.body],
      },
    },
  },
  plugins: [typography, forms],
};
```

</details>

Checkpoint: Buttons/Headlines nutzen Theme-Farben und -Fonts konsistent.

---

### Phase 3: Core Layout Components (1 Tag)

Ziel: Wiederverwendbare Layout- und UI-Komponenten erstellen.

#### Deliverables

- `Header`, `Footer`, `Navigation`, `MobileMenu`
- UI: `Container`, `Section`, `Button`, `Card`, `Input`, `Modal`
- Styling konsistent (Spacing, Hover/Active States, Focus States)

Checkpoint: Layout steht auf allen Seiten, Mobile-Menü funktioniert.

---

### Phase 4: Page Implementation (2–3 Tage)

Ziel: Hauptseiten (erstmal mit Mock-Daten) implementieren, Komponenten zusammensetzen.

#### Seiten

- `/` (Homepage)
- `/kurse` + `/kurse/[slug]`
- `/preise`
- `/ueber-uns`
- `/kontakt`
- `/blog` + `/blog/[slug]`
- `/mitglieder/login` + `/mitglieder/register` + `/mitglieder/dashboard` (optional je nach Scope)

#### Verifikation (lokal)

```bash
pnpm dev
```

Checklist:

- Homepage lädt mit Hero/Sections/CTA
- Navigation/Routes funktionieren
- Responsive Layout (Mobile bis Desktop)

Checkpoint: Alle Hauptseiten sind implementiert und navigierbar.

---

### Phase 5: Drupal Integration (2–3 Tage)

Ziel: Headless Drupal anbinden (Kurse, Blog, Team).

#### 5.1 Content Types (Vorschlag)

**Kurs**

- Titel (mehrsprachig)
- Beschreibung (mehrsprachig)
- Bild
- Level (Beginner/Intermediate/Advanced)
- Dauer (Minuten)
- Max. Teilnehmer
- Trainer (Reference Team Member)
- Kurszeiten (repeatable: Tag + Uhrzeit)

**Blog Post**

- Titel/Excerpt/Content (mehrsprachig)
- Featured Image
- Autor (Reference Team Member)
- Kategorien/Tags (Taxonomy)
- Veröffentlichungsdatum

**Team Member**

- Name
- Rolle/Bio/Qualifikationen (mehrsprachig)
- Foto
- Social Links

#### 5.2 API-Client (`src/lib/api/drupal.ts`)

<details>
<summary>Beispiel: minimaler DrupalClient (Fetch + JSON:API)</summary>

```ts
const baseUrl = import.meta.env.PUBLIC_DRUPAL_BASE_URL ?? 'http://localhost:8080';

export class DrupalClient {
  constructor(private readonly url: string = baseUrl) {}

  private async fetchJSON<T>(endpoint: string, init: RequestInit = {}): Promise<T> {
    const response = await fetch(`${this.url}${endpoint}`, {
      ...init,
      headers: {
        accept: 'application/vnd.api+json',
        ...init.headers,
      },
    });

    if (!response.ok)
      throw new Error(`Drupal API Error: ${response.status} ${response.statusText}`);
    return (await response.json()) as T;
  }

  getCourses() {
    return this.fetchJSON('/jsonapi/node/course?include=field_image,field_trainer');
  }
}

export const drupalClient = new DrupalClient();
```

</details>

#### 5.3 Server-Side Data Loading (SvelteKit)

Beispiel: `src/routes/kurse/+page.server.ts` lädt Kurse serverseitig und gibt sie an `+page.svelte` weiter.

Checkpoint: Mock-Daten sind durch Drupal-Daten ersetzt (mind. Kurse + Blog + Team).

---

### Phase 6: Internationalization (i18n) (1–2 Tage)

Ziel: DE/EN via Übersetzungsdateien + Language Switch.

#### 6.1 Library installieren

```bash
pnpm add sveltekit-i18n
```

#### 6.2 Übersetzungen

`src/lib/i18n/translations/de.json` und `src/lib/i18n/translations/en.json` anlegen, Keys konsistent halten.

Checkpoint: Sprache umschaltbar, Navigation + Hero + Core Texte übersetzt.

---

### Phase 7: Animations & Polish (2–3 Tage)

Ziel: Micro-Interactions, Scroll/Fade-In Effekte, optional Parallax.

#### 7.1 Optional: GSAP

```bash
pnpm add gsap
```

#### 7.2 Komponenten

- `FadeIn` via `IntersectionObserver`
- `Parallax` (sparsam einsetzen; Performance beachten)

Checkpoint: Animationen unterstützen UX ohne Layout-Jank.

---

### Phase 8: Testing & Deployment (2–3 Tage)

Ziel: Tests/Build/Deployment zuverlässig reproduzierbar.

#### 8.1 Static Adapter (für klassisches Webhosting)

```bash
pnpm add -D @sveltejs/adapter-static
```

<details>
<summary>Beispiel: svelte.config.js (adapter-static + prerender)</summary>

```js
import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/kit/vite';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  preprocess: vitePreprocess(),
  kit: {
    adapter: adapter({
      pages: 'build',
      assets: 'build',
      fallback: 'index.html',
      precompress: true,
      strict: true,
    }),
    prerender: {
      entries: ['/', '/kurse', '/ueber-uns', '/preise', '/kontakt', '/blog'],
    },
  },
};

export default config;
```

</details>

#### 8.2 Build

```bash
pnpm build
```

Output: `./build/`

#### 8.3 Strato Deployment (Static) – via SFTP

- Upload: kompletter Inhalt aus `build/` in den Webroot
- SPA Routing via `.htaccess`:

```apache
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /

  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d

  RewriteRule ^(.*)$ /index.html [L]
</IfModule>
```

#### 8.4 Performance

```bash
pnpm add -D @sveltejs/enhanced-img
```

Lighthouse Zielwerte:

- Performance > 90
- Accessibility > 95
- Best Practices > 90
- SEO > 95

#### 8.5 Alternative: VPS Deployment (Node)

```bash
pnpm remove @sveltejs/adapter-static
pnpm add -D @sveltejs/adapter-node
pnpm build

# PM2 (Beispiel)
pm2 start build/index.js --name pilates-studio
```

Checkpoint: Website ist live (Static oder VPS).

## Nächste Schritte

Wenn du direkt starten willst:

1. Phase 1 (SvelteKit + Tailwind + Ordnerstruktur)
2. Phase 2 (Theme config + Tailwind Integration)
3. Phase 3 (Header/Footer/UI)
4. Phase 4 (Seiten mit Mock-Daten)
5. Danach: Drupal + i18n + Polish + Deployment
