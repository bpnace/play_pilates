<script lang="ts">
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
      </div>
      <div class="grid gap-4">
        <Card>
          <p class="text-sm text-gray-500">Studio Fokus</p>
          <p class="mt-2 text-2xl font-heading text-gray-900">Reformer</p>
          <p class="mt-2 text-sm text-gray-600">
            Präzise Bewegungen mit maximaler Kontrolle und fließender Dynamik.
          </p>
        </Card>
        <Card>
          <p class="text-sm text-gray-500">Small Groups</p>
          <p class="mt-2 text-2xl font-heading text-gray-900">Max 8 Plätze</p>
          <p class="mt-2 text-sm text-gray-600">
            Persönliche Korrekturen und klare Progression – jede Woche spürbar.
          </p>
        </Card>
      </div>
    </div>
  </Container>
</Section>
