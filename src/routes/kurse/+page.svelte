<script lang="ts">
  import Container from '$lib/components/ui/Container.svelte';
  import Section from '$lib/components/ui/Section.svelte';
  import Card from '$lib/components/ui/Card.svelte';
</script>

<Section>
  <Container>
    <div class="flex flex-col gap-8">
      <div>
        <p class="text-sm uppercase tracking-[0.2em] text-gray-500">Kurse</p>
        <h1 class="mt-3 font-heading text-5xl text-gray-900">Reformer Klassen</h1>
        <p class="mt-3 max-w-2xl text-lg text-gray-600">
          Dummy-Inhalt: Übersicht der Kursformate, Levels und Fokusbereiche. Später werden diese
          Daten aus Drupal geladen.
        </p>
      </div>

      <div class="grid gap-6 md:grid-cols-3">
        <Card>
          <p class="text-sm text-gray-500">Beginner</p>
          <p class="mt-2 font-heading text-2xl text-gray-900">Foundations</p>
          <p class="mt-2 text-sm text-gray-600">
            Technik, Atmung, kontrollierte Übergänge. Ideal für Einsteiger.
          </p>
        </Card>
        <Card>
          <p class="text-sm text-gray-500">Intermediate</p>
          <p class="mt-2 font-heading text-2xl text-gray-900">Flow & Strength</p>
          <p class="mt-2 text-sm text-gray-600">
            Dynamische Sequenzen mit Fokus auf Stabilität und Core-Kraft.
          </p>
        </Card>
        <Card>
          <p class="text-sm text-gray-500">Advanced</p>
          <p class="mt-2 font-heading text-2xl text-gray-900">Precision Lab</p>
          <p class="mt-2 text-sm text-gray-600">
            Präzise Reformer-Progressionen für Fortgeschrittene.
          </p>
        </Card>
      </div>
    </div>
  </Container>
</Section>
