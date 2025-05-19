<script lang="ts">
	import ContentPageComponent from '$lib/components/shared/ContentPageComponent.svelte';
	import MarkdownComponent from '$lib/components/shared/MarkdownComponent.svelte';
	import { useSerifFont } from '$lib/stores/serifFontStore';
	import type { PageServerData } from '../../blog/[id]/$types';

	const { data } = $props<{ data: PageServerData }>();
</script>

<ContentPageComponent>
	<div class="flex flex-row justify-center">
		<article
			class="my-8 {$useSerifFont
				? 'serif-font'
				: ''} prose dark:prose-invert prose-neutral dark:prose-pre:bg-neutral-900"
		>
			<MarkdownComponent content={data.blog} />
		</article>
	</div>
</ContentPageComponent>
