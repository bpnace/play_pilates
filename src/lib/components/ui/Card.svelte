<script lang="ts">
  let { padding = 'md', children } = $props<{
    padding?: 'sm' | 'md' | 'lg';
    children?: import('svelte').Snippet;
  }>();

  const paddingClasses: Record<string, string> = {
    sm: 'p-4',
    md: 'p-6',
    lg: 'p-8',
  };
</script>

<div class={`rounded-xl border border-gray-200 bg-white shadow-sm ${paddingClasses[padding]}`}>
  {@render children?.()}
</div>
