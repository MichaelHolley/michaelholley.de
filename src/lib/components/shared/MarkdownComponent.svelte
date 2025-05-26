<script lang="ts">
	import { marked } from 'marked';
	import { onMount } from 'svelte';

	const { content } = $props<{
		content: string;
	}>();

	let htmlContent = $state();

	onMount(() => {
		htmlContent = marked(content);
	});
</script>

{@html htmlContent}
