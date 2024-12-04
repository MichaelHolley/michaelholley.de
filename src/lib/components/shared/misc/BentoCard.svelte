<script lang="ts">
	import { cn } from '$lib/utils';
	import Icon from '@iconify/svelte';
	import { iconMap } from '../data/icons';

	export let name;
	export let background: any;
	export let icon: string | undefined;
	export let description;
	export let href: string;
	export let cta;
</script>

<div
	id={name}
	class={cn(
		'group relative col-span-3 flex flex-col justify-between overflow-hidden rounded-xl',
		// light styles
		'bg-white [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)]',
		// dark styles
		'transform-gpu dark:bg-black dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset]',
		$$props.class
	)}
>
	<div>
		<svelte:component this={background} />
	</div>
	<div
		class="pointer-events-none z-10 flex transform-gpu flex-col gap-0.5 p-6 transition-all duration-300 group-hover:-translate-y-10"
	>
		<div class="flex flex-row items-center gap-2 text-xl">
			{#if !!icon}
				<Icon {icon} class="text-neutral-700 text-2xl group-hover:text-xl transition-all -m-1" />
			{/if}

			<h3 class="font-semibold text-neutral-700 dark:text-neutral-300">
				{name}
			</h3>
		</div>
		<p class="mt-1 max-w-lg text-neutral-400">{description}</p>
	</div>

	<div
		class={cn(
			'pointer-events-none absolute bottom-0 flex flex-grow translate-y-10 transform-gpu flex-row items-center p-6 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100'
		)}
	>
		<button class="pointer-events-auto">
			<a {href} class="flex justify-center items-center">
				{cta}
				<Icon icon={iconMap.arrowright} class="ml-0.5" />
			</a>
		</button>
	</div>
	<div
		class="pointer-events-none absolute inset-0 transform-gpu transition-all duration-300 group-hover:bg-black/[.03] group-hover:dark:bg-neutral-800/10"
	/>
</div>
