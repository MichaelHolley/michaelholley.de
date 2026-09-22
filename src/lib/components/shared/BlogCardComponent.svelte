<script lang="ts">
	import { track } from '$lib/analytics/umami';
	import type { Blog } from '$lib/server/types';
	import Icon from '@iconify/svelte';
	import TagComponent from './TagComponent.svelte';
	import { formatDisplayDate } from './util/formatDisplayDate';
	import { getThumbnailImageUrl } from './util/getThumbnailImageUrl';

	const { blog }: { blog: Blog } = $props();
</script>

<a
	href={blog.isExternal ? blog.externalUrl : `/blogs/${blog.slug}`}
	target={blog.isExternal ? '_blank' : undefined}
	rel={blog.isExternal ? 'noopener noreferrer' : undefined}
	class="group flex max-w-72 transform-gpu flex-col overflow-hidden border border-black/5 bg-white text-black shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl active:translate-y-0 active:scale-99"
	data-sveltekit-preload-data="tap"
	onclick={() =>
		track('blog-open', { blog: blog.slug, location: 'blogs-section', external: blog.isExternal })}
>
	<div class="relative h-40 overflow-hidden">
		<img
			src={getThumbnailImageUrl(blog.teaserImage)}
			alt={blog.title}
			class="h-full w-full transform-gpu object-cover object-center transition-transform duration-500 group-hover:scale-105"
		/>
		<div
			class="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"
		></div>
		{#if blog.isExternal}
			<div
				class="absolute top-2 left-2 flex flex-row items-center gap-1 bg-black/70 px-1.5 py-0.5 text-xs text-white backdrop-blur-sm"
			>
				<Icon icon="ic:baseline-open-in-new" class="size-3.5" />
				{blog.externalSource ? `Extern · ${blog.externalSource}` : 'Extern'}
			</div>
		{/if}
	</div>
	<div class="flex flex-1 flex-col p-4">
		<div class="flex flex-col items-start gap-2">
			<time datetime={blog.released} class="text-xs text-neutral-400">
				{formatDisplayDate(blog.released)}
			</time>
			{#if blog.tags?.length}
				<div class="flex flex-row flex-wrap gap-1.5">
					{#each blog.tags as tag (tag.id)}
						<TagComponent value={tag.value} class="whitespace-nowrap" />
					{/each}
				</div>
			{/if}
		</div>
		<h3
			class="group-hover:text-primary mt-2 text-lg font-semibold tracking-tight transition-colors"
		>
			{blog.title}
		</h3>
		<p class="mt-1 text-sm leading-5 text-black/70">{blog.description}</p>
	</div>
</a>
