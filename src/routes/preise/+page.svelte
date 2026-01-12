<script lang="ts">
  import { asset } from '$app/paths';
  import Container from '$lib/components/ui/Container.svelte';
  import Section from '$lib/components/ui/Section.svelte';
  import Card from '$lib/components/ui/Card.svelte';
  import Button from '$lib/components/ui/Button.svelte';

  const packs = [
    {
      flag: null,
      title: 'Einzelklasse',
      description: 'Ideal zum Reinschnuppern oder für spontane Termine.',
      price: '22€',
      priceNote: 'pro Klasse',
      features: ['1 Klasse', 'gültig 7 Tage', 'online buchbar'],
      accent: 'bg-primary-600 text-white border-primary-600',
      band: 'bg-primary-500',
      imageBg: 'bg-primary-100',
      imageBorder: 'border-primary-200',
      flagClass: 'bg-primary-600 text-white',
      dot: 'bg-primary-600',
      image: asset('/images/pricing/pack-dropin.svg'),
    },
    {
      flag: null,
      title: '5er Karte',
      description: 'Für alle, die flexibel bleiben und regelmäßig trainieren.',
      price: '95€',
      priceNote: 'für 5 Klassen',
      features: ['5 Klassen', 'gültig 2 Monate', 'teilbar'],
      accent: 'bg-accent-600 text-white border-accent-600',
      band: 'bg-accent-500',
      imageBg: 'bg-accent-100',
      imageBorder: 'border-accent-200',
      flagClass: 'bg-accent-600 text-white',
      dot: 'bg-primary-600',
      image: asset('/images/pricing/pack-5.svg'),
    },
    {
      flag: 'Beliebt',
      title: '10er Karte',
      description: 'Ideal für 2x pro Woche mit planbarer Routine.',
      price: '175€',
      priceNote: 'für 10 Klassen',
      features: ['10 Klassen', 'gültig 4 Monate', 'beste Flexibilität'],
      accent: 'bg-secondary-600 text-white border-secondary-600',
      band: 'bg-secondary-500',
      imageBg: 'bg-secondary-100',
      imageBorder: 'border-secondary-200',
      flagClass: 'bg-secondary-600 text-white',
      dot: 'bg-primary-600',
      image: asset('/images/pricing/pack-10.svg'),
    },
    {
      flag: null,
      title: '20er Karte',
      description: 'Maximale Ersparnis für konsequentes Training.',
      price: '320€',
      priceNote: 'für 20 Klassen',
      features: ['20 Klassen', 'gültig 6 Monate', 'bester Preis pro Klasse'],
      accent: 'bg-purple-600 text-white border-purple-600',
      band: 'bg-purple-500',
      imageBg: 'bg-purple-100',
      imageBorder: 'border-purple-200',
      flagClass: 'bg-purple-600 text-white',
      dot: 'bg-primary-600',
      image: asset('/images/pricing/pack-20.svg'),
    },
  ];

  const memberships = [
    {
      badge: 'Monatlich',
      title: 'Monatsabo',
      description: 'Ideal für einen intensiven Monat ohne langfristige Bindung.',
      price: '149€',
      priceNote: 'pro Monat',
      features: ['monatlich kündbar', 'priorisierte Warteliste', '1 Bonus-Workshop'],
      accent: 'bg-primary-50 text-primary-700 border-primary-200',
      dot: 'bg-secondary-500',
      image: asset('/images/pricing/membership-month.svg'),
    },
    {
      badge: 'Quartal',
      title: 'Quartalsabo',
      description: 'Spare monatlich und sichere dir feste Klassenplätze.',
      price: '129€',
      priceNote: 'pro Monat',
      features: ['3 Monate Laufzeit', '5% sparen', '1 Gastpass/Monat'],
      accent: 'bg-secondary-50 text-secondary-700 border-secondary-200',
      dot: 'bg-secondary-500',
      image: asset('/images/pricing/membership-quarter.svg'),
    },
    {
      badge: 'Jahr',
      title: 'Jahresabo',
      description: 'Unser bestes Gesamtpaket für konstante Fortschritte.',
      price: '109€',
      priceNote: 'pro Monat',
      features: ['12 Monate Laufzeit', '2 Privatstunden inklusive', 'beste Preisgarantie'],
      accent: 'bg-purple-50 text-purple-700 border-purple-200',
      dot: 'bg-secondary-500',
      image: asset('/images/pricing/membership-year.svg'),
    },
  ];

  const notes = [
    {
      title: 'Inklusive',
      text: 'Alle Preise verstehen sich inkl. MwSt. und Nutzung der Umkleiden.',
    },
    {
      title: 'Starttermine',
      text: 'Mitgliedschaften starten zum 1. oder 15. des Monats.',
    },
    {
      title: 'Flexibel',
      text: 'Kartenpakete sind übertragbar und ideal für Schichtpläne.',
    },
  ];
</script>

