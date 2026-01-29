<script lang="ts">
	import { getBlogs } from '$lib/api/blogs.remote';
	import SectionHeader from '$lib/components/shared/SectionHeader.svelte';
	import { formatDisplayDate } from '../shared/formatDisplayDate';

	const { blogs } = await getBlogs();
</script>

{#if blogs && blogs.length > 0}
	<section id="blog" class="bg-tertiary text-white">
		<div class="container py-8 md:py-16">
			<SectionHeader title="blog" class="pb-8 text-center" />
			<div class="flex flex-col items-center gap-6">
				{#each blogs as b (b.id)}
					<a
						href="/blogs/{b.slug}"
						class="group min-h-16 max-w-152 py-1"
						data-sveltekit-preload-data="tap"
					>
						<div class="flex flex-row justify-start gap-3 text-sm text-white/40">
							<p>
								{formatDisplayDate(b.released)}
							</p>
							<p>|</p>
							<p>
								{b.tags
									?.map((tag) => tag.value)
									.join(' • ')
									.toLowerCase()}
							</p>
						</div>

						<div
							class="mt-0.5 text-2xl font-semibold transition-all ease-in-out group-hover:pl-1.5"
						>
							{b.title}
						</div>
						<p class="mt-1.5 leading-7 text-white/70">{b.description}</p>
					</a>
				{/each}
			</div>
		</div>
	</section>
{/if}
