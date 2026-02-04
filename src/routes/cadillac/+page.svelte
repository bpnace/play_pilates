<script lang="ts">
  import { asset } from '$app/paths';
  import Container from '$lib/components/ui/Container.svelte';
  import Section from '$lib/components/ui/Section.svelte';
  import Button from '$lib/components/ui/Button.svelte';
  import Card from '$lib/components/ui/Card.svelte';
</script>

<Section>
  <Container>
    <div class="relative overflow-hidden rounded-3xl border border-white/10 bg-[rgba(10,10,10,0.75)] shadow-xl chrome-border">
      <div class="absolute inset-0 bg-gradient-to-br from-black via-black/70 to-secondary-900/40"></div>
      <div class="relative z-10 grid gap-10 p-8 md:grid-cols-2 md:items-center md:p-12">
        <div class="ui-panel rounded-3xl p-6 backdrop-blur-xl">
          <p class="ui-micro text-xs text-gray-700">Signature Apparatus</p>
          <h1 class="mt-4 font-heading text-5xl text-gray-900 chrome-text md:text-6xl">
            Der CADILLAC
          </h1>
          <p class="mt-4 text-lg text-gray-600">
            Der Cadillac ist das vielseitigste Pilates-Geraet im Personal Training. In Berlin
            begleite ich dich mit Kraft, Mobilitaet und Kontrolle in einer Session, die sich wie
            ein Upgrade fuer deinen ganzen Koerper anfuehlt.
          </p>
          <div class="mt-6 flex flex-wrap gap-3">
            <Button href="/kontakt">Training anfragen</Button>
            <Button variant="secondary" href="/preise">Pakete ansehen</Button>
          </div>
          <div class="mt-6 flex flex-wrap gap-6 text-sm text-gray-600">
            <div>
              <p class="font-heading text-2xl text-gray-900 chrome-text">60</p>
              <p>Minuten Session</p>
            </div>
            <div>
              <p class="font-heading text-2xl text-gray-900 chrome-text">1:1</p>
              <p>Persoenlich</p>
            </div>
            <div>
              <p class="font-heading text-2xl text-gray-900 chrome-text">100%</p>
              <p>Individuell</p>
            </div>
          </div>
        </div>

        <div class="grid gap-4">
          <Card>
            <img
              src={asset('/images/info/platzhalter.webp')}
              alt="Cadillac Apparat"
              class="mb-4 w-full rounded-xl"
            />
            <p class="text-sm text-gray-500">Trainer Focus</p>
            <p class="mt-2 font-heading text-2xl text-gray-900">Alignment & Kontrolle</p>
            <p class="mt-2 text-sm text-gray-600">
              Die gefuehrten Seile und Federn geben dir klares Feedback und helfen, Bewegungen
              praezise aufzubauen.
            </p>
          </Card>
          <Card>
            <p class="text-sm text-gray-500">Was dich erwartet</p>
            <p class="mt-2 font-heading text-2xl text-gray-900">Athletisch, ruhig, exakt</p>
            <p class="mt-2 text-sm text-gray-600">
              Wir kombinieren fliessende Sequenzen mit kontrollierten Haltephasen fuer eine
              rundum stabile Koerpermitte.
            </p>
            <div class="mt-4 flex flex-wrap gap-2 text-xs text-gray-600">
              <span class="rounded-full border border-white/10 bg-[rgba(255,255,255,0.04)] px-3 py-1">
                Kraftaufbau
              </span>
              <span class="rounded-full border border-white/10 bg-[rgba(255,255,255,0.04)] px-3 py-1">
                Schulterfreiheit
              </span>
              <span class="rounded-full border border-white/10 bg-[rgba(255,255,255,0.04)] px-3 py-1">
                Core Flow
              </span>
            </div>
          </Card>
        </div>
      </div>
    </div>
  </Container>
</Section>

