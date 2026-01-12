<script lang="ts">
  import Container from '$lib/components/ui/Container.svelte';
  import Section from '$lib/components/ui/Section.svelte';
  import Card from '$lib/components/ui/Card.svelte';
</script>

<Section>
  <Container>
    <div class="flex flex-col gap-8">
      <div>
        <p class="text-sm uppercase tracking-[0.2em] text-gray-500">Über uns</p>
        <h1 class="mt-3 font-heading text-5xl text-gray-900">Team & Studio</h1>
        <p class="mt-3 max-w-2xl text-lg text-gray-600">
          Dummy-Inhalt: Studio-Philosophie, Team-Bio und Trainingsansatz.
        </p>
      </div>

      <div class="grid gap-6 md:grid-cols-3">
        <Card>
          <p class="text-sm text-gray-500">Coach</p>
          <p class="mt-2 font-heading text-2xl text-gray-900">Mara</p>
          <p class="mt-2 text-sm text-gray-600">Reformer & Posture Specialist</p>
        </Card>
        <Card>
          <p class="text-sm text-gray-500">Coach</p>
          <p class="mt-2 font-heading text-2xl text-gray-900">Lina</p>
          <p class="mt-2 text-sm text-gray-600">Strength & Mobility</p>
        </Card>
        <Card>
          <p class="text-sm text-gray-500">Coach</p>
          <p class="mt-2 font-heading text-2xl text-gray-900">Noah</p>
          <p class="mt-2 text-sm text-gray-600">Athletic Reformer Flow</p>
        </Card>
      </div>
    </div>
  </Container>
</Section>
