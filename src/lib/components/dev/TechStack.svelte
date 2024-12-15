<script>
	import Icon from '@iconify/svelte';
	import { tech } from '../shared/data/tech';
	import { cn } from '$lib/utils';
</script>

<div
	class={cn(
		'h-20 z-10 relative overflow-hidden wrapper-mask flex justify-center items-center motion-reduce:hidden',
		$$props.class
	)}
>
	{#each tech as t, i}
		<div
			class="absolute item"
			style={`animation-delay: calc(60s / ${tech.length} * (${tech.length} - ${
				i + 1
			}) * -1); left: max(calc(5rem * ${tech.length}), 100%);`}
		>
			<div
				class={cn(
					'relative flex flex-row justify-center items-center group p-3 rounded-xl text-xl min-w-20 z-20 overflow-hidden transition-all duration-500',
					'bg-neutral-900 bg-opacity-60 backdrop-blur-lg',
					`border border-neutral-700/50 hover:border-neutral-700/60`
				)}
			>
				<div
					class={cn(
						'absolute h-8 w-8 z-20 top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 transition-all duration-500',
						`rounded-full opacity-0 group-hover:opacity-60 blur-md`
					)}
					style={`background-color: ${t.color};`}
				/>
				<Icon
					icon={t.icon}
					class={cn(
						'text-2xl z-30 filter transition-all duration-500',
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
