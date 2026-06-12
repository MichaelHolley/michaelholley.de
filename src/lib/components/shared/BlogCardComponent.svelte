<script lang="ts">
	import type { Blog } from '$lib/server/types';
	import TagComponent from './TagComponent.svelte';
	import { formatDisplayDate } from './util/formatDisplayDate';
	import { getThumbnailImageUrl } from './util/getThumbnailImageUrl';

	const { blog }: { blog: Blog } = $props();
</script>

<a
	href="/blogs/{blog.slug}"
	class="group flex max-w-72 transform-gpu flex-col overflow-hidden border border-black/5 bg-white text-black shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl active:translate-y-0 active:scale-99"
	data-sveltekit-preload-data="tap"
>
	<div class="relative h-40 overflow-hidden">
		<img
			src={getThumbnailImageUrl(blog.teaserImage)}
			alt={blog.title}
			class="h-full w-full transform-gpu object-cover object-center transition-transform duration-500 group-hover:scale-105"
			style:view-transition-name={`blog-image-${blog.id}`}
		/>
		<div
			class="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"
		></div>
	</div>
	<div class="flex flex-1 flex-col p-4">
		<div class="flex flex-row items-center justify-between gap-2">
			<p class="text-xs text-neutral-400">
				{formatDisplayDate(blog.released)}
			</p>
			<div class="flex flex-row gap-1.5">
				{#each blog.tags ?? [] as tag (tag.id)}
					<TagComponent value={tag.value} />
				{/each}
			</div>
		</div>
		<h3
			class="group-hover:text-primary mt-2 text-lg font-semibold tracking-tight transition-colors"
		>
			{blog.title}
		</h3>
		<p class="mt-1 text-sm leading-5 text-black/70">{blog.description}</p>
	</div>
</a>
