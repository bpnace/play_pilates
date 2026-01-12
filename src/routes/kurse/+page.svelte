<script lang="ts">
  import Container from '$lib/components/ui/Container.svelte';
  import Section from '$lib/components/ui/Section.svelte';
  import Card from '$lib/components/ui/Card.svelte';

  const courses = [
    {
      level: 'Beginner',
      title: 'Foundations',
      description: 'Technik, Atmung und kontrollierte Übergänge. Perfekt zum Einstieg.',
      duration: '45 Min',
      spots: '8 Plätze',
      availability: 'Mo & Do, 07:30',
      accent: 'bg-primary-50 text-primary-700 border-primary-200',
    },
    {
      level: 'Intermediate',
      title: 'Flow & Strength',
      description: 'Dynamische Sequenzen mit Fokus auf Stabilität und Core-Kraft.',
      duration: '50 Min',
      spots: '10 Plätze',
      availability: 'Di & Fr, 18:00',
      accent: 'bg-secondary-50 text-secondary-700 border-secondary-200',
    },
    {
      level: 'Advanced',
      title: 'Precision Lab',
      description: 'Präzise Progressionen für Fortgeschrittene mit hoher Kontrolle.',
      duration: '55 Min',
      spots: '6 Plätze',
      availability: 'Mi, 19:30',
      accent: 'bg-purple-50 text-purple-700 border-purple-200',
    },
    {
      level: 'All Levels',
      title: 'Mobility Reset',
      description: 'Mobilität, Recovery und kontrollierte Länge für den ganzen Körper.',
      duration: '40 Min',
      spots: '12 Plätze',
      availability: 'Sa, 10:00',
      accent: 'bg-gray-50 text-gray-700 border-gray-200',
    },
    {
      level: 'Beginner+',
      title: 'Posture Studio',
      description: 'Haltung, Schultergürtel und Rumpf – klare Linien & Stabilität.',
      duration: '45 Min',
      spots: '8 Plätze',
      availability: 'So, 11:00',
      accent: 'bg-primary-50 text-primary-700 border-primary-200',
    },
  ];
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

      <div class="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {#each courses as course (course.title)}
          <Card>
            <div
              class={`rounded-xl border ${course.accent} p-3 text-xs font-semibold uppercase tracking-[0.2em]`}
            >
              {course.level}
            </div>
            <div class="mt-4 h-36 rounded-xl border border-dashed border-gray-200 bg-gray-50"></div>
            <p class="mt-4 font-heading text-2xl text-gray-900">{course.title}</p>
            <p class="mt-2 text-sm text-gray-600">{course.description}</p>
            <div class="mt-4 flex flex-wrap gap-3 text-xs text-gray-600">
              <span class="rounded-full border border-gray-200 px-3 py-1">{course.duration}</span>
              <span class="rounded-full border border-gray-200 px-3 py-1">{course.spots}</span>
              <span class="rounded-full border border-gray-200 px-3 py-1"
                >{course.availability}</span
              >
            </div>
          </Card>
        {/each}
      </div>
    </div>
  </Container>
</Section>
