<script lang="ts">
  import { asset } from '$app/paths';
  import Container from '$lib/components/ui/Container.svelte';
  import Section from '$lib/components/ui/Section.svelte';
  import Button from '$lib/components/ui/Button.svelte';
  import Card from '$lib/components/ui/Card.svelte';
</script>

<Section>
  <Container>
    <div class="grid gap-10 md:grid-cols-2 md:items-center">
      <div>
        <p class="text-sm uppercase tracking-[0.2em] text-gray-500">Reformer Pilates</p>
        <h1 class="mt-4 font-heading text-5xl text-gray-900 md:text-6xl">
          Stärke, Haltung und Fokus im Studio
        </h1>
        <p class="mt-4 text-lg text-gray-600">
          Moderne Klassen, präzise Betreuung und eine klare Trainingsreise – von Einsteiger bis
          Advanced.
        </p>
        <div class="mt-6 flex flex-wrap gap-3">
          <Button href="/kurse">Kurse ansehen</Button>
          <Button variant="secondary" href="/kontakt">Probestunde buchen</Button>
        </div>
        <div class="mt-6 flex items-center gap-6 text-sm text-gray-500">
          <div>
            <p class="font-heading text-2xl text-gray-900">8</p>
            <p>Plätze pro Klasse</p>
          </div>
          <div>
            <p class="font-heading text-2xl text-gray-900">45</p>
            <p>Minuten Fokus</p>
          </div>
          <div>
            <p class="font-heading text-2xl text-gray-900">5</p>
            <p>Formate</p>
          </div>
        </div>
      </div>
      <div class="relative">
        <img
          src={asset('/images/hero/hero-1.svg')}
          alt="Studio Mood Placeholder"
          class="w-full rounded-3xl shadow-lg"
        />
        <div class="absolute bottom-6 left-6 rounded-2xl bg-white/90 px-4 py-3 shadow">
          <p class="text-xs uppercase tracking-[0.2em] text-gray-500">Dummy</p>
          <p class="text-sm font-medium text-gray-900">Studio Atmosphäre</p>
        </div>
      </div>
    </div>
  </Container>
</Section>

<Section background="gray">
  <Container>
    <div class="flex flex-col gap-8">
      <div>
        <p class="text-sm uppercase tracking-[0.2em] text-gray-500">Studio Highlights</p>
        <h2 class="mt-3 font-heading text-4xl text-gray-900">Was dich erwartet</h2>
        <p class="mt-3 max-w-2xl text-lg text-gray-600">
          Dummy-Inhalte für Bildkacheln, die später mit echten Studio-Fotos ersetzt werden.
        </p>
      </div>

      <div class="grid gap-6 md:grid-cols-3">
        <Card>
          <img
            src={asset('/images/hero/hero-2.svg')}
            alt="Kursraum Placeholder"
            class="mb-4 w-full rounded-xl"
          />
          <p class="text-sm text-gray-500">Reformer Space</p>
          <p class="mt-2 font-heading text-2xl text-gray-900">Klar & ruhig</p>
          <p class="mt-2 text-sm text-gray-600">
            Fokus auf Atmung, Alignment und kontrollierte Sequenzen.
          </p>
        </Card>
        <Card>
          <img
            src={asset('/images/hero/hero-3.svg')}
            alt="Coach Placeholder"
            class="mb-4 w-full rounded-xl"
          />
          <p class="text-sm text-gray-500">Coaching</p>
          <p class="mt-2 font-heading text-2xl text-gray-900">Hands-on</p>
          <p class="mt-2 text-sm text-gray-600">Präzise Korrekturen und klare Fortschrittsziele.</p>
        </Card>
        <Card>
          <img
            src={asset('/images/hero/hero-2.svg')}
            alt="Community Placeholder"
            class="mb-4 w-full rounded-xl"
          />
          <p class="text-sm text-gray-500">Community</p>
          <p class="mt-2 font-heading text-2xl text-gray-900">Small Groups</p>
          <p class="mt-2 text-sm text-gray-600">
            Maximal 8 Plätze für eine persönliche Trainingsumgebung.
          </p>
        </Card>
      </div>
    </div>
  </Container>
</Section>

<Section>
  <Container>
    <div class="grid gap-8 md:grid-cols-2 md:items-center">
      <div>
        <p class="text-sm uppercase tracking-[0.2em] text-gray-500">Weekly Flow</p>
        <h2 class="mt-3 font-heading text-4xl text-gray-900">Beispielplan (Dummy)</h2>
        <p class="mt-3 text-lg text-gray-600">
          Dummy-Schedule mit Fokus auf wechselnde Intensitäten und Technik.
        </p>
      </div>
      <div class="grid gap-4">
        <Card>
          <div class="flex items-center justify-between">
            <p class="text-sm text-gray-500">Montag</p>
            <p class="text-sm font-medium text-gray-900">07:30</p>
          </div>
          <p class="mt-2 font-heading text-2xl text-gray-900">Foundation Flow</p>
        </Card>
        <Card>
          <div class="flex items-center justify-between">
            <p class="text-sm text-gray-500">Mittwoch</p>
            <p class="text-sm font-medium text-gray-900">18:00</p>
          </div>
          <p class="mt-2 font-heading text-2xl text-gray-900">Strength & Core</p>
        </Card>
        <Card>
          <div class="flex items-center justify-between">
            <p class="text-sm text-gray-500">Freitag</p>
            <p class="text-sm font-medium text-gray-900">19:30</p>
          </div>
          <p class="mt-2 font-heading text-2xl text-gray-900">Precision Lab</p>
        </Card>
      </div>
    </div>
  </Container>
</Section>
