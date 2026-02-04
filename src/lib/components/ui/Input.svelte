<script lang="ts">
  let {
    id,
    label,
    type = 'text',
    placeholder,
    value = '',
    required = false,
    disabled = false,
  } = $props<{
    id: string;
    label?: string;
    type?: 'text' | 'email' | 'tel' | 'password';
    placeholder?: string;
    value?: string;
    required?: boolean;
    disabled?: boolean;
  }>();
</script>

<label class="block space-y-2">
  {#if label}
    <span class="text-sm font-medium text-gray-300">{label}</span>
  {/if}
  <input
    {id}
    class="ui-input focus:border-primary-500 focus:ring-2 focus:ring-primary-200 disabled:opacity-60"
    {type}
    {placeholder}
    {value}
    {required}
    {disabled}
  />
</label>
