<script lang="ts">
  import { resolve } from '$app/paths';
  import type { Pathname } from '$app/types';
  import { site } from '$lib/config/site';

  let { open = false } = $props<{ open?: boolean }>();
</script>

<div
  class={`absolute left-0 right-0 top-full origin-top rounded-2xl border border-gray-200 bg-white shadow-lg transition ${
    open ? 'scale-100 opacity-100' : 'pointer-events-none scale-95 opacity-0'
  }`}
>
  <div class="flex flex-col gap-4 p-6">
    {#each site.nav as item (item.href)}
      <a
        class="text-base font-medium text-gray-800 hover:text-primary-600"
        href={resolve(item.href as Pathname)}
      >
        {item.label}
      </a>
    {/each}
  </div>
</div>
