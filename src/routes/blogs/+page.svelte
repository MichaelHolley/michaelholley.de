<script lang="ts">
	import { getBlogs } from '$lib/api/blogs.remote';
	import TagComponent from '$lib/components/shared/TagComponent.svelte';
	import { formatDisplayDate } from '$lib/components/shared/util/formatDisplayDate';
	import { getThumbnailImageUrl } from '$lib/components/shared/util/getThumbnailImageUrl';
	import Icon from '@iconify/svelte';

	const description =
		'Alle Artikel von Michael Holley — über Webentwicklung, Software-Architektur und die Werkzeuge dazwischen.';

	const { blogs } = await getBlogs();
</script>

<svelte:head>
	<title>Blog | Michael Holley</title>
	<meta name="description" content={description} />
	<meta property="og:title" content="Blog | Michael Holley" />
	<meta property="og:type" content="website" />
	<meta property="og:description" content={description} />
</svelte:head>

<section class="min-h-svh bg-black text-white">
	<div class="container py-8 md:py-16">
		<a
			href="/"
			class="focus-visible:outline-secondary inline-flex flex-row items-center gap-1 focus-visible:outline-2 focus-visible:outline-offset-4"
		>
			<Icon icon="ic:baseline-arrow-back" class="text-secondary" />
			Zurück
		</a>

		<header class="mt-10 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
			<h1 class="text-5xl font-bold tracking-tighter lowercase text-shadow-md sm:text-7xl">blog</h1>
		</header>

		{#if blogs.length > 0}
			<ul class="mt-12 border-t border-white/15">
				{#each blogs as b (b.id)}
					<li>
						<a
							href="/blogs/{b.slug}"
							class="focus-visible:outline-secondary group grid grid-cols-[1fr] items-start gap-x-8 gap-y-3 border-b border-white/15 py-8 transition-colors hover:bg-white/[0.03] focus-visible:outline-2 focus-visible:-outline-offset-2 sm:grid-cols-[8rem_1fr_9rem]"
							data-sveltekit-preload-data="tap"
						>
							<time
								datetime={b.released}
								class="font-mono text-xs tracking-widest text-neutral-500 uppercase sm:pt-2"
							>
								{formatDisplayDate(b.released)}
							</time>

							<div class="flex flex-col gap-2">
								<h2
									class="group-hover:text-primary text-2xl font-semibold tracking-tight text-balance transition-colors sm:text-3xl"
								>
									{b.title}
								</h2>
								<p class="max-w-prose leading-relaxed text-neutral-400">{b.description}</p>
								{#if b.tags?.length}
									<div class="mt-1 flex flex-row flex-wrap gap-1.5">
										{#each b.tags as tag (tag.id)}
											<TagComponent value={tag.value} class="border-neutral-600 text-neutral-400" />
										{/each}
									</div>
								{/if}
							</div>

							{#if b.teaserImage}
								<img
									src={getThumbnailImageUrl(b.teaserImage)}
									alt=""
									class="hidden h-24 w-full object-cover object-center opacity-70 transition-opacity duration-300 group-hover:opacity-100 sm:block"
								/>
							{/if}
						</a>
					</li>
				{/each}
			</ul>
		{/if}
	</div>
</section>
