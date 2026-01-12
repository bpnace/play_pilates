<script lang="ts">
  import Container from '$lib/components/ui/Container.svelte';
  import Section from '$lib/components/ui/Section.svelte';
  import Card from '$lib/components/ui/Card.svelte';
</script>

<Section>
  <Container>
    <div class="flex flex-col gap-8">
      <div>
        <p class="text-sm uppercase tracking-[0.2em] text-gray-500">Blog</p>
        <h1 class="mt-3 font-heading text-5xl text-gray-900">Insights & Studio Notes</h1>
        <p class="mt-3 max-w-2xl text-lg text-gray-600">
          Dummy-Inhalt: Artikelübersicht mit Teasern. Inhalte kommen später aus dem CMS.
        </p>
      </div>

      <div class="grid gap-6 md:grid-cols-3">
        <Card>
          <p class="text-xs text-gray-500">12. Jan</p>
          <p class="mt-2 font-heading text-2xl text-gray-900">Reformer Basics</p>
          <p class="mt-2 text-sm text-gray-600">Kurzer Dummy-Text zu Aufbau, Atem und Kontrolle.</p>
        </Card>
        <Card>
          <p class="text-xs text-gray-500">08. Jan</p>
          <p class="mt-2 font-heading text-2xl text-gray-900">Mobility Reset</p>
          <p class="mt-2 text-sm text-gray-600">Dummy-Text zu Mobility, Recovery und Fokus.</p>
        </Card>
        <Card>
          <p class="text-xs text-gray-500">02. Jan</p>
          <p class="mt-2 font-heading text-2xl text-gray-900">Class Formats</p>
          <p class="mt-2 text-sm text-gray-600">Dummy-Text zu Formaten, Leveln und Progression.</p>
        </Card>
      </div>
    </div>
  </Container>
</Section>
