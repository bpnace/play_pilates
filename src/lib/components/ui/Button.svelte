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
    'inline-flex items-center justify-center font-medium transition-all duration-normal ease-smooth focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 disabled:opacity-60 disabled:pointer-events-none';

  const variantClasses: Record<string, string> = {
    primary: 'bg-primary text-gray-900 hover:bg-primary-600 active:bg-primary-700',
    secondary:
      'border border-primary text-primary hover:bg-primary hover:text-gray-900 active:bg-primary-700',
    ghost: 'text-gray-700 hover:bg-gray-100',
    link: 'text-primary hover:text-primary-700 underline-offset-4 hover:underline',
  };

  const sizeClasses: Record<string, string> = {
    sm: 'text-sm px-3 py-2 rounded-md',
    md: 'text-base px-4 py-2.5 rounded-lg',
    lg: 'text-lg px-5 py-3 rounded-xl',
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
