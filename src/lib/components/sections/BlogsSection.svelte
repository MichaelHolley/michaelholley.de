<script lang="ts">
	import { getBlogs } from '$lib/api/blogs.remote';
	import SectionHeader from '$lib/components/shared/SectionHeader.svelte';
	import TagComponent from '../shared/TagComponent.svelte';
	import { formatDisplayDate } from '../shared/util/formatDisplayDate';
	import { getThumbnailImageUrl } from '../shared/util/getThumbnailImageUrl';

	const { blogs } = await getBlogs();
</script>

{#if blogs && blogs.length > 0}
	<section id="blog" class="bg-tertiary">
		<div class="container py-8 md:py-16">
			<SectionHeader title="blog" class="pb-8 text-center" />
			<div class="flex flex-row justify-center">
				<div class="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
					{#each blogs as b}
						<a
							href="/blogs/{b.slug}"
							class="group min-h-16 max-w-72 bg-white text-black transition-all hover:scale-102"
							data-sveltekit-preload-data="tap"
						>
							<div class="flex h-40 flex-row justify-center">
								<img
									src={getThumbnailImageUrl(b.teaserImage)}
									alt={b.title}
									class=" h-full w-full object-cover object-center"
									style:view-transition-name={`blog-image-${b.id}`}
								/>
							</div>
							<div class="p-4">
								<div class="text-black/50">
									<p class="text-xs">
										{formatDisplayDate(b.released)}
									</p>
									<div class="mt-0.5">
										{#each b.tags as tag}
											<TagComponent value={tag.value} />
										{/each}
									</div>
								</div>
								<div class="mt-1 text-lg font-semibold tracking-tight">
									{b.title}
								</div>
								<p class="mt-1 text-sm leading-5 text-black/70">{b.description}</p>
							</div>
						</a>
					{/each}
				</div>
			</div>
		</div>
	</section>
{/if}
