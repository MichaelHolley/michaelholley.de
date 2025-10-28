<script lang="ts">
	import { serifStore } from '$lib/stores/serifFontStore';
	import Icon from '@iconify/svelte';
	import type { Snippet } from 'svelte';

	const { children, centeredContent } = $props<{
		children: Snippet;
		centeredContent?: boolean;
	}>();

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
					class="{!serifFont.current
						? 'serif-font'
						: ''} size-8 rounded-sm border hover:cursor-pointer"
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
