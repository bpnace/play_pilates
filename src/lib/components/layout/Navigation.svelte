<script lang="ts">
  import { resolve } from '$app/paths';
  import type { Pathname } from '$app/types';
  import { page } from '$app/stores';
  import { site } from '$lib/config/site';

  let { activeHref } = $props<{ activeHref?: string }>();
</script>

<nav class="hidden items-center gap-6 md:flex">
  {#each site.nav as item (item.href)}
    {@const isActive = item.href === (activeHref ?? $page.url.pathname)}
    <a
      class={`text-sm font-medium transition-colors duration-fast ease-smooth ${
        isActive
          ? 'text-gray-900 underline decoration-primary-500 underline-offset-8'
          : 'text-gray-700 hover:underline hover:decoration-gray-300 underline-offset-8'
      }`}
      href={resolve(item.href as Pathname)}
      aria-current={isActive ? 'page' : undefined}
    >
      {item.label}
    </a>
  {/each}
</nav>
