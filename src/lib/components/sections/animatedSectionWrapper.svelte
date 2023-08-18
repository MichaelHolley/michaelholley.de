<script lang="ts">
	import viewport from '../../hooks/useViewportAction';

	let isVisible: boolean;
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
>
	<slot />
</div>

<style>
	.animate-in {
		opacity: 0;
		transform: translateY(30px);
		transition: opacity 1.5s, transform 1.5s;
	}

	.visible {
		opacity: 1;
		transform: translateY(0);
	}
</style>
