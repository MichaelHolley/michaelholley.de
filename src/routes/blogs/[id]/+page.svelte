<script lang="ts">
	import ContentPageComponent from '$lib/components/shared/ContentPageComponent.svelte';
	import MarkdownComponent from '$lib/components/shared/MarkdownComponent.svelte';
	import { useSerifFont } from '$lib/stores/serifFontStore';

	const { data } = $props();
</script>

<ContentPageComponent>
	<div class="my-8 flex flex-row justify-center">
		{#if data.blog}
			<article
				class="{$useSerifFont
					? 'serif-font'
					: ''} prose prose-sm sm:prose-base dark:prose-invert prose-neutral"
			>
				<MarkdownComponent content={data.blog.content} />
			</article>
		{:else}
			<p>Unable to load blog content.</p>
		{/if}
	</div>
</ContentPageComponent>
