<script lang="ts">
  import { asset } from '$app/paths';
  import Container from '$lib/components/ui/Container.svelte';
  import Section from '$lib/components/ui/Section.svelte';
  import Card from '$lib/components/ui/Card.svelte';
</script>

<Section paddingY="none">
  <Container maxWidth="full" noPadding>
    <div class="relative min-h-screen overflow-hidden bg-black">
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
      <div class="absolute inset-0 bg-black/45 backdrop-blur-sm"></div>

      <div class="relative z-10 flex min-h-screen items-end px-4 pt-4 md:items-center md:px-6 md:pt-6">
        <div
          class="w-[92%] pb-12 pl-6 pt-24 text-left md:w-[60%] md:pb-16 md:pl-12 md:pt-32 lg:pl-16"
        >
          <p class="text-xs uppercase w-full tracking-[1.25em] text-gray-600 md:text-sm">
            Cadillac Reformer Training
          </p>
          <h1 class="mt-9 text-4xl  uppercase sm:text-5xl md:text-6xl lg:text-9xl">
            <span class="block font-regular leading-[0.75]">Stärke</span>
            <span class="block font-bold leading-[0.75]">Haltung</span>
            <span class="block font-black leading-[0.75]">Fokus</span>
          </h1>
          <div class="mt-6 text-gray-600 gap-1 text-base md:text-lg">
            <p>Individuelle Cadillac Reformer Sessions in Berlin.</p>
            <p>Präzise Betreuung, klare Struktur, volle Aufmerksamkeit.</p>
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
            src={asset('/images/info/platzhalter.webp')}
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
            src={asset('/images/info/platzhalter.webp')}
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
            src={asset('/images/info/platzhalter.webp')}
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