<Section>
  <Container>
    <div class="flex flex-col gap-10">
      <div>
        <p class="text-sm uppercase tracking-[0.2em] text-gray-500">Preise</p>
        <h1 class="mt-3 font-heading text-5xl text-gray-900">Pakete & Mitgliedschaften</h1>
        <p class="mt-3 max-w-2xl text-lg text-gray-600">
          Übersicht unserer Kartenpakete und Abos. Alle Inhalte sind Platzhalter und werden später
          mit finalen Preisen ersetzt.
        </p>
      </div>

      <div>
        <div class="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p class="text-xs font-semibold uppercase tracking-[0.2em] text-gray-500">
              Kartenpakete
            </p>
            <h2 class="mt-2 font-heading text-3xl text-gray-900">Einzelkarten & Mehrfachkarten</h2>
            <p class="mt-2 max-w-2xl text-sm text-gray-600">
              Für flexible Trainingspläne: kurze Laufzeiten, klare Preise und volle Kontrolle.
            </p>
          </div>
          <div class="px-4 py-2 text-xs text-gray-400">
            *Preise pro Klasse sinken mit jedem Paket
          </div>
        </div>

        <div class="mt-6 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {#each packs as pack (pack.title)}
            <Card padding="lg">
              <div
                class={`relative mt-4 rounded-2xl border-2 ${pack.imageBorder} ${pack.imageBg} p-4`}
              >
                <img
                  src={pack.image}
                  alt={`Grafik ${pack.title}`}
                  class="h-28 w-full object-contain"
                  loading="lazy"
                />
              </div>
              <div class="mt-4 flex flex-wrap items-center gap-2">
                <p class="font-heading text-2xl text-gray-900">{pack.title}</p>
                {#if pack.flag}
                  <span
                    class={`rounded-full border px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] ${pack.flagClass}`}
                  >
                    {pack.flag}
                  </span>
                {/if}
              </div>
              <p class="mt-2 text-sm text-gray-600">{pack.description}</p>
              <div class="mt-4 flex items-baseline gap-2">
                <span class="font-heading text-3xl text-gray-900">{pack.price}</span>
                <span class="text-sm text-gray-500">{pack.priceNote}</span>
              </div>
              <ul class="mt-4 space-y-2 text-sm text-gray-600">
                {#each pack.features as feature}
                  <li class="flex items-start gap-2">
                    <span class={`mt-2 h-1.5 w-1.5 rounded-full ${pack.dot}`}></span>
                    <span>{feature}</span>
                  </li>
                {/each}
              </ul>
              <div class="mt-6">
                <Button variant="secondary" size="sm" fullWidth href="/kontakt">
                  Paket anfragen
                </Button>
              </div>
            </Card>
          {/each}
        </div>
      </div>
    </div>
  </Container>
</Section>

<Section background="gray">
  <Container>
    <div class="flex flex-col gap-10">
      <div>
        <p class="text-xs font-semibold uppercase tracking-[0.2em] text-gray-500">Mitgliedschaft</p>
        <h2 class="mt-2 font-heading text-4xl text-gray-900">Abo Pakete</h2>
        <p class="mt-2 max-w-2xl text-sm text-gray-600">
          Ideal, wenn du dauerhaft trainieren willst und dir feste Zeiten sichern möchtest.
        </p>
      </div>

      <div class="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {#each memberships as plan (plan.title)}
          <Card padding="lg">
            <div class="mt-4 rounded-xl border border-dashed border-gray-200 bg-gray-50 p-4">
              <img
                src={plan.image}
                alt={`Grafik ${plan.title}`}
                class="h-28 w-full object-contain"
                loading="lazy"
              />
            </div>
            <p class="mt-4 font-heading text-2xl text-gray-900">{plan.title}</p>
            <p class="mt-2 text-sm text-gray-600">{plan.description}</p>
            <div class="mt-4 flex items-baseline gap-2">
              <span class="font-heading text-3xl text-gray-900">{plan.price}</span>
              <span class="text-sm text-gray-500">{plan.priceNote}</span>
            </div>
            <ul class="mt-4 space-y-2 text-sm text-gray-600">
              {#each plan.features as feature}
                <li class="flex items-start gap-2">
                  <span class={`mt-2 h-1.5 w-1.5 rounded-full ${plan.dot}`}></span>
                  <span>{feature}</span>
                </li>
              {/each}
            </ul>
            <div class="mt-6">
              <Button variant="primary" size="sm" fullWidth href="/kontakt">
                Abo anfragen
              </Button>
            </div>
          </Card>
        {/each}
      </div>

      <div class="grid gap-4 md:grid-cols-3">
        {#each notes as note (note.title)}
          <div class="rounded-xl border border-gray-200 bg-white p-4 text-sm text-gray-600">
            <p class="text-xs font-semibold uppercase tracking-[0.2em] text-gray-500">
              {note.title}
            </p>
            <p class="mt-2">{note.text}</p>
          </div>
        {/each}
      </div>

      <div class="rounded-2xl border border-gray-200 bg-white p-6">
        <div class="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <p class="text-sm uppercase tracking-[0.2em] text-gray-500">Individuelle Beratung</p>
            <p class="mt-2 text-lg font-semibold text-gray-900">
              Du brauchst Hilfe bei der Auswahl? Wir beraten dich persönlich.
            </p>
            <p class="mt-2 text-sm text-gray-600">
              Gemeinsam finden wir das passende Paket für deinen Alltag.
            </p>
          </div>
          <Button variant="secondary" href="/kontakt">Beratung anfragen</Button>
        </div>
      </div>
    </div>
  </Container>
</Section>
