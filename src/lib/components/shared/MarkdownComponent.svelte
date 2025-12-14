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

<!-- XSS risk accepted: Content comes from trusted Strapi CMS backend with proper authentication -->
<!-- eslint-disable svelte/no-at-html-tags -->
{@html htmlContent}
<!-- eslint-enable svelte/no-at-html-tags -->
