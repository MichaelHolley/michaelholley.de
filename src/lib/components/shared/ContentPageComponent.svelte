<script lang="ts">
	import { browser } from '$app/environment';
	import { afterNavigate } from '$app/navigation';
	import { serifStore } from '$lib/stores/serifFontStore';
	import { cn } from '$lib/utils';
	import Icon from '@iconify/svelte';
	import { ScrollState } from 'runed';
	import { type Snippet } from 'svelte';

	const {
		children,
		centeredContent
	}: {
		children: Snippet;
		centeredContent?: boolean;
	} = $props();

	let hasInternalHistory = $state(false);
	const serifFont = serifStore;

	let el = $state<Window | undefined>();

	const scroll = new ScrollState({
		element: () => el,
		behavior: 'smooth'
	});

	$effect(() => {
		if (browser) {
			el = window;
		}
	});

	const buttonVariant = cn(
		'text-neutral-400 hover:text-neutral-500 transition-all',
		'dark:text-neutral-600 hover:dark:text-neutral-500'
	);

	afterNavigate(({ from }) => {
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
			<div class="flex flex-row justify-between">
				<a href="/" onclick={handleBack} class=" flex flex-row items-center gap-1">
					<Icon icon="ic:baseline-arrow-back" class="text-secondary" />
					Zurück
				</a>
				<button
					class={cn(
						'size-8 rounded-sm border transition-all hover:cursor-pointer',
						!serifFont.current && 'font-serif',
						buttonVariant
					)}
					onclick={() => {
						serifFont.current = !serifFont.current;
					}}
					title="Change to {!serifFont.current ? 'Serif' : 'Default'} font"
				>
					Aa</button
				>
			</div>

			{@render children()}
		</div>

		{#if scroll.y > 90}
			<div class="motion-translate-y-in-150 fixed bottom-3 left-3 z-40">
				<button
					class={cn(
						'flex size-12 items-center justify-center transition-all hover:cursor-pointer',
						buttonVariant
					)}
					onclick={() => scroll.scrollToTop()}
				>
					<Icon icon="ic:baseline-arrow-back" class="rotate-90 text-2xl" />
				</button>
			</div>
		{/if}
	</div>
</div>
