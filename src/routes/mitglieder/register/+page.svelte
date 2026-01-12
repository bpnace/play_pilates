<script lang="ts">
  import Container from '$lib/components/ui/Container.svelte';
  import Section from '$lib/components/ui/Section.svelte';
  import Input from '$lib/components/ui/Input.svelte';
  import Button from '$lib/components/ui/Button.svelte';
</script>

<Section>
  <Container>
    <div class="mx-auto max-w-md rounded-2xl border border-gray-200 bg-white p-8 shadow-sm">
      <p class="text-sm uppercase tracking-[0.2em] text-gray-500">Mitglieder</p>
      <h1 class="mt-3 font-heading text-4xl text-gray-900">Registrieren</h1>
      <p class="mt-2 text-sm text-gray-600">Dummy-Registrierung. Später mit Auth verknüpfen.</p>
      <div class="mt-6 grid gap-4">
        <Input id="register-name" label="Name" placeholder="Dein Name" />
        <Input id="register-email" label="E-Mail" type="email" placeholder="name@email.de" />
        <Input id="register-password" label="Passwort" type="password" placeholder="••••••••" />
        <Button fullWidth>Account erstellen</Button>
        <Button variant="link" href="/mitglieder/login">Zurück zum Login</Button>
      </div>
    </div>
  </Container>
</Section>
