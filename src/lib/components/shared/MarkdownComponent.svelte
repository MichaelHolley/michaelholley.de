<script lang="ts">
	import { useSerifFont } from '$lib/stores/serifFontStore';
	import { marked } from 'marked';

	const { content, class: className } = $props<{
		content: string;
		class?: string;
	}>();

	const htmlContent = marked(content);
</script>

<article class="{$useSerifFont ? 'serif-font' : ''} prose dark:prose-invert {className}">
	{@html htmlContent}
</article>
