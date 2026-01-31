<script lang="ts">
	import { getBlobBySlug } from '$lib/api/blogs.remote';
	import ContentPageComponent from '$lib/components/shared/ContentPageComponent.svelte';
	import TagComponent from '$lib/components/shared/TagComponent.svelte';
	import { formatDisplayDate } from '$lib/components/shared/util/formatDisplayDate.js';
	import { serifStore } from '$lib/stores/serifFontStore.js';
	import { cn } from '$lib/utils';

	const { params } = $props();
	const { blog } = await getBlobBySlug(params.slug);

	const serifFont = serifStore;
</script>

<svelte:head>
	<title>{blog?.title}</title>
	<meta name="description" content={blog?.description} />
	<meta property="og:title" content={blog?.title} />
	<meta property="og:type" content="article" />
	<meta property="og:description" content={blog?.description} />
	<meta property="og:url" content="https://michaelholley.de/blogs/{blog?.slug}" />
</svelte:head>

<ContentPageComponent>
	{#if blog}
		<div class="my-8 flex flex-row justify-center">
			<div>
				<div class="mb-2 flex flex-row justify-start gap-3 text-sm text-neutral-400">
					<div class="flex flex-row items-center">
						<span class="mr-6">{formatDisplayDate(blog.released)}</span>
						<div class="flex flex-row items-center gap-1.5">
							{#each blog.tags as tag (tag.id)}
								<TagComponent
									value={tag.value}
									class="dark:border-neutral-600 dark:text-neutral-400"
								/>
							{/each}
						</div>
					</div>
				</div>
				<h1 class="mb-8 text-4xl font-extrabold tracking-tight break-all">
					{blog.title}
				</h1>
				<article
					class={cn(
						'prose prose-sm sm:prose-base dark:prose-invert prose-neutral',
						serifFont.current && 'font-serif'
					)}
				>
					{#if blog.teaserImage}
						<img
							src={blog.teaserImage?.url}
							alt={blog.title}
							class="w-full"
							style:view-transition-name={`blog-image-${blog.id}`}
						/>
					{/if}
					<div class="motion-preset-slide-up-sm motion-delay-50 motion-duration-500">
						<!-- eslint-disable svelte/no-at-html-tags -->
						{@html blog.content}
						<!-- eslint-enable svelte/no-at-html-tags -->
					</div>
					<p class="pt-10 text-center text-xs">
						This article was written by a human author and reviewed using AI tools for language
						accuracy and translation consistency.
					</p>
				</article>
			</div>
		</div>
	{:else}
		<p>Unable to load blog content.</p>
	{/if}
</ContentPageComponent>
