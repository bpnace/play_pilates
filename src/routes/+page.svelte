<script lang="ts">
  import { asset } from '$app/paths';
  import Container from '$lib/components/ui/Container.svelte';
  import Button from '$lib/components/ui/Button.svelte';

  const highlights = [
    {
      title: 'Praezise Federnarbeit',
      meta: 'Cadillac Setup',
      time: '60 Min',
      desc: 'Saubere Linien, klare Range und gefuehrtes Feedback am Cadillac Reformer.',
    },
    {
      title: 'Hands-on Coaching',
      meta: 'Personal Training',
      time: '1:1 Fokus',
      desc: 'Feine Korrekturen, angepasst an deinen Koerper, deine Ziele und deinen Alltag.',
    },
    {
      title: 'Individuelle Ziele',
      meta: 'Progression',
      time: 'Woche fuer Woche',
      desc: 'Du trainierst ohne Gruppendruck und bleibst in einem Tempo, das zu dir passt.',
    },
  ];

  const flow = [
    {
      time: '5-10 Min',
      title: 'Check-in & Zielsetzung',
      desc: 'Kurzer Status, Atem, Beweglichkeit, danach setzen wir den Fokus der Session.',
    },
    {
      time: '40 Min',
      title: 'Cadillac Flow',
      desc: 'Gefuehrte Sequenzen fuer Kraft, Kontrolle und saubere Gelenkachsen.',
    },
    {
      time: '10 Min',
      title: 'Integration & Stretch',
      desc: 'Ausklang mit Mobilisation und ruhigem Stretch fuer ein klares Koerpergefuehl.',
    },
  ];

  const metrics = [
    { value: '1:1', label: 'Betreuung' },
    { value: '60', label: 'Minuten' },
    { value: 'Berlin', label: 'Studio' },
  ];
</script>

<section class="hero">
  <div class="hero__wash"></div>
  <div class="hero__grain grain-overlay"></div>

  <Container maxWidth="full" noPadding>
    <div class="hero__inner">
      <div class="hero__content">
        <div class="flex flex-wrap items-center gap-4">
          <span class="ui-micro text-gray-700">Cadillac Reformer</span>
          <span class="ui-micro text-gray-700">Berlin Wilmerfsdorf</span>
        </div>

        <div class="hero__mask" aria-hidden="true">
          <div class="hero__mask-glow"></div>
          <div class="hero__mask-media">
            <video
              class="hero__mask-video"
              src={asset('/images/hero/heroPilates2.webm')}
              autoplay
              loop
              muted
              playsinline
              preload="metadata"
              aria-hidden="true"
              tabindex="-1"
            ></video>
          </div>
          <div class="hero__mask-fallback">
            <span>Nina</span>
            <span>Untch</span>
          </div>
        </div>
        <h1 class="sr-only">Nina Untch Pilates</h1>
        <div class="hero__title-sub chrome-text">Pilates</div>

        <p class="hero__lede">
          Individuelle Cadillac Reformer Sessions in Berlin. Praezise Betreuung, klare Struktur,
          volle Aufmerksamkeit.
        </p>

        <div class="hero__cta">
          <Button href="/kontakt">Probestunde</Button>
          <Button variant="secondary" href="/cadillac">Cadillac Training</Button>
        </div>
      </div>

      <div class="hero__blur chrome-border">
        <p class="ui-micro text-gray-700">Session Profil</p>
        <p class="hero__panel-title">60 Min · 1:1</p>
        <p class="hero__panel-text">
          Ruhig, praezise, technisch. Wir arbeiten am Cadillac fuer Kraft, Haltung und Fokus.
        </p>
        <div class="ui-divider mt-6"></div>
        <div class="hero__panel-metrics">
          {#each metrics as metric (metric.label)}
            <div>
              <p class="hero__metric-value">{metric.value}</p>
              <p class="ui-micro text-[0.55rem] text-gray-700">{metric.label}</p>
            </div>
          {/each}
        </div>
      </div>
    </div>
  </Container>
</section>

<section class="section-editorial">
  <Container>
    <div class="flex flex-col gap-6">
      <div>
        <p class="ui-micro text-gray-700">Training Highlights</p>
        <h2 class="editorial-heading ui-outline">Highlights</h2>
        <p class="mt-3 max-w-2xl text-sm text-gray-700">
          Schwerpunkte aus dem Cadillac Personal Training in Berlin. Klar strukturiert, ohne
          Ablenkung.
        </p>
      </div>

      <div class="editorial-list">
        {#each highlights as item (item.title)}
          <div class="editorial-item">
            <div>
              <p class="editorial-title">{item.title}</p>
              <p class="editorial-meta">{item.meta} · {item.time}</p>
            </div>
            <p class="editorial-desc">{item.desc}</p>
          </div>
        {/each}
      </div>
    </div>
  </Container>
</section>

<section class="section-editorial section-editorial--alt">
  <Container>
    <div class="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
      <div>
        <p class="ui-micro text-gray-700">Session</p>
        <h2 class="editorial-heading">Ablauf</h2>
        <p class="mt-3 text-sm text-gray-700">
          Beispielstruktur fuer eine 60-Minuten Einheit am Cadillac Reformer.
        </p>
      </div>

      <div class="timeline">
        {#each flow as step (step.title)}
          <div class="timeline-item">
            <p class="timeline-time">{step.time}</p>
            <p class="timeline-title">{step.title}</p>
            <p class="text-sm text-gray-700">{step.desc}</p>
          </div>
        {/each}
      </div>
    </div>
  </Container>
</section>

<section class="section-editorial">
  <Container>
    <div class="cta-panel chrome-border">
      <div>
        <p class="ui-micro text-gray-700">Bereit fuer deine Session?</p>
        <h2 class="editorial-heading chrome-text">Start</h2>
        <p class="mt-3 max-w-xl text-sm text-gray-700">
          Lass uns wissen, welche Ziele du hast. Ich empfehle dir das passende Format und die
          richtige Intensitaet.
        </p>
      </div>
      <div class="hero__cta">
        <Button href="/kontakt">Session anfragen</Button>
        <Button variant="secondary" href="/preise">Preise ansehen</Button>
      </div>
    </div>
  </Container>
</section>
