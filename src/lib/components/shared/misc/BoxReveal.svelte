<script lang="ts">
	import type { Snippet } from 'svelte';
	import { inview } from 'svelte-inview';
	import { Motion, useAnimation } from 'svelte-motion';
	import colors from 'tailwindcss/colors';

	const {
		width = 'fit-content',
		boxColor = colors.white,
		duration = 0.5,
		children
	}: { width?: string; boxColor?: string; duration?: number; children: Snippet } = $props();

	//   Animation Controls
	let mainControls = useAnimation();
	let sideControls = useAnimation();

	let viewEnter = () => {
		// console.log("view entered");
		mainControls.start('visible');
		sideControls.start('visible');
	};
</script>

<div class="relative overflow-hidden" style="width:{width}" use:inview oninview_enter={viewEnter}>
	<Motion
		let:motion
		variants={{
			hidden: { opacity: 0, y: 75 },
			visible: { opacity: 1, y: 0 }
		}}
		initial="hidden"
		animate={mainControls}
		transition={{ duration: duration ? duration : 0.5, delay: 0.25 }}
	>
		<div use:motion>
			{@render children()}
		</div>
	</Motion>
	<Motion
		variants={{
			hidden: { left: 0 },
			visible: { left: '100%' }
		}}
		initial="hidden"
		animate={sideControls}
		transition={{ duration: duration ? duration : 0.5, ease: 'easeIn' }}
		let:motion
	>
		<div
			style="background:{boxColor}"
			class="absolute bottom-[4px] left-0 right-0 top-[4px] z-40"
			use:motion
		></div>
	</Motion>
</div>
