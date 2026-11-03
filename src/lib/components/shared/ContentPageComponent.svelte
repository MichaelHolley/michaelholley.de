<script lang="ts">
	import { afterNavigate } from '$app/navigation';
	import ArrowLink from '#lib/components/shared/ArrowLink.svelte';
	import { cn } from '#lib/utils.js';
	import Icon from '@iconify/svelte';
	import { IsInViewport } from 'runed';
	import { type Snippet } from 'svelte';

	const {
		children
	}: {
		children: Snippet;
	} = $props();

	let hasInternalHistory = $state(false);

	let headerNode = $state<HTMLElement>()!;
	const headerInViewport = new IsInViewport(() => headerNode);

	afterNavigate(({ from, shallow }) => {
		if (shallow) return;

		if (from) {
			hasInternalHistory = true;
		}
	});

	function handleBack(e: MouseEvent) {
		if (hasInternalHistory) {
			e.preventDefault();
			history.back();
		}
	}
</script>

<div class="bg-white text-black dark:bg-black dark:text-white">
	<div class="container min-h-svh pt-8 pb-[clamp(4.5rem,2.5rem+8vw,10rem)]">
		<div class="flex" bind:this={headerNode}>
			<ArrowLink href="/" direction="back" onclick={handleBack}>Zurück</ArrowLink>
		</div>

		{@render children()}

		{#if headerInViewport.current === false}
			<button
				type="button"
				class={cn(
					'press fixed right-(--margin) bottom-(--margin) z-40 flex size-12 items-center justify-center',
					'hover:bg-tertiary dark:hover:bg-tertiary-active bg-black text-white dark:bg-white dark:text-black',
					'to-top'
				)}
				onclick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
				aria-label="Nach oben scrollen"
			>
				<Icon icon="ic:baseline-arrow-back" class="rotate-90 text-2xl" aria-hidden="true" />
			</button>
		{/if}
	</div>
</div>

<style>
	@media (prefers-reduced-motion: no-preference) {
		.to-top {
			animation: to-top-in 300ms var(--ease-out);
		}
	}

	@keyframes to-top-in {
		from {
			opacity: 0;
			transform: translateY(16px);
		}
	}
</style>
