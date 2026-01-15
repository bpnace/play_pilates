<script lang="ts">
  import { asset } from '$app/paths';
  import Container from '$lib/components/ui/Container.svelte';
  import Section from '$lib/components/ui/Section.svelte';
  import Button from '$lib/components/ui/Button.svelte';
  import Card from '$lib/components/ui/Card.svelte';
</script>

<Section>
  <Container>
    <div class="relative overflow-hidden rounded-2xl border border-white/40 bg-white/20 shadow-xl">
      <video
        class="absolute inset-0 h-full w-full object-cover"
        src={asset('/images/hero/heroPilates2.webm')}
        autoplay
        loop
        muted
        playsinline
        preload="metadata"
        aria-hidden="true"
        tabindex="-1"
      ></video>
      <div class="absolute inset-0 bg-white/35 backdrop-blur-md"></div>

      <div class="relative z-10 grid gap-10 p-8 md:grid-cols-2 md:items-center md:p-12">
        <div class="rounded-3xl border border-white/70 bg-white/70 p-6 backdrop-blur-xl shadow-lg">
          <p class="text-sm uppercase tracking-[0.2em] text-gray-500">Cadillac Reformer Training</p>
          <h1 class="mt-4 font-heading text-5xl text-gray-900 md:text-6xl">
            Stärke, Haltung und Fokus im Personal Training
          </h1>
          <p class="mt-4 text-lg text-gray-600">
            Individuelle Cadillac Reformer Sessions in Berlin. Praezise Betreuung, klare Struktur
            und volle Aufmerksamkeit für deine Ziele.
          </p>
          <div class="mt-6 flex flex-wrap gap-3">
            <Button href="/cadillac">Der CADILLAC</Button>
            <Button variant="secondary" href="/kontakt">Session anfragen</Button>
          </div>
          <div class="mt-6 flex flex-wrap gap-6 text-sm text-gray-500">
            <div>
              <p class="font-heading text-2xl text-gray-900">1:1</p>
              <p>Persönliche Betreuung</p>
            </div>
            <div>
              <p class="font-heading text-2xl text-gray-900">60</p>
              <p>Minuten pro Session</p>
            </div>
            <div>
              <p class="font-heading text-2xl text-gray-900">Berlin</p>
              <p>Cadillac Reformer</p>
            </div>
          </div>
        </div>

        <div class="grid gap-4">
          <div
            class="rounded-3xl border border-white/60 bg-white/60 p-6 backdrop-blur-lg shadow-lg"
          >
            <p class="text-xs uppercase tracking-[0.2em] text-gray-500">Training Snapshot</p>
            <p class="mt-2 font-heading text-3xl text-gray-900">Fokussiert & persönlich</p>
            <p class="mt-2 text-sm text-gray-600">
              Dein Training ist ruhig, klar strukturiert und ganz auf deine Haltung, Kraft und
              Mobilität ausgerichtet.
            </p>
            <div class="mt-4 grid gap-2 text-xs text-gray-600 sm:grid-cols-2">
              <span class="rounded-full border border-white/70 bg-white/70 px-3 py-1">
                1:1 Fokus
              </span>
              <span class="rounded-full border border-white/70 bg-white/70 px-3 py-1">
                Cadillac Setup
              </span>
              <span class="rounded-full border border-white/70 bg-white/70 px-3 py-1">
                Saubere Ausrichtung
              </span>
              <span class="rounded-full border border-white/70 bg-white/70 px-3 py-1">
                Atem &amp; Kontrolle
              </span>
            </div>
          </div>

          <div
            class="rounded-3xl border border-white/60 bg-white/60 p-6 backdrop-blur-lg shadow-lg"
          >
            <p class="text-xs uppercase tracking-[0.2em] text-gray-500">Verfügbare Slots</p>
            <p class="mt-2 text-sm text-gray-600">
              Termine nach Vereinbarung in Berlin Mitte. Schreib mir für aktuelle Zeiten.
            </p>
          </div>
        </div>
      </div>
    </div>
  </Container>
</Section>

<Section background="gray">
  <Container>
    <div class="flex flex-col gap-8">
      <div>
        <p class="text-sm uppercase tracking-[0.2em] text-gray-500">Training Highlights</p>
        <h2 class="mt-3 font-heading text-4xl text-gray-900">Was dich erwartet</h2>
        <p class="mt-3 max-w-2xl text-lg text-gray-600">
          Schwerpunkte aus dem Cadillac Personal Training in Berlin.
        </p>
      </div>

      <div class="grid gap-6 md:grid-cols-3">
        <Card>
          <img
            src={asset('/images/hero/hero-2.svg')}
            alt="Kursraum Placeholder"
            class="mb-4 w-full rounded-xl"
          />
          <p class="text-sm text-gray-500">Cadillac Setup</p>
          <p class="mt-2 font-heading text-2xl text-gray-900">Präzise Federnarbeit</p>
          <p class="mt-2 text-sm text-gray-600">
            Saubere Linien, klare Range und geführtes Feedback am Cadillac.
          </p>
        </Card>
        <Card>
          <img
            src={asset('/images/hero/hero-3.svg')}
            alt="Coach Placeholder"
            class="mb-4 w-full rounded-xl"
          />
          <p class="text-sm text-gray-500">Personal Coaching</p>
          <p class="mt-2 font-heading text-2xl text-gray-900">Hands-on</p>
          <p class="mt-2 text-sm text-gray-600">
            Präzise Korrekturen, angepasst an deinen Körper und Alltag.
          </p>
        </Card>
        <Card>
          <img
            src={asset('/images/hero/hero-2.svg')}
            alt="Community Placeholder"
            class="mb-4 w-full rounded-xl"
          />
          <p class="text-sm text-gray-500">Individuelle Ziele</p>
          <p class="mt-2 font-heading text-2xl text-gray-900">Fokus statt Gruppe</p>
          <p class="mt-2 text-sm text-gray-600">Dein Tempo, dein Plan und dein Cadillac Flow.</p>
        </Card>
      </div>
    </div>
  </Container>
</Section>

<Section>
  <Container>
    <div class="grid gap-8 md:grid-cols-2 md:items-center">
      <div>
        <p class="text-sm uppercase tracking-[0.2em] text-gray-500">Session Ablauf</p>
        <h2 class="mt-3 font-heading text-4xl text-gray-900">So läuft eine Session ab</h2>
        <p class="mt-3 text-lg text-gray-600">
          Beispielstruktur für eine 60-Minuten Einheit am Cadillac Reformer.
        </p>
      </div>
      <div class="grid gap-4">
        <Card>
          <div class="flex items-center justify-between">
            <p class="text-sm text-gray-500">Ankommen</p>
            <p class="text-sm font-medium text-gray-900">5-10 Min</p>
          </div>
          <p class="mt-2 font-heading text-2xl text-gray-900">Check-in & Zielsetzung</p>
        </Card>
        <Card>
          <div class="flex items-center justify-between">
            <p class="text-sm text-gray-500">Hauptteil</p>
            <p class="text-sm font-medium text-gray-900">40 Min</p>
          </div>
          <p class="mt-2 font-heading text-2xl text-gray-900">Cadillac Flow</p>
        </Card>
        <Card>
          <div class="flex items-center justify-between">
            <p class="text-sm text-gray-500">Ausklang</p>
            <p class="text-sm font-medium text-gray-900">10 Min</p>
          </div>
          <p class="mt-2 font-heading text-2xl text-gray-900">Integration & Stretch</p>
        </Card>
      </div>
    </div>
  </Container>
</Section>
