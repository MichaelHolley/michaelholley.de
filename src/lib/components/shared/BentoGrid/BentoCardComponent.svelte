<script lang="ts">
	import { cn } from '$lib/utils';
	import Icon from '@iconify/svelte';
	import type { Snippet } from 'svelte';

	const {
		name,
		icon,
		description,
		href,
		cta,
		class: className,
		children
	} = $props<{
		name: string;
		icon?: string;
		description: string;
		href: string;
		cta: string;
		class?: string;
		children?: Snippet;
	}>();
</script>

<div
	id={name}
	class={cn(
		'group relative col-span-3 flex flex-col justify-between overflow-hidden rounded-xl',
		// light styles
		'bg-white [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)]',
		// dark styles
		'transform-gpu dark:bg-black dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset] dark:[border:1px_solid_rgba(255,255,255,.1)]',
		className
	)}
>
	<div
		class="h-full w-full brightness-30 saturate-0 group-hover:brightness-50 group-hover:saturate-100"
	>
		{@render children()}
	</div>
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

			<h3 class="font-semibold text-neutral-700 dark:text-neutral-300">
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
		<a {href} class="pointer-events-auto flex items-center justify-center">
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
		</a>
	</div>
	<div
		class="pointer-events-none absolute inset-0 transform-gpu transition-all duration-300 group-hover:bg-black/[.03] group-hover:dark:bg-neutral-800/10"
	></div>
</div>
