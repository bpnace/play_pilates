<script lang="ts">
  import Container from '$lib/components/ui/Container.svelte';
  import Section from '$lib/components/ui/Section.svelte';
  import Card from '$lib/components/ui/Card.svelte';
</script>

<Section>
  <Container>
    <div class="flex flex-col gap-8">
      <div>
        <p class="text-sm uppercase tracking-[0.2em] text-gray-500">Mitglieder</p>
        <h1 class="mt-3 font-heading text-5xl text-gray-900">Dashboard</h1>
        <p class="mt-3 max-w-2xl text-lg text-gray-600">
          Dummy-Inhalt: nächste Klassen, Kontodaten, Membership-Status.
        </p>
      </div>

      <div class="grid gap-6 md:grid-cols-3">
        <Card>
          <p class="text-sm text-gray-500">Nächste Klasse</p>
          <p class="mt-2 font-heading text-2xl text-gray-900">Flow & Strength</p>
          <p class="mt-2 text-sm text-gray-600">Di, 19:00 Uhr</p>
        </Card>
        <Card>
          <p class="text-sm text-gray-500">Credits</p>
          <p class="mt-2 font-heading text-2xl text-gray-900">6 übrig</p>
          <p class="mt-2 text-sm text-gray-600">Monatspaket</p>
        </Card>
        <Card>
          <p class="text-sm text-gray-500">Status</p>
          <p class="mt-2 font-heading text-2xl text-gray-900">Aktiv</p>
          <p class="mt-2 text-sm text-gray-600">Nächste Abbuchung: 01.02.</p>
        </Card>
      </div>
    </div>
  </Container>
</Section>
