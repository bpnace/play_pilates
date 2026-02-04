<script lang="ts">
  import { asset } from '$app/paths';
  import Container from '$lib/components/ui/Container.svelte';
  import Section from '$lib/components/ui/Section.svelte';
  import Card from '$lib/components/ui/Card.svelte';

  const team = [
    {
      role: 'Personal Trainerin',
      name: 'Nina Untch',
      focus: 'Cadillac Reformer Training · Berlin',
      bio: 'Fokus auf Haltung, Atmung und kontrollierte Bewegung. Jede Session ist 1:1 und auf dich abgestimmt.',
      image: asset('/images/team/team-1.svg'),
    },
  ];

  const stats = [
    { value: '1:1', label: 'Betreuung' },
    { value: '8+', label: 'Jahre Erfahrung' },
    { value: 'Berlin', label: 'Standort' },
    { value: 'Cadillac', label: 'Spezialisierung' },
  ];
</script>

<Section>
  <Container>
    <div class="flex flex-col gap-8">
      <div>
        <p class="ui-micro text-xs text-gray-700">Ueber mich</p>
        <h1 class="mt-3 font-heading text-5xl text-gray-900 chrome-text">Personal Training</h1>
        <p class="mt-3 max-w-2xl text-lg text-gray-600">
          Persönliches Cadillac Reformer Training in Berlin, klar strukturiert und auf dich
          ausgerichtet.
        </p>
      </div>

      <div class="grid gap-6 md:grid-cols-3">
        {#each team as member (member.name)}
          <Card>
            <img
              src={member.image}
              alt={`${member.name} Profilbild`}
              class="h-56 w-full rounded-xl border border-white/10 object-cover"
            />
            <p class="mt-4 ui-micro text-xs text-gray-700">{member.role}</p>
            <p class="mt-2 font-heading text-2xl text-gray-900">{member.name}</p>
            <p class="mt-2 text-sm text-gray-600">{member.focus}</p>
            <p class="mt-3 text-sm text-gray-500">{member.bio}</p>
          </Card>
        {/each}
      </div>

      <div class="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {#each stats as stat (stat.label)}
          <div class="ui-panel rounded-2xl p-6 text-center">
            <p class="font-heading text-3xl text-gray-900 chrome-text">{stat.value}</p>
            <p class="mt-2 text-sm text-gray-500">{stat.label}</p>
          </div>
        {/each}
      </div>

      <div class="ui-panel chrome-border rounded-2xl p-8">
        <img
          src={asset('/images/team/about-1.svg')}
          alt="Trainerin Story Placeholder"
          class="mb-6 w-full rounded-2xl border border-white/10 md:float-right md:mb-4 md:ml-6 md:w-72"
        />
        <p class="ui-micro text-xs text-gray-700">Arbeitsweise</p>
        <h2 class="mt-3 font-heading text-4xl text-gray-900 chrome-text">Mein Ansatz</h2>
        <p class="mt-3 text-lg text-gray-600">
          Nina Untch Pilates steht fuer persoenliches Cadillac Reformer Training in Berlin. Ich
          arbeite 1:1, ruhig und praezise, damit du Kraft, Mobilitaet und Kontrolle aufbauen
          kannst.
        </p>
        <p class="mt-4 text-lg text-gray-600">
          Jede Session startet mit einem kurzen Check-in. Danach folgen gezielte Sequenzen am
          Cadillac, die deine Haltung stabilisieren und deine Bewegungsqualitaet verbessern.
        </p>
        <p class="mt-4 text-lg text-gray-600">
          Mein Anspruch ist klar: Fortschritt ohne Druck. Du bekommst feine Korrekturen, klares
          Cueing und einen Plan, der zu deinem Alltag passt.
        </p>
        <div class="clear-both"></div>
      </div>
    </div>
  </Container>
</Section>
