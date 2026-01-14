<script lang="ts">
  import { resolve } from '$app/paths';
  import type { Pathname } from '$app/types';
  import { page } from '$app/stores';
  import { site } from '$lib/config/site';

  let { open = false, activeHref } = $props<{ open?: boolean; activeHref?: string }>();
</script>

<div
  class={`absolute left-0 right-0 top-full origin-top rounded-2xl border border-gray-200 bg-white shadow-lg transition ${
    open ? 'scale-100 opacity-100' : 'pointer-events-none scale-95 opacity-0'
  }`}
>
  <div class="flex flex-col gap-4 p-6">
    {#each site.nav as item (item.href)}
      {@const isActive = item.href === (activeHref ?? $page.url.pathname)}
      <a
        class={`text-base font-medium ${
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
  </div>
</div>
