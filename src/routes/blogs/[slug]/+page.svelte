<script lang="ts">
	import ContentPageComponent from '$lib/components/shared/ContentPageComponent.svelte';
	import MarkdownComponent from '$lib/components/shared/MarkdownComponent.svelte';
	import { serifStore } from '$lib/stores/serifFontStore.js';
	import { cn } from '$lib/utils';

	const { data } = $props();

	const serifFont = serifStore;
</script>

<ContentPageComponent>
	<div class="my-8 flex flex-row justify-center">
		{#if data.blog}
			<article
				class={cn(
					'prose prose-sm sm:prose-base dark:prose-invert prose-neutral',
					serifFont.current && 'font-serif'
				)}
			>
				<MarkdownComponent content={data.blog.content!} />
				<p class="pt-10 text-center text-xs">
					This article was written by a human author and reviewed using AI tools for language
					accuracy and translation consistency.
				</p>
			</article>
		{:else}
			<p>Unable to load blog content.</p>
		{/if}
	</div>
</ContentPageComponent>
