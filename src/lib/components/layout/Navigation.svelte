<script lang="ts">
  import { resolve } from '$app/paths';
  import type { Pathname } from '$app/types';
  import { site } from '$lib/config/site';

  let { activeHref = '/' } = $props<{ activeHref?: string }>();
</script>

<nav class="hidden items-center gap-6 md:flex">
  {#each site.nav as item (item.href)}
    <a
      class={`text-sm font-medium transition-colors duration-fast ease-smooth ${
        item.href === activeHref ? 'text-primary-700' : 'text-gray-700 hover:text-primary-600'
      }`}
      href={resolve(item.href as Pathname)}
    >
      {item.label}
    </a>
  {/each}
</nav>
