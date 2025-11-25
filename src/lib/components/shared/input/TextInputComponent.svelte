<script lang="ts">
	import { cn } from '$lib/utils';
	import { TextareaAutosize } from 'runed';

	let {
		value = $bindable(''),
		id,
		name,
		type = 'text',
		placeholder = '',
		required = false,
		class: className
	}: {
		id: string;
		name: string;
		value: string;
		type?: 'text' | 'email' | 'textarea';
		placeholder?: string;
		required?: boolean;
		class?: string;
	} = $props();

	let textareaEl = $state<HTMLTextAreaElement>(null!);

	new TextareaAutosize({
		element: () => textareaEl,
		input: () => value,
		styleProp: 'minHeight'
	});
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
			'focus:border-black focus:outline-none active:outline-none',
			className
		)}
	/>
{:else}
	<textarea
		bind:this={textareaEl}
		bind:value
		{id}
		{name}
		{placeholder}
		{required}
		rows={4}
		class={cn(
			`w-full bg-neutral-300/35 p-1 placeholder:pt-1 placeholder:text-xs`,
			'focus:border-b focus:border-black focus:outline-none active:outline-none',
			className
		)}
	>
	</textarea>
{/if}