<Section background="gray">
  <Container>
    <div class="flex flex-col gap-8">
      <div>
        <p class="ui-micro text-xs text-gray-700">Der Apparat</p>
        <h2 class="mt-3 font-heading text-4xl text-gray-900 chrome-text">
          Warum der Cadillac besonders ist
        </h2>
        <p class="mt-3 max-w-2xl text-lg text-gray-600">
          Der Cadillac bietet dir Stabilitaet und Freiheit zugleich. Ob Mobilisation, Kraft oder
          Kontrolle: Jede Session passt sich deinem Level an.
        </p>
      </div>

      <div class="grid gap-6 md:grid-cols-3">
        <Card>
          <p class="text-sm text-gray-500">Unterstuetzung</p>
          <p class="mt-2 font-heading text-2xl text-gray-900">Gefuehrte Bewegung</p>
          <p class="mt-2 text-sm text-gray-600">
            Federn und Gurte geben Orientierung und helfen dir, anspruchsvolle Patterns sicher zu
            lernen.
          </p>
        </Card>
        <Card>
          <p class="text-sm text-gray-500">Mobilitaet</p>
          <p class="mt-2 font-heading text-2xl text-gray-900">Offene Ketten</p>
          <p class="mt-2 text-sm text-gray-600">
            Mehr Raum fuer Schulter, Wirbelsaeule und Huefte – ideal fuer einen freien, langen
            Bewegungsbogen.
          </p>
        </Card>
        <Card>
          <p class="text-sm text-gray-500">Kraft</p>
          <p class="mt-2 font-heading text-2xl text-gray-900">Core & Stabilitaet</p>
          <p class="mt-2 text-sm text-gray-600">
            Die Federn liefern Widerstand, der dich fokussiert und deine Koerpermitte aktiviert.
          </p>
        </Card>
      </div>
    </div>
  </Container>
</Section>

<Section>
  <Container>
    <div class="grid gap-8 md:grid-cols-2 md:items-center">
      <div>
        <p class="ui-micro text-xs text-gray-700">Fuer wen geeignet?</p>
        <h2 class="mt-3 font-heading text-4xl text-gray-900 chrome-text">
          Ein Geraet, viele Ziele
        </h2>
        <p class="mt-3 text-lg text-gray-600">
          Ob du neu startest oder gezielt trainierst – wir passen die Session an deinen Koerper und
          deine Tagesform an.
        </p>
      </div>
      <div class="grid gap-3 text-sm text-gray-600 sm:grid-cols-2">
        <div class="rounded-xl border border-white/10 bg-[rgba(255,255,255,0.03)] px-4 py-3">
          Mehr Stabilitaet im Alltag
        </div>
        <div class="rounded-xl border border-white/10 bg-[rgba(255,255,255,0.03)] px-4 py-3">
          Schulter- und Rueckenfreiheit
        </div>
        <div class="rounded-xl border border-white/10 bg-[rgba(255,255,255,0.03)] px-4 py-3">
          Reha-orientiertes Training
        </div>
        <div class="rounded-xl border border-white/10 bg-[rgba(255,255,255,0.03)] px-4 py-3">
          Kraft und Koordination
        </div>
      </div>
    </div>
  </Container>
</Section>

<Section background="gray">
  <Container>
    <div class="ui-panel chrome-border rounded-2xl p-6 text-center">
      <p class="ui-micro text-xs text-gray-700">Bereit fuer deine Session?</p>
      <p class="mt-3 font-heading text-3xl text-gray-900 chrome-text">
        Der CADILLAC wartet auf dich
      </p>
      <p class="mt-3 text-sm text-gray-600">
        Lass uns wissen, welche Ziele du hast – wir empfehlen dir das passende Format.
      </p>
      <div class="mt-6 flex flex-wrap justify-center gap-3">
        <Button href="/kontakt">Session anfragen</Button>
        <Button variant="secondary" href="/preise">Preise ansehen</Button>
      </div>
    </div>
  </Container>
</Section>
