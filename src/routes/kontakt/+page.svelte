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
            <p class="text-sm uppercase tracking-[0.2em] text-gray-500">Kontakt</p>
            <h1 class="mt-3 font-heading text-5xl text-gray-900">Wir freuen uns auf dich</h1>
            <p class="mt-3 text-lg text-gray-600">
              Stelle deine Fragen, buche eine Probestunde oder lass dich zu einem passenden Paket
              beraten. Alle Angaben sind Platzhalter und werden später ersetzt.
            </p>
          </div>

          <div class="grid gap-4 sm:grid-cols-2">
            <Card padding="md">
              <p class="text-xs font-semibold uppercase tracking-[0.2em] text-gray-500">Adresse</p>
              <p class="mt-3 text-lg font-semibold text-gray-900">Play Pilates Studio</p>
              <p class="mt-2 text-sm text-gray-600">Musterstraße 18, 70173 Stuttgart</p>
            </Card>
            <Card padding="md">
              <p class="text-xs font-semibold uppercase tracking-[0.2em] text-gray-500">
                Öffnungszeiten
              </p>
              <p class="mt-3 text-sm text-gray-600">Mo–Fr: 07:00–21:00 Uhr</p>
              <p class="mt-2 text-sm text-gray-600">Sa–So: 09:00–18:00 Uhr</p>
            </Card>
            <Card padding="md">
              <p class="text-xs font-semibold uppercase tracking-[0.2em] text-gray-500">Kontakt</p>
              <p class="mt-3 text-sm text-gray-600">Telefon: +49 711 000 123</p>
              <p class="mt-2 text-sm text-gray-600">Mail: hello@playpilates.de</p>
            </Card>
            <Card padding="md">
              <p class="text-xs font-semibold uppercase tracking-[0.2em] text-gray-500">Social</p>
              <p class="mt-3 text-sm text-gray-600">Instagram: @playpilates</p>
              <p class="mt-2 text-sm text-gray-600">TikTok: @playpilates</p>
            </Card>
          </div>

          <div class="rounded-2xl border border-gray-200 bg-white p-6">
            <p class="text-sm uppercase tracking-[0.2em] text-gray-500">Erster Besuch</p>
            <p class="mt-2 text-lg font-semibold text-gray-900">
              So läuft deine Probestunde ab
            </p>
            <div class="mt-4 grid gap-3 text-sm text-gray-600 sm:grid-cols-2">
              <div class="rounded-xl border border-gray-200 bg-gray-50 px-4 py-3">
                Check-in 10 Min vor Start, kurze Einführung am Reformer.
              </div>
              <div class="rounded-xl border border-gray-200 bg-gray-50 px-4 py-3">
                Bitte rutschfeste Socken mitbringen oder vor Ort erwerben.
              </div>
              <div class="rounded-xl border border-gray-200 bg-gray-50 px-4 py-3">
                Wasserstation und Umkleiden sind inklusive.
              </div>
              <div class="rounded-xl border border-gray-200 bg-gray-50 px-4 py-3">
                Wir passen jede Klasse an dein Level an.
              </div>
            </div>
          </div>
        </div>

        <div class="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
          <div class="flex flex-col gap-4">
            <div>
              <p class="text-sm uppercase tracking-[0.2em] text-gray-500">Anfrage</p>
              <p class="mt-2 text-xl font-semibold text-gray-900">
                Buche deine Probestunde
              </p>
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
              <span class="text-sm font-medium text-gray-700">Nachricht</span>
              <textarea
                id="message"
                class="min-h-[140px] w-full rounded-lg border border-gray-300 bg-white px-4 py-2 text-gray-900 placeholder:text-gray-400 focus:border-primary-500 focus:ring-2 focus:ring-primary-200"
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
      <div class="relative overflow-hidden rounded-2xl border border-gray-200 bg-white">
        <div class="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-secondary-50"></div>
        <div class="absolute left-8 top-8 h-40 w-40 rounded-full border border-dashed border-gray-200"></div>
        <div class="absolute right-10 top-12 h-24 w-40 rounded-2xl border border-gray-200 bg-white/70"></div>
        <div class="absolute inset-x-10 top-1/2 h-0.5 bg-gray-200"></div>
        <div class="absolute left-20 top-10 h-48 w-0.5 bg-gray-200"></div>
        <div class="absolute left-1/2 top-14 h-52 w-0.5 bg-gray-200"></div>
        <div
          class="absolute left-1/2 top-1/2 flex h-12 w-12 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-primary-600 shadow-lg"
        >
          <span class="h-3 w-3 rounded-full bg-white"></span>
        </div>
        <div class="absolute left-6 top-6 rounded-full border border-gray-200 bg-white/80 px-3 py-1 text-xs text-gray-600">
          Karten-Snippet (Platzhalter)
        </div>
        <div class="absolute bottom-6 right-6 rounded-xl border border-gray-200 bg-white/90 px-4 py-3 text-sm text-gray-700">
          Play Pilates Studio
        </div>
        <div class="relative h-72"></div>
      </div>

      <div class="flex flex-col gap-4">
        <p class="text-xs font-semibold uppercase tracking-[0.2em] text-gray-500">Anfahrt</p>
        <h2 class="font-heading text-4xl text-gray-900">So findest du uns</h2>
        <p class="text-sm text-gray-600">
          Unser Studio liegt zentral, nur wenige Minuten vom Hauptbahnhof entfernt. Plane etwas
          Zeit für das Einchecken ein, damit du entspannt startest.
        </p>
        <div class="grid gap-3 text-sm text-gray-600">
          <div class="rounded-xl border border-gray-200 bg-white px-4 py-3">
            ÖPNV: U5, U6 und Bus 42 bis „Stadtmitte“, dann 3 Minuten zu Fuß.
          </div>
          <div class="rounded-xl border border-gray-200 bg-white px-4 py-3">
            Parken: Kurzzeitparkplätze in der Tiefgarage „Königsbau“.
          </div>
          <div class="rounded-xl border border-gray-200 bg-white px-4 py-3">
            Fahrrad: Sichere Stellplätze direkt vor dem Eingang.
          </div>
        </div>
        <div class="mt-2">
          <Button variant="secondary" href="/preise">Pakete ansehen</Button>
        </div>
      </div>
    </div>
  </Container>
</Section>
