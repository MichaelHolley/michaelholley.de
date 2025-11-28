<script lang="ts">
	import { marked } from 'marked';
	import { onMount } from 'svelte';

	const {
		content
	}: {
		content: string;
	} = $props();

	let htmlContent = $state();

	onMount(() => {		
		htmlContent = marked(content);
	});
</script>

{@html htmlContent}
