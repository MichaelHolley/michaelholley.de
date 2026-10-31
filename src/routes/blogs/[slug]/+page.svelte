<script lang="ts">
	import { page } from '$app/state';
	import { track, trackOnce } from '#lib/analytics/umami.js';
	import { getBlogBySlug } from '#lib/api/blogs.remote.js';
	import ContentPageComponent from '#lib/components/shared/ContentPageComponent.svelte';
	import TagComponent from '#lib/components/shared/TagComponent.svelte';
	import { formatDisplayDate } from '#lib/components/shared/util/formatDisplayDate.js';
	import { jsonLdScript } from '#lib/seo/jsonLd.js';

	const { params } = $props();
	const { blog } = $derived(await getBlogBySlug(params.slug));

	const structuredData = $derived(
		jsonLdScript({
			'@type': 'BlogPosting',
			headline: blog.title,
			description: blog.description,
			datePublished: blog.released,
			dateModified: blog.updatedAt,
			inLanguage: 'de',
			url: `${page.url.origin}${page.url.pathname}`,
			mainEntityOfPage: `${page.url.origin}${page.url.pathname}`,
			...(blog.teaserImage && { image: blog.teaserImage.url }),
			...(blog.tags?.length && { keywords: blog.tags.map((tag) => tag.value) }),
			author: { '@type': 'Person', '@id': `${page.url.origin}/#person`, name: 'Michael Holley' },
			isPartOf: { '@id': `${page.url.origin}/#website` }
		})
	);
</script>

<svelte:head>
	<title>{blog.title} | Michael Holley</title>
	<meta name="description" content={blog.description} />
	<meta property="og:title" content={blog.title} />
	<meta property="og:type" content="article" />
	<meta property="og:description" content={blog.description} />
	<meta property="article:published_time" content={blog.released} />
	<meta property="article:modified_time" content={blog.updatedAt} />
	<meta property="article:author" content="Michael Holley" />
	<meta name="twitter:card" content={blog.teaserImage ? 'summary_large_image' : 'summary'} />
	<meta name="twitter:title" content={blog.title} />
	<meta name="twitter:description" content={blog.description} />
	{#if blog.teaserImage}
		<meta property="og:image" content={blog.teaserImage.url} />
		<meta name="twitter:image" content={blog.teaserImage.url} />
	{/if}
	{#each blog.tags ?? [] as tag (tag.id)}
		<meta property="article:tag" content={tag.value} />
	{/each}
	<!-- eslint-disable-next-line svelte/no-at-html-tags -->
	{@html structuredData}
</svelte:head>

<ContentPageComponent>
	<article class="mx-auto mt-12 max-w-[68ch] md:mt-20">
		<header>
			<time datetime={blog.released} class="text-tertiary dark:text-muted tabular-nums">
				{formatDisplayDate(blog.released)}
			</time>
			<h1
				class="mt-3 text-[clamp(1.75rem,1.2rem+2.2vw,2.75rem)] leading-[1.1] font-semibold tracking-[-0.015em]"
			>
				{blog.title}
			</h1>
			{#if blog.tags?.length}
				<div class="mt-5 flex flex-wrap gap-1.5">
					{#each blog.tags as tag (tag.id)}
						<TagComponent value={tag.value} class="dark:bg-surface dark:text-white" />
					{/each}
				</div>
			{/if}
		</header>
		{#if blog.teaserImage}
			<img
				src={blog.teaserImage.url}
				alt={blog.teaserImage.alternativeText || blog.title}
				class="bg-paper-surface dark:bg-surface mt-10 aspect-video w-full object-cover"
			/>
		{/if}
		<div class="prose dark:prose-invert mt-10 max-w-none">
			<!-- eslint-disable svelte/no-at-html-tags -->
			{@html blog.content}
			<!-- eslint-enable svelte/no-at-html-tags -->
		</div>
		<p
			class="text-small text-tertiary dark:text-muted mt-16"
			use:trackOnce={() => track('article-read', { blog: blog.slug })}
		>
			Dieser Artikel wurde von einem Menschen geschrieben und mit KI-Werkzeugen auf sprachliche
			Korrektheit und Übersetzungskonsistenz geprüft.
		</p>
	</article>
</ContentPageComponent>
