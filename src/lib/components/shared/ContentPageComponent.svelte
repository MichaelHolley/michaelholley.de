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

	const buttonVariant = cn(
		'text-neutral-400 hover:text-neutral-500 transition-all',
		'dark:text-neutral-600 hover:dark:text-neutral-500'
	);
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

<div class="bg-white text-black dark:bg-transparent dark:text-white">
	<div class="container min-h-screen py-10">
		<div>
			<div class="flex" bind:this={headerNode}>
				<ArrowLink href="/" direction="back" onclick={handleBack}>Zurück</ArrowLink>
			</div>

			{@render children()}
		</div>

		{#if headerInViewport.current === false}
			<div class="motion-translate-y-in-150 fixed bottom-3 left-3 z-40">
				<button
					type="button"
					class={cn(
						'flex size-12 items-center justify-center transition-all active:scale-95',
						buttonVariant
					)}
					onclick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
					aria-label="Nach oben scrollen"
				>
					<Icon icon="ic:baseline-arrow-back" class="rotate-90 text-2xl" aria-hidden="true" />
				</button>
			</div>
		{/if}
	</div>
</div>
