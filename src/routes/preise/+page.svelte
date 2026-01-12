<script lang="ts">
  import Container from '$lib/components/ui/Container.svelte';
  import Section from '$lib/components/ui/Section.svelte';
  import Card from '$lib/components/ui/Card.svelte';
</script>

<Section>
  <Container>
    <div class="flex flex-col gap-8">
      <div>
        <p class="text-sm uppercase tracking-[0.2em] text-gray-500">Preise</p>
        <h1 class="mt-3 font-heading text-5xl text-gray-900">Mitgliedschaften & Pakete</h1>
        <p class="mt-3 max-w-2xl text-lg text-gray-600">
          Dummy-Inhalt: Preisstaffelung, Credits und Probetrainings.
        </p>
      </div>

      <div class="grid gap-6 md:grid-cols-3">
        <Card>
          <p class="text-sm text-gray-500">Starter</p>
          <p class="mt-2 font-heading text-3xl text-gray-900">79€</p>
          <p class="mt-2 text-sm text-gray-600">4 Klassen / Monat</p>
        </Card>
        <Card>
          <p class="text-sm text-gray-500">Core</p>
          <p class="mt-2 font-heading text-3xl text-gray-900">139€</p>
          <p class="mt-2 text-sm text-gray-600">8 Klassen / Monat</p>
        </Card>
        <Card>
          <p class="text-sm text-gray-500">Unlimited</p>
          <p class="mt-2 font-heading text-3xl text-gray-900">199€</p>
          <p class="mt-2 text-sm text-gray-600">Unbegrenzte Klassen</p>
        </Card>
      </div>
    </div>
  </Container>
</Section>
