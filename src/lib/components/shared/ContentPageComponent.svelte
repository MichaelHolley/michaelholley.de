<script lang="ts">
	import { toggleSerifFont, useSerifFont } from '$lib/stores/serifFontStore';
	import Icon from '@iconify/svelte';
	import type { Snippet } from 'svelte';

	const { children, centeredContent, heroImage } = $props<{
		children: Snippet;
		centeredContent?: boolean;
		heroImage?: Snippet;
	}>();
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
					class="{!$useSerifFont ? 'serif-font' : ''} size-8 rounded-sm border hover:cursor-pointer"
					onclick={toggleSerifFont}
					title="Change to {!$useSerifFont ? 'Serif' : 'Default'} font"
				>
					Aa</button
				>
			</div>

			{#if heroImage}
				<div class="mt-6">
					{@render heroImage()}
				</div>
			{/if}

			<div class="flex flex-row justify-center">
				<div class={centeredContent ? 'max-w-5xl' : ''}>
					{@render children()}
				</div>
			</div>
		</div>
	</div>
</div>
