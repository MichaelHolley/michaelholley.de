<script lang="ts">
	import { Motion, AnimatePresence } from 'svelte-motion';
	import { inview } from 'svelte-inview';
	import { cn } from '$lib/utils';
	import type { Snippet } from 'svelte';

	const {
		duration = 0.4,
		delay = 0,
		yOffset = 6,
		inViewMargin = '-50px',
		blur = '6px',
		id = crypto.randomUUID().slice(0, 8),
		once = false,
		class: className,
		children
	}: {
		duration?: number;
		delay?: number;
		yOffset?: number;
		inViewMargin?: string;
		blur?: string;
		id?: string;
		once?: boolean;
		class?: string;
		children: Snippet;
	} = $props();

	let defaultVariants = {
		hidden: { opacity: 0, y: yOffset, filter: `blur(${blur})` },
		visible: { opacity: 1, y: 0, filter: `blur(0px)` }
	};

	let isInView = $state('hidden');
</script>

<AnimatePresence let:item list={[{ key: id }]}>
	<Motion
		initial="hidden"
		animate={isInView}
		exit="hidden"
		variants={defaultVariants}
		transition={{
			delay: 0.04 + delay,
			duration,
			ease: 'easeOut'
		}}
		let:motion
	>
		<div
			use:inview={{ rootMargin: inViewMargin, unobserveOnEnter: once }}
			use:motion
			on:inview_change={({ detail }) => {
				isInView = detail.inView ? 'visible' : 'hidden';
			}}
			class={cn(className)}
		>
			{@render children()}
		</div>
	</Motion>
</AnimatePresence>
