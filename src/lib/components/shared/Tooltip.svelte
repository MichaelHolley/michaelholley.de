<!-- Tooltip.svelte -->
<script lang="ts">
	import { cn } from '$lib/utils';

	export let text: string;
	export let position: 'top' | 'bottom' | 'left' | 'right' = 'top';
	let visible = false;

	function positionClass(position: 'top' | 'bottom' | 'left' | 'right') {
		switch (position) {
			case 'top':
				return 'top';
			case 'bottom':
				return 'bottom';
			case 'left':
				return 'left';
			case 'right':
				return 'right';
			default:
				return 'top';
		}
	}
</script>

<div
	class="relative inline-block"
	on:mouseenter={() => (visible = true)}
	on:mouseleave={() => (visible = false)}
>
	<slot />
	{#if visible}
		<div
			class={cn(
				`absolute whitespace-no-wrap bg-black text-white text-xs rounded py-1 px-2 z-10 ${positionClass(
					position
				)}`,
				$$props.class
			)}
		>
			{text}
		</div>
	{/if}
</div>

<style>
	.top {
		bottom: 100%;
		left: 50%;
		transform: translateX(-50%);
		margin-bottom: 0.5rem;
	}
	.bottom {
		top: 100%;
		left: 50%;
		transform: translateX(-50%);
		margin-top: 0.5rem;
	}
	.left {
		right: 100%;
		top: 50%;
		transform: translateY(-50%);
		margin-right: 0.5rem;
	}
	.right {
		left: 100%;
		top: 50%;
		transform: translateY(-50%);
		margin-left: 0.5rem;
	}
</style>
