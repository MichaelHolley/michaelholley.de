<script lang="ts">
	import { reveal } from '#lib/actions/reveal.js';
	import { track, trackOnce } from '#lib/analytics/umami.js';
	import { getBlogs } from '#lib/api/blogs.remote.js';
	import { formatDisplayDate } from '#lib/components/shared/util/formatDisplayDate.js';
	import { getImageUrl } from '#lib/components/shared/util/getImageUrl.js';
	import type { Blog } from '#lib/server/types.js';
	import Icon from '@iconify/svelte';

	const { blogs } = await getBlogs();
	const [newest, ...older] = blogs;
	const earlier = older.slice(0, 4);

	const hrefOf = (b: Blog) => (b.isExternal ? b.externalUrl : `/blogs/${b.slug}`);
	const linkProps = (b: Blog) => ({
		href: hrefOf(b),
		target: b.isExternal ? '_blank' : undefined,
		rel: b.isExternal ? 'noopener noreferrer' : undefined,
		'data-sveltekit-preload-data': 'tap' as const,
		onclick: () =>
			track('blog-open', { blog: b.slug, location: 'blogs-section', external: b.isExternal })
	});
</script>

{#if newest}
	<section
		id="blog"
		class="section-space bg-tertiary text-white"
		aria-labelledby="blog-title"
		use:trackOnce={() => track('section-view', { section: 'blog' })}
	>
		<div class="page-grid container gap-y-8">
			<div class="col-span-12 flex items-baseline justify-between gap-6" use:reveal>
				<h2 id="blog-title" class="text-lead font-medium">Blog</h2>
				<a
					href="/blogs"
					class="link-underline press inline-flex min-h-11 items-center gap-2 font-medium"
					onclick={() => track('blog-index-open', { location: 'blogs-section' })}
				>
					Zum Blog
					<Icon icon="ic:baseline-arrow-forward" class="size-5" aria-hidden="true" />
				</a>
			</div>

			{#if newest.teaserImage}
				<a
					{...linkProps(newest)}
					class="group col-span-12 block self-start overflow-clip bg-black/20 lg:col-span-5"
					tabindex="-1"
					aria-hidden="true"
					use:reveal={70}
				>
					<img
						src={getImageUrl(newest.teaserImage, 'large')}
						alt=""
						width="1000"
						height="563"
						loading="lazy"
						class="aspect-video w-full object-cover transition-transform duration-700 ease-(--ease-out) group-hover:scale-[1.03]"
					/>
				</a>
			{/if}

			<div class="col-span-12 lg:col-span-7 lg:col-start-6" use:reveal={140}>
				<time datetime={newest.released} class="tabular-nums">
					{formatDisplayDate(newest.released)}
				</time>
				<h3 class="text-lead mt-2 font-medium">
					<a {...linkProps(newest)} class="link-underline">
						{newest.title}
						{#if newest.isExternal}
							<span class="sr-only">(öffnet in neuem Tab)</span>
						{/if}
					</a>
				</h3>
				<p class="mt-3 max-w-[56ch]">{newest.description}</p>
				{#if newest.isExternal}
					<p class="mt-3 inline-flex items-center gap-2 font-medium">
						<Icon icon="ic:baseline-open-in-new" class="size-4" aria-hidden="true" />
						{newest.externalSource ? `Erschienen bei ${newest.externalSource}` : 'Externer Artikel'}
					</p>
				{/if}

				{#if earlier.length}
					<h3 class="mt-12 font-medium">Davor</h3>
					<ul class="mt-2">
						{#each earlier as b (b.id)}
							<li>
								<a
									{...linkProps(b)}
									class="group flex min-h-11 items-start justify-between gap-6 py-2.5"
								>
									<span class="flex items-start gap-3">
										{#if b.teaserImage}
											<img
												src={getImageUrl(b.teaserImage, 'thumbnail')}
												alt=""
												width="20"
												height="20"
												loading="lazy"
												class="mt-1 size-5 shrink-0 rounded-full object-cover"
											/>
										{/if}
										<span class="link-underline group-hover:decoration-current">
											{b.title}
											{#if b.isExternal}
												<span class="sr-only">(öffnet in neuem Tab)</span>
											{/if}
										</span>
									</span>
									<time datetime={b.released} class="text-small shrink-0 pt-0.5 tabular-nums">
										{formatDisplayDate(b.released)}
									</time>
								</a>
							</li>
						{/each}
					</ul>
				{/if}
			</div>
		</div>
	</section>
{/if}
