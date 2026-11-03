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
		'group link-underline inline-flex min-h-11 items-center gap-2 font-medium active:opacity-75',
		direction === 'forward' ? 'flex-row-reverse' : 'flex-row',
		className
	)}
>
	<Icon
		icon="ic:baseline-arrow-back"
		aria-hidden="true"
		class={cn(
			'size-5 transition-transform duration-200',
			direction === 'back'
				? 'group-hover:-translate-x-0.5 group-active:-translate-x-1'
				: 'rotate-180 group-hover:translate-x-0.5 group-active:translate-x-1',
			iconClass
		)}
	/>
	{@render children()}
</a>
