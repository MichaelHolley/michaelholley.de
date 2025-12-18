<script lang="ts">
	import { serifStore } from '$lib/stores/serifFontStore';
	import { cn } from '$lib/utils';
	import Icon from '@iconify/svelte';
	import type { Snippet } from 'svelte';

	const {
		children,
		centeredContent
	}: {
		children: Snippet;
		centeredContent?: boolean;
	} = $props();

	const serifFont = serifStore;
</script>

<div class="bg-white text-black dark:bg-transparent dark:text-white">
	<div class="container min-h-screen py-10">
		<div>
			<div class="flex flex-row justify-between">
				<a href="/" class=" flex flex-row items-center gap-1">
					<Icon icon="ic:baseline-arrow-back" class="text-secondary" />
					Zurück
				</a>
				<button
					class={cn(
						'size-8 rounded-sm border hover:cursor-pointer',
						!serifFont.current && 'font-serif'
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
	</div>
</div>
