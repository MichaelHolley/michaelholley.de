<script lang="ts">
	let {
		value = $bindable(''),
		id,
		name,
		type = 'text',
		placeholder = '',
		required = false,
		class: className
	} = $props<{
		id: string;
		name: string;
		value: string;
		type?: 'text' | 'email' | 'textarea';
		placeholder?: string;
		required?: boolean;
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
		class={`border-b border-neutral-300 focus:outline-none active:outline-none ${className} w-full`}
	/>
{:else}
	<textarea
		bind:value
		{id}
		{name}
		{placeholder}
		{required}
		class={`bg-neutral-200 focus:outline-none active:outline-none ${className} w-full p-1`}
	>
	</textarea>
{/if}

<style>
	textarea::placeholder,
	input::placeholder {
		font-size: 0.7rem;
	}
</style>
