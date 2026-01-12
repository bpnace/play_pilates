<script lang="ts">
  import Container from '$lib/components/ui/Container.svelte';
  import Section from '$lib/components/ui/Section.svelte';
  import Button from '$lib/components/ui/Button.svelte';
</script>

<Section>
  <Container>
    <div class="max-w-3xl">
      <p class="text-sm uppercase tracking-[0.2em] text-gray-500">Blog Artikel</p>
      <h1 class="mt-3 font-heading text-5xl text-gray-900">Dummy Artikel – [slug]</h1>
      <p class="mt-3 text-lg text-gray-600">
        Dummy-Inhalt: Artikeltext mit Einleitung, Tipps und Fazit. Später wird der Content aus
        Drupal geladen.
      </p>
      <div class="mt-6 flex flex-wrap gap-3">
        <Button href="/blog">Zurück zum Blog</Button>
      </div>
    </div>
  </Container>
</Section>
