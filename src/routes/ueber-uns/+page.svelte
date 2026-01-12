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

      <div class="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm">
        <img
          src={asset('/images/team/about-1.svg')}
          alt="Studio Story Placeholder"
          class="mb-6 w-full rounded-2xl border border-gray-200 md:float-right md:mb-4 md:ml-6 md:w-72"
        />
        <p class="text-sm uppercase tracking-[0.2em] text-gray-500">Werdegang</p>
        <h2 class="mt-3 font-heading text-4xl text-gray-900">Idee & Umsetzung</h2>
        <p class="mt-3 text-lg text-gray-600">
          Dummy-Text: Play Pilates entstand aus dem Wunsch, Reformer-Training klar, fokussiert und
          zugänglich zu machen. Wir verbinden präzise Technik mit einem ruhigen Studio‑Rhythmus, der
          Training und Alltag in Balance bringt.
        </p>
        <p class="mt-4 text-lg text-gray-600">
          Dummy-Text: Unsere Coaches kommen aus Tanz, Athletik und Therapie. Jede Klasse folgt einem
          klaren Aufbau: Warm‑up, Fokus‑Block, Integration. So entsteht ein Training, das Woche für
          Woche spürbar wirkt.
        </p>
        <p class="mt-4 text-lg text-gray-600">
          Dummy-Text: Der nächste Schritt ist die Anbindung an das CMS. Inhalte, Kurse und Team
          lassen sich dann zentral pflegen und automatisch im Frontend ausspielen.
        </p>
        <div class="clear-both"></div>
      </div>
    </div>
  </Container>
</Section>
