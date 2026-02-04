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
      class={`ui-nav-link transition-colors duration-fast ease-smooth ${isActive ? 'is-active' : ''}`}
      href={resolve(item.href as Pathname)}
      aria-current={isActive ? 'page' : undefined}
    >
      {item.label}
    </a>
  {/each}
</nav>
