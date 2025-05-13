<script>
	import ContentPageComponent from '$lib/components/shared/ContentPageComponent.svelte';
	import MarkdownComponent from '$lib/components/shared/MarkdownComponent.svelte';
	import content from '$lib/markdown/blog/test.md?raw';
	import { useSerifFont } from '$lib/stores/serifFontStore';
</script>

<ContentPageComponent>
	<div class="flex flex-row justify-center">
		<article
			class="my-8 {$useSerifFont
				? 'serif-font'
				: ''} prose dark:prose-invert prose-neutral dark:prose-pre:bg-neutral-900"
		>
			<MarkdownComponent {content} />
		</article>
	</div>
</ContentPageComponent>
