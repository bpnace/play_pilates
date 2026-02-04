<script lang="ts">
  import { resolve } from '$app/paths';
  import type { Pathname } from '$app/types';

  let {
    variant = 'primary',
    size = 'md',
    href,
    type = 'button',
    disabled = false,
    fullWidth = false,
    children,
  } = $props<{
    variant?: 'primary' | 'secondary' | 'ghost' | 'link';
    size?: 'sm' | 'md' | 'lg';
    href?: string;
    type?: 'button' | 'submit' | 'reset';
    disabled?: boolean;
    fullWidth?: boolean;
    children?: import('svelte').Snippet;
  }>();

  const baseClasses =
    'ui-button font-semibold focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 disabled:opacity-60 disabled:pointer-events-none';

  const variantClasses: Record<string, string> = {
    primary: 'ui-button--accent',
    secondary: 'ui-button--outline',
    ghost: 'ui-button--ghost',
    link: 'ui-button--link',
  };

  const sizeClasses: Record<string, string> = {
    sm: 'ui-button--sm',
    md: 'ui-button--md',
    lg: 'ui-button--lg',
  };
</script>

{#if href}
  <a
    class={`${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${fullWidth ? 'w-full' : ''}`}
    href={resolve(href as Pathname)}
  >
    {@render children?.()}
  </a>
{:else}
  <button
    class={`${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${fullWidth ? 'w-full' : ''}`}
    {type}
    {disabled}
  >
    {@render children?.()}
  </button>
{/if}
