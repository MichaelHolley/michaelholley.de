<script lang="ts">
	import { cn } from '$lib/utils';
	import Icon from '@iconify/svelte';
	import { createEventDispatcher } from 'svelte';
	import { iconMap } from '../shared/data/icons';

	export let name;
	export let background: any;
	export let icon: string | undefined;
	export let subheader;
	export let description: string[];
	export let expanded;

	const dispatch = createEventDispatcher();
</script>

<div
	id={name}
	class={cn(
		'group relative col-span-3 flex flex-col justify-between overflow-hidden rounded-xl',
		'transform-gpu bg-black dark:[border:1px_solid_rgba(255,255,255,.1)] [box-shadow:0_-20px_80px_-20px_#ffffff1f_inset]',
		$$props.class
	)}
>
	<div>
		<svelte:component this={background} />
	</div>
	<div
		class="pointer-events-none z-10 flex transform-gpu flex-col gap-0.5 p-6 pb-4 transition-all duration-300 group-hover:-translate-y-10"
	>
		<div class="flex flex-row items-center gap-2 text-xl">
			{#if !!icon}
				<Icon {icon} class="text-neutral-700 text-2xl group-hover:text-xl transition-all -ml-0.5" />
			{/if}

			<h3 class="font-semibold text-neutral-700 dark:text-neutral-300">
				{name}
			</h3>
		</div>
		<div class="max-w-lg" class:max-w-2xl={expanded}>
			{#if !expanded}
				<p class="my-2 text-neutral-400">
					{subheader}
				</p>
			{/if}
			{#if !!expanded && !!description}
				{#each description as desc}
					<p class="py-2 text-neutral-400">{desc}</p>
				{/each}
			{/if}
		</div>
	</div>

	<div
		class={cn(
			'pointer-events-none absolute bottom-0 flex flex-grow translate-y-10 transform-gpu flex-row items-center p-6 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100'
		)}
	>
		<button class="pointer-events-auto" on:click={() => dispatch('click')}>
			<span class="flex justify-center items-center">
				{expanded ? 'Schließen' : 'Mehr'}
				<Icon icon={iconMap.arrowright} class="ml-0.5" />
			</span>
		</button>
	</div>
	<div
		class="pointer-events-none absolute inset-0 transform-gpu transition-all duration-300 group-hover:bg-black/[.03] group-hover:dark:bg-neutral-800/10"
	/>
</div>
