<script lang="ts">
  import Container from '$lib/components/ui/Container.svelte';
  import Section from '$lib/components/ui/Section.svelte';
  import Card from '$lib/components/ui/Card.svelte';
  import Input from '$lib/components/ui/Input.svelte';
  import Button from '$lib/components/ui/Button.svelte';
</script>

<Section>
  <Container>
    <div class="flex flex-col gap-10">
      <div class="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
        <div class="flex flex-col gap-6">
          <div>
            <p class="ui-micro text-xs text-gray-700">Kontakt</p>
            <h1 class="mt-3 font-heading text-5xl text-gray-900 chrome-text">
              Ich freue mich auf dich
            </h1>
            <p class="mt-3 text-lg text-gray-600">
              Stelle deine Fragen, buche ein Ersttraining oder lass dich zu einem passenden Paket
              beraten.
            </p>
          </div>

          <div class="grid gap-4 sm:grid-cols-2">
            <Card padding="md">
              <p class="ui-micro text-xs text-gray-700">Trainingsort</p>
              <p class="mt-3 text-lg font-semibold text-gray-900">Nina Untch Pilates</p>
              <p class="mt-2 text-sm text-gray-600">Berlin Mitte, 10115 Berlin</p>
            </Card>
            <Card padding="md">
              <p class="ui-micro text-xs text-gray-700">Verfügbarkeit</p>
              <p class="mt-3 text-sm text-gray-600">Mo–So: nach Vereinbarung</p>
            </Card>
            <Card padding="md">
              <p class="ui-micro text-xs text-gray-700">Kontakt</p>
              <p class="mt-3 text-sm text-gray-600">Telefon: +49 30 123 456 78</p>
              <p class="mt-2 text-sm text-gray-600">Mail: hello@ninauntchpilates.de</p>
            </Card>
            <Card padding="md">
              <p class="ui-micro text-xs text-gray-700">Social</p>
              <p class="mt-3 text-sm text-gray-600">Instagram: @ninauntchpilates</p>
              <p class="mt-2 text-sm text-gray-600">TikTok: @ninauntchpilates</p>
            </Card>
          </div>

          <div class="ui-panel chrome-border rounded-2xl p-6">
            <p class="ui-micro text-xs text-gray-700">Erstes Training</p>
            <p class="mt-2 text-lg font-semibold text-gray-900">So läuft dein Ersttraining ab</p>
            <div class="mt-4 grid gap-3 text-sm text-gray-600 sm:grid-cols-2">
              <div class="rounded-xl border border-white/10 bg-[rgba(255,255,255,0.03)] px-4 py-3">
                Check-in 10 Min vor Start, kurze Einführung am Cadillac.
              </div>
              <div class="rounded-xl border border-white/10 bg-[rgba(255,255,255,0.03)] px-4 py-3">
                Bitte rutschfeste Socken und bequeme Kleidung mitbringen.
              </div>
              <div class="rounded-xl border border-white/10 bg-[rgba(255,255,255,0.03)] px-4 py-3">
                Wir arbeiten 1:1 und passen das Training an deine Ziele an.
              </div>
              <div class="rounded-xl border border-white/10 bg-[rgba(255,255,255,0.03)] px-4 py-3">
                Training in Berlin Mitte, Details nach Buchung.
              </div>
            </div>
          </div>
        </div>

        <div class="ui-panel chrome-border rounded-2xl p-6">
          <div class="flex flex-col gap-4">
            <div>
              <p class="ui-micro text-xs text-gray-700">Anfrage</p>
              <p class="mt-2 text-xl font-semibold text-gray-900">Buche dein Ersttraining</p>
              <p class="mt-2 text-sm text-gray-600">
                Wir melden uns innerhalb von 24 Stunden mit Terminvorschlägen.
              </p>
            </div>
            <div class="grid gap-4 sm:grid-cols-2">
              <Input id="name" label="Name" placeholder="Dein Name" />
              <Input id="email" label="E-Mail" type="email" placeholder="name@email.de" />
              <Input id="phone" label="Telefon" type="tel" placeholder="+49 170 000000" />
              <Input id="preferred" label="Wunschzeit" placeholder="z. B. Mo 18:00" />
            </div>
            <label class="block space-y-2">
              <span class="ui-micro text-xs text-gray-700">Nachricht</span>
              <textarea
                id="message"
                class="ui-input min-h-[140px] focus:border-primary-500 focus:ring-2 focus:ring-primary-200"
                placeholder="Wobei können wir helfen?"
              ></textarea>
            </label>
            <Button fullWidth>Absenden (Dummy)</Button>
          </div>
        </div>
      </div>
    </div>
  </Container>
