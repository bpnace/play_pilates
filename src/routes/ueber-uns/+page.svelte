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
      bio: 'Klarer Fokus auf Haltung, Atmung und präzise Linien. Sie arbeitet mit feinen Korrekturen, damit jede Bewegung sauber sitzt.',
      image: asset('/images/team/team-1.svg'),
    },
    {
      role: 'Coach',
      name: 'Marie',
      focus: 'Strength & Mobility',
      bio: 'Verbindet Kraft und Beweglichkeit in fließenden Sequenzen. Ihr Stil ist klar strukturiert und ideal für Progressionen.',
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

  const stats = [
    { value: '300+', label: 'Kursteilnehmer' },
    { value: '99%', label: 'Zufriedenheit' },
    { value: '5', label: 'Coaches im Team' },
    { value: '25', label: 'Klassen pro Woche' },
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

      <div class="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {#each stats as stat (stat.label)}
          <div class="rounded-2xl border border-gray-200 bg-white p-6 text-center shadow-sm">
            <p class="font-heading text-3xl text-gray-900">{stat.value}</p>
            <p class="mt-2 text-sm text-gray-500">{stat.label}</p>
          </div>
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
          Play Pilates entstand aus einem sehr persönlichen Wunsch: ein Reformer-Training zu
          schaffen, das sich ruhig, klar und sicher anfühlt. Ein Ort, an dem Technik nicht laut,
          sondern präzise ist, und an dem Fortschritt nicht drückt, sondern begleitet. Wir wollen,
          dass jede Stunde wie ein Reset wirkt, für Körper und Kopf.
        </p>
        <p class="mt-4 text-lg text-gray-600">
          Unsere Coaches kommen aus Tanz, Athletik und Therapie, und genau diese Mischung prägt den
          Stil: kraftvoll, aber nie hektisch; kontrolliert, aber nie starr. Jede Klasse folgt einem
          vertrauten Aufbau mit Warm-up, Fokus-Block und Integration, damit du dich sicher fühlst
          und gleichzeitig neue Reize bekommst.
        </p>
        <p class="mt-4 text-lg text-gray-600">
          In der Konzeptphase haben wir mit kleinen Pilotgruppen gearbeitet, um Flow, Tempo und
          Cueing zu testen. Aus echtem Feedback wurden die heutigen Formate geformt, und bis heute
          passen wir Details an, wenn wir merken, dass etwas sich noch leichter oder klarer anfühlen
          kann. Das ist für uns die wichtigste Qualität: zuhören, optimieren, spürbar machen.
        </p>
        <p class="mt-4 text-lg text-gray-600">
          Der nächste Schritt ist die Anbindung an das CMS. So können wir Inhalte, Kurse und Team
          zentral pflegen und den Fokus weiterhin auf das Wesentliche legen: Räume, in denen du dich
          gut aufgehoben fühlst, und ein Training, das dich wirklich weiterbringt.
        </p>
        <div class="clear-both"></div>
      </div>
    </div>
  </Container>
</Section>
