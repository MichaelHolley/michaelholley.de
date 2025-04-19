<script lang="ts">
	import { cn } from '$lib/utils';
	import Icon from '@iconify/svelte';
	import type { Snippet } from 'svelte';

	const {
		id,
		name,
		href,
		description,
		cta,
		icon,
		class: className,
		backgroundImgUrl
	} = $props<{
		id: string;
		name: string;
		href: string;
		description: string;
		cta: string;
		icon?: string;
		class?: string;
		backgroundImgUrl?: string;
	}>();
</script>

<a
	{id}
	{href}
	class={cn(
		'group relative col-span-3 flex flex-col justify-between overflow-hidden rounded-xl',
		// light styles
		'[box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)]',
		// dark styles
		'bg-b[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset] transform-gpu [border:1px_solid_rgba(255,255,255,.1)]',
		className
	)}
>
	{#if !!backgroundImgUrl}
		<div
			class="h-full w-full brightness-30 saturate-0 transition-all duration-300 group-hover:brightness-50 group-hover:saturate-100"
		>
			<img
				src={backgroundImgUrl}
				alt="background"
				class="h-full w-full object-cover object-left-top"
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

			<h3 class="font-semibold text-neutral-300">
				{name}
			</h3>
		</div>
		<p class="max-w-lg text-neutral-400">{description}</p>
	</div>

	<div
		class={cn(
			'pointer-events-none absolute bottom-0 flex w-full translate-y-10 transform-gpu flex-row items-center p-6 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100'
		)}
	>
		<span class="pointer-events-auto flex items-center justify-center">
			{cta}
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width="24"
				height="24"
				viewBox="0 0 24 24"
				fill="none"
				stroke="currentColor"
				stroke-width="2"
				stroke-linecap="round"
				stroke-linejoin="round"
				class="ml-2 h-4 w-4"
			>
				<path d="M5 12h14" /><path d="m12 5 7 7-7 7" />
			</svg>
		</span>
	</div>
	<div
		class="g pointer-events-none absolute inset-0 transform-gpu transition-all duration-300 group-hover:bg-neutral-800/10"
	></div>
</a>
