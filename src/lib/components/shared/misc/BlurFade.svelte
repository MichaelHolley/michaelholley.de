<script lang="ts">
	import { cn } from '$lib/utils';
	import type { Snippet } from 'svelte';
	import { inview } from 'svelte-inview';
	import { AnimatePresence, Motion } from 'svelte-motion';

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
	} = $props<{
		duration?: number;
		delay?: number;
		yOffset?: number;
		inViewMargin?: string;
		blur?: string;
		id?: string;
		once?: boolean;
		class?: string;
		children: Snippet;
	}>();

	let defaultVariants = {
		hidden: { opacity: 0, y: yOffset, filter: `blur(${blur})` },
		visible: { opacity: 1, y: 0, filter: `blur(0px)` }
	};

	let isInView = $state('hidden');
</script>

<AnimatePresence list={[{ key: id }]}>
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
			oninview_change={({ detail }) => {
				isInView = detail.inView ? 'visible' : 'hidden';
			}}
			class={cn(className)}
		>
			{@render children()}
		</div>
	</Motion>
</AnimatePresence>
