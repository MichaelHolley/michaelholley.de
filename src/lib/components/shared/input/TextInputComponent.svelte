<script lang="ts">
	import { cn } from '$lib/utils';

	let {
		value = $bindable(''),
		id,
		name,
		type = 'text',
		placeholder = '',
		required = false,
		class: className,
		rows
	} = $props<{
		id: string;
		name: string;
		value: string;
		type?: 'text' | 'email' | 'textarea';
		placeholder?: string;
		required?: boolean;
		rows?: number;
	}>();
</script>

{#if type !== 'textarea'}
	<input
		bind:value
		{type}
		{id}
		{name}
		{placeholder}
		{required}
		class={cn(
			`w-full border-b border-neutral-300 placeholder:text-xs`,
			'focus:outline-none active:outline-none',
			className
		)}
	/>
{:else}
	<textarea
		bind:value
		{id}
		{name}
		{placeholder}
		{required}
		class={cn(
			`w-full bg-neutral-300/35 p-1 placeholder:pt-1 placeholder:text-xs`,
			'focus:outline-none active:outline-none',
			className
		)}
		{rows}
	>
	</textarea>
{/if}
