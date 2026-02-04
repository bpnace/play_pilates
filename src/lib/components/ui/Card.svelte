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

<div class={`ui-panel rounded-2xl ${paddingClasses[padding]}`}>
  {@render children?.()}
</div>
