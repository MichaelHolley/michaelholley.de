<script lang="ts">
	import { page } from '$app/state';
	import { reveal } from '#lib/actions/reveal.js';
	import { track } from '#lib/analytics/umami.js';
	import { getBlogs } from '#lib/api/blogs.remote.js';
	import ArrowLink from '#lib/components/shared/ArrowLink.svelte';
	import TagComponent from '#lib/components/shared/TagComponent.svelte';
	import { formatDisplayDate } from '#lib/components/shared/util/formatDisplayDate.js';
	import { getImageUrl } from '#lib/components/shared/util/getImageUrl.js';
	import Icon from '@iconify/svelte';

	const description =
		'Der Blog von Michael Holley — über Webentwicklung, Software-Architektur und die Werkzeuge dazwischen.';

	const { blogs } = await getBlogs();
</script>

<svelte:head>
	<title>Blog | Michael Holley</title>
	<meta name="description" content={description} />
	<meta property="og:title" content="Blog | Michael Holley" />
	<meta property="og:type" content="website" />
	<meta property="og:description" content={description} />
	<meta property="og:image" content={`${page.url.origin}/MichaelHolleyBanner.png`} />
	<meta name="twitter:card" content="summary_large_image" />
</svelte:head>

<section class="min-h-svh bg-black pt-8 pb-[clamp(4.5rem,2.5rem+8vw,10rem)] text-white">
	<div class="container">
		<ArrowLink href="/" direction="back">Startseite</ArrowLink>

		<header class="mt-12 md:mt-20">
			<h1 class="display text-poster">Blog</h1>
			<p class="text-lead mt-5 max-w-[40ch]">
				Über Webentwicklung, Software-Architektur und die Werkzeuge dazwischen.
			</p>
		</header>

		{#if blogs.length > 0}
			<ul class="mt-16 space-y-14 md:mt-24 md:space-y-20">
				{#each blogs as b, i (b.id)}
					<li use:reveal={Math.min(i, 3) * 70}>
						<a
							href={b.isExternal ? b.externalUrl : `/blogs/${b.slug}`}
							target={b.isExternal ? '_blank' : undefined}
							rel={b.isExternal ? 'noopener noreferrer' : undefined}
							class="group page-grid gap-y-4"
							data-sveltekit-preload-data="tap"
							onclick={() =>
								track('blog-open', {
									blog: b.slug,
									location: 'blogs-index',
									external: b.isExternal
								})}
						>
							{#if b.teaserImage}
								<span
									class="col-span-12 block self-start overflow-clip md:col-span-4 lg:col-span-3"
								>
									<img
										src={getImageUrl(b.teaserImage, 'medium')}
										alt=""
										width="750"
										height="422"
										loading="lazy"
										class="aspect-video w-full object-cover transition-transform duration-700 ease-(--ease-out) group-hover:scale-[1.03]"
									/>
								</span>
							{/if}

							<span class="col-span-12 block md:col-span-8 lg:col-span-7 lg:col-start-6">
								<time datetime={b.released} class="text-muted tabular-nums">
									{formatDisplayDate(b.released)}
								</time>
								<h2 class="text-lead group-hover:text-primary mt-1 font-medium transition-colors">
									{b.title}
									{#if b.isExternal}
										<span class="sr-only">(öffnet in neuem Tab)</span>
									{/if}
								</h2>
								<span class="mt-3 block max-w-[62ch]">{b.description}</span>
								{#if b.isExternal}
									<span class="mt-3 flex items-center gap-2 font-medium">
										<Icon icon="ic:baseline-open-in-new" class="size-4" aria-hidden="true" />
										{b.externalSource ? `Erschienen bei ${b.externalSource}` : 'Externer Artikel'}
									</span>
								{/if}
								{#if b.tags?.length}
									<span class="mt-4 flex flex-wrap gap-1.5">
										{#each b.tags as tag (tag.id)}
											<TagComponent value={tag.value} class="bg-surface text-white" />
										{/each}
									</span>
								{/if}
							</span>
						</a>
					</li>
				{/each}
			</ul>
		{/if}
	</div>
</section>
