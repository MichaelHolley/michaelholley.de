<script lang="ts">
	import ContentPageComponent from '$lib/components/shared/ContentPageComponent.svelte';
	import MarkdownComponent from '$lib/components/shared/MarkdownComponent.svelte';
	import { useSerifFont } from '$lib/stores/serifFontStore';
	import type { PageServerData } from './$types';

	const { data } = $props<{ data: PageServerData }>();
</script>

<ContentPageComponent>
	<div class="flex flex-row justify-center">
		<article
			class="my-8 {$useSerifFont
				? 'serif-font'
				: ''} prose prose-sm sm:prose-base dark:prose-invert prose-neutral"
		>
			<MarkdownComponent content={data.blog.content} />
		</article>
	</div>
</ContentPageComponent>
