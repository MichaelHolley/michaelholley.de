<script lang="ts">
	import { cn } from '#lib/utils.js';
	import Icon from '@iconify/svelte';
	import type { Snippet } from 'svelte';
	import type { HTMLAnchorAttributes } from 'svelte/elements';

	const {
		direction,
		iconClass,
		class: className,
		children,
		...rest
	}: HTMLAnchorAttributes & {
		direction: 'back' | 'forward';
		iconClass?: string;
		children: Snippet;
	} = $props();
</script>

<a
	{...rest}
	class={cn(
		'group focus-visible:outline-secondary inline-flex items-center gap-1 underline-offset-4 transition-all hover:underline focus-visible:outline-2 focus-visible:outline-offset-4 active:opacity-75',
		direction === 'forward' ? 'flex-row-reverse' : 'flex-row',
		className
	)}
>
	<Icon
		icon="ic:baseline-arrow-back"
		class={cn(
			'text-secondary transition-transform',
			direction === 'back'
				? 'group-hover:-translate-x-0.5 group-active:-translate-x-1'
				: 'rotate-180 group-hover:translate-x-0.5 group-active:translate-x-1',
			iconClass
		)}
	/>
	{@render children()}
</a>
