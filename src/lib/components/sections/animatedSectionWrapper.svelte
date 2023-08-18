<script lang="ts">
	import viewport from '../../hooks/useViewportAction';

	type SlideInFrom = 'bottom' | 'top' | 'left' | 'right';

	let isVisible: boolean;
	export let from: SlideInFrom = 'bottom';

	function getSlideClass() {
		switch (from) {
			case 'bottom':
				return 'from-bottom';
			case 'top':
				return 'from-top';
			case 'left':
				return 'from-left';
			case 'right':
				return 'from-right';
		}
	}
</script>

<div
	use:viewport
	on:enterViewport={() => {
		isVisible = true;
	}}
	on:exitViewport={() => {
		isVisible = false;
	}}
	class:animate-in={true}
	class:visible={isVisible}
	class={getSlideClass()}
>
	<slot />
</div>

<style>
	.animate-in {
		opacity: 0;
		transition: opacity 1.5s, transform 1.5s;
	}

	.from-bottom {
		transform: translateY(30px);
	}

	.from-top {
		transform: translateY(-30px);
	}

	.from-left {
		transform: translateX(-30px);
	}
	.from-right {
		transform: translateX(30px);
	}

	.visible {
		opacity: 1;
		transform: translateY(0);
	}
</style>
