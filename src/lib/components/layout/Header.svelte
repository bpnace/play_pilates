<script lang="ts">
  import { asset, resolve } from '$app/paths';
  import type { Pathname } from '$app/types';
  import Container from '$lib/components/ui/Container.svelte';
  import Navigation from '$lib/components/layout/Navigation.svelte';
  import MobileMenu from '$lib/components/layout/MobileMenu.svelte';
  import Button from '$lib/components/ui/Button.svelte';

  let open = false;
</script>

<header class="sticky top-0 z-40 bg-white/90 backdrop-blur border-b border-gray-100">
  <Container>
    <div class="flex items-center justify-between py-4">
      <a href={resolve('/' as Pathname)} class="flex items-center gap-3">
        <img
          src={asset('/images/playLogo1.svg')}
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
    <div class="relative md:hidden">
      <MobileMenu {open} />
    </div>
  </Container>
</header>
