<script lang="ts">
	import Icon from '@iconify/svelte';
	import { cn } from '$lib/utils';
	import type { Tech } from '$lib/server/tech';

	const { tech, class: className }: { tech: Tech[]; class: string } = $props();
</script>

<div
	class={cn(
		'wrapper-mask relative z-10 flex h-20 items-center justify-center overflow-hidden motion-reduce:hidden',
		className
	)}
>
	{#each tech as t, i}
		<div
			class="item absolute"
			style={`animation-delay: calc(60s / ${tech.length} * (${tech.length} - ${
				i + 1
			}) * -1); left: max(calc(5rem * ${tech.length}), 100%);`}
		>
			<div
				class={cn(
					'group relative z-20 flex min-w-20 flex-row items-center justify-center overflow-hidden rounded-xl p-3 text-xl transition-all duration-500',
					'bg-neutral-900 bg-opacity-60 backdrop-blur-lg',
					`border border-neutral-700/50 hover:border-neutral-700/60`
				)}
			>
				<div
					class={cn(
						'absolute left-1/2 top-1/2 z-20 h-8 w-8 -translate-x-1/2 -translate-y-1/2 transition-all duration-500',
						'rounded-full opacity-0 blur-md group-hover:opacity-60'
					)}
					style={`background-color: ${t.color};`}
				></div>
				<Icon
					icon={t.icon}
					class={cn(
						'z-30 text-2xl filter transition-all duration-500',
						'grayscale-[1] group-hover:grayscale-0',
						!!t.invertIconColor && `invert`
					)}
				/>
			</div>
		</div>
	{/each}
</div>

<style>
	.wrapper-mask {
		mask-image: linear-gradient(
			to right,
			rgba(0, 0, 0, 0),
			rgba(0, 0, 0, 1) 20%,
			rgba(0, 0, 0, 1) 80%,
			rgba(0, 0, 0, 0)
		);
	}

	@keyframes scrollLeft {
		to {
			left: -280px;
		}
	}

	@media (prefers-reduced-motion: no-preference) {
		.item {
			animation-name: scrollLeft;
			animation-duration: 60s;
			animation-timing-function: linear;
			animation-iteration-count: infinite;
		}
	}
</style>
