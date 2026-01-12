<script lang="ts">
  import Container from '$lib/components/ui/Container.svelte';
  import Section from '$lib/components/ui/Section.svelte';
  import Card from '$lib/components/ui/Card.svelte';

  const courses = [
    {
      level: 'Intermediate+',
      title: 'Jumpboard Power',
      description: 'Kraftvolle Intervalle mit Cardio-Fokus und kontrollierter Landung.',
      duration: '50 Min',
      spots: '10 Plätze',
      availability: 'Do, 19:00',
      accent: 'bg-secondary-200 text-secondary-800 border-secondary-300',
    },
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
      level: 'Professional',
      title: 'Precision Lab',
      description: 'Präzise Progressionen mit hoher Kontrolle und Fokus auf Technik.',
      duration: '55 Min',
      spots: '6 Plätze',
      availability: 'Mi, 19:30',
      accent: 'bg-orange-50 text-orange-700 border-orange-200',
    },
    {
      level: 'Beginner+',
      title: 'Mobility Reset',
      description: 'Mobilität, Recovery und kontrollierte Länge für den ganzen Körper.',
      duration: '45 Min',
      spots: '10 Plätze',
      availability: 'Mi, 12:15',
      accent: 'bg-primary-200 text-primary-900 border-primary-300',
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
      level: 'Professional+',
      title: 'Strength Circuit',
      description: 'Intensive Sequenzen mit hohem Widerstand und klarer Progression.',
      duration: '55 Min',
      spots: '6 Plätze',
      availability: 'Sa, 08:00',
      accent: 'bg-orange-200 text-orange-800 border-orange-300',
    },
    {
      level: 'Beginner',
      title: 'Stretch & Breath',
      description: 'Sanfte Dehnung, Atemfokus und ruhige Übergänge für mehr Leichtigkeit.',
      duration: '40 Min',
      spots: '12 Plätze',
      availability: 'Sa, 16:00',
      accent: 'bg-primary-50 text-primary-700 border-primary-200',
    },
    {
      level: 'Intermediate++',
      title: 'Core Balance Lab',
      description: 'Stabilität, Balance und fließende Übergänge mit klaren Progressionen.',
      duration: '50 Min',
      spots: '8 Plätze',
      availability: 'Fr, 07:00',
      accent: 'bg-secondary-300 text-secondary-900 border-secondary-400',
    },
    {
      level: 'Beginner+',
      title: 'Posture Studio',
      description: 'Haltung, Schultergürtel und Rumpf – klare Linien & Stabilität.',
      duration: '45 Min',
      spots: '8 Plätze',
      availability: 'So, 11:00',
      accent: 'bg-primary-200 text-primary-900 border-primary-300',
    },
    {
      level: 'Professional++',
      title: 'Athlete Reformer',
      description: 'Maximale Belastung für erfahrene Mitglieder mit sauberer Technik.',
      duration: '60 Min',
      spots: '6 Plätze',
      availability: 'So, 08:30',
      accent: 'bg-orange-300 text-orange-900 border-orange-400',
    },
  ];

  const weekSchedule = [
    {
      day: 'Mo',
      time: '07:30',
      title: 'Foundations',
      level: 'Beginner',
      dot: 'bg-primary-500',
    },
    {
      day: 'Di',
      time: '18:00',
      title: 'Flow & Strength',
      level: 'Intermediate',
      dot: 'bg-secondary-400',
    },
    {
      day: 'Mi',
      time: '12:15',
      title: 'Mobility Reset',
      level: 'Beginner+',
      dot: 'bg-primary-700',
    },
    {
      day: 'Do',
      time: '19:00',
      title: 'Jumpboard Power',
      level: 'Intermediate+',
      dot: 'bg-secondary-500',
    },
    {
      day: 'Fr',
      time: '07:00',
      title: 'Core Balance Lab',
      level: 'Intermediate++',
      dot: 'bg-secondary-700',
    },
    {
      day: 'Sa',
      time: '08:00',
      title: 'Strength Circuit',
      level: 'Professional+',
      dot: 'bg-orange-500',
    },
    {
      day: 'So',
      time: '08:30',
      title: 'Athlete Reformer',
      level: 'Professional++',
      dot: 'bg-orange-600',
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

      <div class="rounded-3xl border border-gray-200 bg-white">
        <div
          class="flex flex-wrap items-center justify-between gap-3 border-b border-gray-200 bg-gray-50 px-6 py-4"
        >
          <div>
            <p class="text-xs font-semibold uppercase tracking-[0.2em] text-gray-500">Wochenplan</p>
            <p class="mt-2 text-sm text-gray-600">Aktuelle Woche · reduzierte Ansicht</p>
          </div>
          <span class="text-xs text-gray-400">Vorschau</span>
        </div>

        <div
          class="grid grid-cols-2 divide-x divide-y divide-gray-100 text-left sm:grid-cols-4 lg:grid-cols-7 lg:divide-y-0"
        >
          {#each weekSchedule as slot (slot.day)}
            <div class="p-4">
              <div class="flex items-center justify-between text-[11px] text-gray-500">
                <span class="font-semibold uppercase tracking-[0.2em]">{slot.day}</span>
                <span class="font-medium text-gray-700">{slot.time}</span>
              </div>
              <p class="mt-3 text-sm font-semibold text-gray-900">{slot.title}</p>
              <div class="mt-2 flex items-center gap-2 text-[10px] uppercase tracking-[0.2em] text-gray-500">
                <span class={`h-1.5 w-1.5 rounded-full ${slot.dot}`}></span>
                <span>{slot.level}</span>
              </div>
            </div>
          {/each}
        </div>
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
