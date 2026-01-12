<script lang="ts">
  let {
    maxWidth = 'container',
    noPadding = false,
    children,
  } = $props<{
    maxWidth?: 'sm' | 'md' | 'lg' | 'xl' | 'container' | 'full';
    noPadding?: boolean;
    children?: import('svelte').Snippet;
  }>();

  const maxWidthClasses: Record<string, string> = {
    sm: 'max-w-2xl',
    md: 'max-w-4xl',
    lg: 'max-w-6xl',
    xl: 'max-w-7xl',
    container: 'max-w-container',
    full: 'max-w-full',
  };
</script>

<div class={`mx-auto ${maxWidthClasses[maxWidth]} ${noPadding ? '' : 'px-4 sm:px-6 lg:px-8'}`}>
  {@render children?.()}
</div>
