<script lang="ts">
	import { serifStore } from '$lib/stores/serifFontStore';
	import { cn } from '$lib/utils';
	import Icon from '@iconify/svelte';
	import { ScrollState } from 'runed';
	import { type Snippet } from 'svelte';
	import { browser } from '$app/environment';

	const {
		children,
		centeredContent
	}: {
		children: Snippet;
		centeredContent?: boolean;
	} = $props();

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
		'text-neutral-400 hover:text-neutral-500',
		'dark:text-neutral-700 hover:dark:text-neutral-600'
	);
</script>

<div class="bg-white text-black dark:bg-transparent dark:text-white">
	<div class="container min-h-screen py-10">
		<div>
			<div class="flex flex-row justify-between">
				<button
					type="button"
					onclick={() => history.back()}
					class=" flex flex-row items-center gap-1 hover:cursor-pointer"
				>
					<Icon icon="ic:baseline-arrow-back" class="text-secondary" />
					Zurück
				</button>
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

			<div class="flex flex-row justify-center">
				<div class={centeredContent ? 'max-w-5xl' : ''}>
					{@render children()}
				</div>
			</div>
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
