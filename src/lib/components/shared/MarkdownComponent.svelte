<script lang="ts">
	import { marked } from 'marked';
	import { onMount } from 'svelte';

	const { content, class: className } = $props<{
		content: string;
		class?: string;
	}>();

	let htmlContent = $state();

	onMount(() => {
		htmlContent = marked(content);
	});
</script>

{@html htmlContent}