</Section>

<Section background="gray">
  <Container>
    <div class="grid gap-10 lg:grid-cols-[1.2fr_0.8fr]">
      <div
        class="relative overflow-hidden rounded-2xl border border-white/10 bg-[rgba(10,10,10,0.75)] chrome-border"
      >
        <div
          class="absolute inset-0 bg-gradient-to-br from-black via-black/70 to-secondary-900/40"
        ></div>
        <div
          class="absolute left-8 top-8 h-40 w-40 rounded-full border border-dashed border-white/10"
        ></div>
        <div
          class="absolute right-10 top-12 h-24 w-40 rounded-2xl border border-white/10 bg-[rgba(255,255,255,0.04)]"
        ></div>
        <div class="absolute inset-x-10 top-1/2 h-0.5 bg-white/10"></div>
        <div class="absolute left-20 top-10 h-48 w-0.5 bg-white/10"></div>
        <div class="absolute left-1/2 top-14 h-52 w-0.5 bg-white/10"></div>
        <div
          class="absolute left-1/2 top-1/2 flex h-12 w-12 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-primary-600 shadow-lg"
        >
          <span class="h-3 w-3 rounded-full bg-black"></span>
        </div>
        <div
          class="absolute left-6 top-6 rounded-full border border-white/10 bg-[rgba(255,255,255,0.06)] px-3 py-1 text-xs text-gray-700"
        >
          Berlin Mitte (Platzhalter)
        </div>
        <div
          class="absolute bottom-6 right-6 rounded-xl border border-white/10 bg-[rgba(255,255,255,0.06)] px-4 py-3 text-sm text-gray-700"
        >
          Nina Untch Pilates
        </div>
        <div class="relative h-72"></div>
      </div>

      <div class="flex flex-col gap-4">
        <p class="ui-micro text-xs text-gray-700">Anfahrt</p>
        <h2 class="font-heading text-4xl text-gray-900 chrome-text">So findest du mich</h2>
        <p class="text-sm text-gray-600">
          Das Training findet in Berlin Mitte statt. Die genaue Adresse bekommst du nach der
          Buchung. Plane etwas Zeit für das Einchecken ein, damit du entspannt startest.
        </p>
        <div class="grid gap-3 text-sm text-gray-600">
          <div class="rounded-xl border border-white/10 bg-[rgba(255,255,255,0.03)] px-4 py-3">
            ÖPNV: U5, U6 und Bus 42 bis Stadtmitte, dann 3 Minuten zu Fuß.
          </div>
          <div class="rounded-xl border border-white/10 bg-[rgba(255,255,255,0.03)] px-4 py-3">
            Parken: Kurzzeitparkplätze in der Tiefgarage Königsbau.
          </div>
          <div class="rounded-xl border border-white/10 bg-[rgba(255,255,255,0.03)] px-4 py-3">
            Fahrrad: Sichere Stellplätze direkt vor Ort.
          </div>
        </div>
        <div class="mt-2">
          <Button variant="secondary" href="/preise">Pakete ansehen</Button>
        </div>
      </div>
    </div>
  </Container>
</Section>
