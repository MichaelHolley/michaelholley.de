<script lang="ts">
	import { cn } from '$lib/utils';
	import Icon from '@iconify/svelte';

	const {
		id,
		name,
		href,
		description,
		cta,
		icon,
		class: className,
		backgroundImgUrl
	}: {
		id: string;
		name: string;
		href: string;
		description: string;
		cta: string;
		icon?: string;
		class?: string;
		backgroundImgUrl?: string;
	} = $props();
</script>

<a
	{id}
	{href}
	class={cn(
		'group relative col-span-3 flex flex-col justify-between overflow-hidden rounded-xl',
		'transform-gpu border border-black/10 bg-black [box-shadow:0_-20px_80px_-20px_#ffffff1f_inset]',
		className
	)}
>
	{#if !!backgroundImgUrl}
		<div
			class="h-full w-full brightness-30 saturate-0 transition-all duration-300 group-hover:brightness-70 group-hover:saturate-100"
		>
			<img
				src={backgroundImgUrl}
				alt="background"
				class="h-full w-full object-cover object-top-left transition-all duration-300 group-hover:scale-103"
			/>
		</div>
	{/if}

	<div
		class="pointer-events-none absolute bottom-0 z-10 flex transform-gpu flex-col gap-1 p-6 transition-all duration-300 group-hover:-translate-y-10"
	>
		<div class="flex flex-row items-center gap-1 text-xl">
			{#if !!icon}
				<Icon
					{icon}
					class="-ml-0.5 text-2xl text-neutral-700 transition-all group-hover:text-neutral-400"
				/>
			{/if}

			<h3 class="font-semibold text-white text-shadow-2xs">
				{name}
			</h3>
		</div>
		<p class="max-w-lg text-neutral-400 text-shadow-2xs group-hover:text-white">
			{description}
		</p>
	</div>

	<div
		class={cn(
			'pointer-events-none absolute bottom-0 z-10 flex translate-y-10 transform-gpu p-6 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100'
		)}
	>
		<span class="pointer-events-none flex items-center text-shadow-2xs">
			{cta}
			<Icon icon="ic:baseline-arrow-forward" class="drop-shadow-sm" />
		</span>
	</div>

	<div
		class="pointer-events-none absolute inset-0 transform-gpu bg-transparent transition-all duration-300 group-hover:bg-black/60 group-hover:mask-t-from-20% group-hover:mask-t-to-60%"
	></div>
</a>
