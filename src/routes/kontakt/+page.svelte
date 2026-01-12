<script lang="ts">
  import Container from '$lib/components/ui/Container.svelte';
  import Section from '$lib/components/ui/Section.svelte';
  import Input from '$lib/components/ui/Input.svelte';
  import Button from '$lib/components/ui/Button.svelte';
</script>

<Section>
  <Container>
    <div class="grid gap-10 md:grid-cols-2">
      <div>
        <p class="text-sm uppercase tracking-[0.2em] text-gray-500">Kontakt</p>
        <h1 class="mt-3 font-heading text-5xl text-gray-900">Schreib uns</h1>
        <p class="mt-3 text-lg text-gray-600">
          Dummy-Inhalt: Kontakt-Details, Anfahrt, Öffnungszeiten.
        </p>
      </div>
      <div class="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
        <div class="grid gap-4">
          <Input id="name" label="Name" placeholder="Dein Name" />
          <Input id="email" label="E-Mail" type="email" placeholder="name@email.de" />
          <Input id="message" label="Nachricht" placeholder="Wobei können wir helfen?" />
          <Button fullWidth>Absenden (Dummy)</Button>
        </div>
      </div>
    </div>
  </Container>
</Section>
