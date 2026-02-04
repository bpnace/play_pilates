<script lang="ts">
  import { asset, resolve } from '$app/paths';
  import type { Pathname } from '$app/types';
  import Container from '$lib/components/ui/Container.svelte';
  import Navigation from '$lib/components/layout/Navigation.svelte';
  import MobileMenu from '$lib/components/layout/MobileMenu.svelte';
  import Button from '$lib/components/ui/Button.svelte';

  let open = false;
</script>

<header class="site-header">
  <Container maxWidth="full" noPadding>
    <div class="mx-auto flex w-[94%] max-w-7xl items-center justify-between py-4">
      <a href={resolve('/' as Pathname)} class="flex items-center gap-3">
        <span class="ui-accent text-lg font-bold">+</span>
        <div class="leading-tight">
          <p class="ui-micro text-xs text-gray-800">Nina Untch</p>
          <p class="text-lg font-heading text-gray-900">Pilates Studio</p>
        </div>
      </a>

      <Navigation />

      <div class="flex items-center gap-3">
        <Button variant="secondary" size="sm"  href="/kontakt">Probestunde</Button>
        <button
          class="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 text-gray-800 md:hidden"
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
