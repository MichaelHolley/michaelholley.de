<script lang="ts">
	import ContentPageComponent from '$lib/components/shared/ContentPageComponent.svelte';
	import { formatDisplayDate } from '$lib/components/shared/formatDisplayDate.js';
	import { serifStore } from '$lib/stores/serifFontStore.js';
	import { cn } from '$lib/utils';
	import { da } from 'zod/locales';

	const { data } = $props();

	const serifFont = serifStore;
</script>

<svelte:head>
	<title>{data.blog?.title}</title>
	<meta name="description" content={data.blog?.description} />
	<meta property="og:title" content={data.blog?.title} />
	<meta property="og:type" content="article" />
	<meta property="og:description" content={data.blog?.description} />
	<meta property="og:url" content="https://michaelholley.de/blogs/{data.blog?.slug}" />
</svelte:head>

<ContentPageComponent>
	<div class="my-8 flex flex-row justify-center">
		{#if data.blog}
			<div>
				<div
					class="mb-2 flex flex-row justify-start gap-3 text-sm text-white/40"
					style:view-transition-name="blog-{data.blog.id}-info"
				>
					<p>
						{formatDisplayDate(data.blog.released)}
					</p>
					<p>|</p>
					<p>
						{data.blog.tags
							?.map((tag) => tag.value)
							.join(' • ')
							.toLowerCase()}
					</p>
				</div>
				<h1
					class="mb-8 text-4xl font-extrabold tracking-tight break-all"
					style:view-transition-name="heading-blog-{data.blog.slug}"
				>
					{data.blog.title}
				</h1>
				<article
					class={cn(
						'prose prose-sm sm:prose-base dark:prose-invert prose-neutral',
						'motion-preset-slide-up-sm motion-delay-50 motion-duration-500',
						serifFont.current && 'font-serif'
					)}
				>
					<!-- eslint-disable svelte/no-at-html-tags -->
					{@html data.blog.content}
					<!-- eslint-enable svelte/no-at-html-tags -->
					<p class="pt-10 text-center text-xs">
						This article was written by a human author and reviewed using AI tools for language
						accuracy and translation consistency.
					</p>
				</article>
			</div>
		{:else}
			<p>Unable to load blog content.</p>
		{/if}
	</div>
</ContentPageComponent>
