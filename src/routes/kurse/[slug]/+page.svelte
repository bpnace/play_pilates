<script lang="ts">
  import Container from '$lib/components/ui/Container.svelte';
  import Section from '$lib/components/ui/Section.svelte';
  import Button from '$lib/components/ui/Button.svelte';
</script>

<Section>
  <Container>
    <div class="max-w-3xl">
      <p class="text-sm uppercase tracking-[0.2em] text-gray-500">Kurs Detail</p>
      <h1 class="mt-3 font-heading text-5xl text-gray-900">Dummy Kurs – [slug]</h1>
      <p class="mt-3 text-lg text-gray-600">
        Dummy-Inhalt: Kursbeschreibung, Trainer, Zeiten und Level. Später kommen hier echte Daten
        aus dem CMS.
      </p>
      <div class="mt-6 flex flex-wrap gap-3">
        <Button href="/kurse">Zurück zur Übersicht</Button>
        <Button variant="secondary" href="/kontakt">Platz anfragen</Button>
      </div>
    </div>
  </Container>
</Section>
