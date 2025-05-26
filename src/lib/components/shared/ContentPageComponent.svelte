<script lang="ts">
	import { toggleSerifFont, useSerifFont } from '$lib/stores/serifFontStore';
	import Icon from '@iconify/svelte';
	import type { Snippet } from 'svelte';

	const { children, slideLeft } = $props<{
		children: Snippet;
		slideLeft?: boolean;
	}>();
</script>

<div class="bg-white text-black dark:bg-transparent dark:text-white">
	<div class="container min-h-screen py-10">
		<div class={slideLeft ? 'max-w-5xl' : ''}>
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

			{@render children()}
		</div>
	</div>
</div>
