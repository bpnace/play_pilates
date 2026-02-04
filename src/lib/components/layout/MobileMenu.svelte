<script lang="ts">
  import { resolve } from '$app/paths';
  import type { Pathname } from '$app/types';
  import { page } from '$app/stores';
  import { site } from '$lib/config/site';

  let { open = false, activeHref } = $props<{ open?: boolean; activeHref?: string }>();
</script>

<div
  class={`absolute left-0 right-0 top-full origin-top rounded-2xl border border-white/10 bg-[rgba(10,10,10,0.85)] shadow-xl backdrop-blur-md transition ${
    open ? 'scale-100 opacity-100' : 'pointer-events-none scale-95 opacity-0'
  }`}
>
  <div class="flex flex-col gap-4 p-6">
    {#each site.nav as item (item.href)}
      {@const isActive = item.href === (activeHref ?? $page.url.pathname)}
      <a
        class={`text-lg font-heading uppercase tracking-[0.22em] ${
          isActive ? 'text-gray-900' : 'text-gray-700 hover:text-gray-900'
        }`}
        href={resolve(item.href as Pathname)}
        aria-current={isActive ? 'page' : undefined}
      >
        {item.label}
      </a>
    {/each}
  </div>
</div>
