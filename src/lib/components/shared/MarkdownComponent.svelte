<script lang="ts">
	import { useSerifFont } from '$lib/stores/serifFontStore';
	import { marked } from 'marked';

	const { content } = $props<{
		content: string;
	}>();

	const htmlContent = marked(content);
</script>

<div class={$useSerifFont ? 'serif-font' : ''}>{@html htmlContent}</div>

<style>
</style>
