<script lang="ts">
  import { asset, resolve } from '$app/paths';
  import type { Pathname } from '$app/types';
  import Container from '$lib/components/ui/Container.svelte';
  import Navigation from '$lib/components/layout/Navigation.svelte';
  import MobileMenu from '$lib/components/layout/MobileMenu.svelte';
  import Button from '$lib/components/ui/Button.svelte';

  let open = false;
</script>

<header class="fixed left-0 right-0 top-4 z-50">
  <Container maxWidth="full" noPadding>
    <div
      class="mx-auto flex w-[94%] max-w-7xl items-center justify-between rounded-full border border-white/40 bg-white/85 px-4 py-3 shadow-xl backdrop-blur-md md:px-6"
    >
      <a href={resolve('/' as Pathname)} class="flex items-center gap-3">
        <img
          src={asset('/images/ninaLogo1.webp')}
          alt="Nina Untch Pilates Logo"
          class="h-10 w-10"
        />
        <div class="leading-tight">
          <p class="text-sm text-gray-500">Nina Untch Pilates</p>
          <p class="font-heading text-2xl text-gray-900">Personal Training</p>
        </div>
      </a>

      <Navigation />

      <div class="flex items-center gap-3">
        <Button variant="secondary" size="sm" href="/kontakt">Probestunde</Button>
        <button
          class="flex h-10 w-10 items-center justify-center rounded-lg border border-gray-200 text-gray-700 md:hidden"
          aria-label="Menü öffnen"
          on:click={() => (open = !open)}
        >
          <span class="text-xl">{open ? '×' : '≡'}</span>
        </button>
      </div>
    </div>
    <div class="relative mt-3 md:hidden">
      <MobileMenu {open} />
    </div>
  </Container>
</header>
