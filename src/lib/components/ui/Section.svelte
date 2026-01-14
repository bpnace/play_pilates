<script lang="ts">
  let {
    background = 'white',
    paddingY = 'lg',
    children,
  } = $props<{
    background?: 'white' | 'gray' | 'black' | 'primary';
    paddingY?: 'sm' | 'md' | 'lg' | 'xl';
    children?: import('svelte').Snippet;
  }>();

  const bgClasses: Record<string, string> = {
    white: 'bg-white text-gray-900',
    gray: 'bg-gray-50 text-gray-900',
    black: 'bg-black text-white',
    primary: 'bg-primary text-white',
  };

  const paddingClasses: Record<string, string> = {
    sm: 'py-8 sm:py-12',
    md: 'py-12 sm:py-16',
    lg: 'py-16 sm:py-24',
    xl: 'py-24 sm:py-32',
  };
</script>

<section class={`${bgClasses[background]} ${paddingClasses[paddingY]}`}>
  {@render children?.()}
</section>
