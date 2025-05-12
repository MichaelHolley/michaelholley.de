<script>
	import ContentPageComponent from '$lib/components/shared/ContentPageComponent.svelte';
	import MarkdownComponent from '$lib/components/shared/MarkdownComponent.svelte';
	import content from '$lib/markdown/blog/test.md?raw';
</script>

<ContentPageComponent>
	<MarkdownComponent {content} class="my-8" />
</ContentPageComponent>
