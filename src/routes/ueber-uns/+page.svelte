<script lang="ts">
  import { asset } from '$app/paths';
  import Container from '$lib/components/ui/Container.svelte';
  import Section from '$lib/components/ui/Section.svelte';
  import Card from '$lib/components/ui/Card.svelte';

  const team = [
    {
      role: 'Coach',
      name: 'Nina',
      focus: 'Reformer & Posture Specialist',
      bio: 'Klarer Fokus auf Haltung, Atmung und präzise Linien.',
      image: asset('/images/team/team-1.svg'),
    },
    {
      role: 'Coach',
      name: 'Marie',
      focus: 'Strength & Mobility',
      bio: 'Verbindet Kraft und Beweglichkeit in fließenden Sequenzen.',
      image: asset('/images/team/team-2.svg'),
    },
    {
      role: 'Coach',
      name: 'Noah',
      focus: 'Athletic Reformer Flow',
      bio: 'Dynamische Progressionen mit Fokus auf Stabilität.',
      image: asset('/images/team/team-3.svg'),
    },
  ];
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
        {#each team as member (member.name)}
          <Card>
            <img
              src={member.image}
              alt={`${member.name} Profilbild`}
              class="h-56 w-full rounded-xl border border-gray-200 object-cover"
            />
            <p class="mt-4 text-sm uppercase tracking-[0.2em] text-gray-500">{member.role}</p>
            <p class="mt-2 font-heading text-2xl text-gray-900">{member.name}</p>
            <p class="mt-2 text-sm text-gray-600">{member.focus}</p>
            <p class="mt-3 text-sm text-gray-500">{member.bio}</p>
          </Card>
        {/each}
      </div>
    </div>
  </Container>
</Section>
