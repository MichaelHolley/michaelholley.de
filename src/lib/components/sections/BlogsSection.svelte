<script lang="ts">
	import SectionHeader from '$lib/components/shared/SectionHeader.svelte';
	import type { Blog } from '$lib/server/blogs';

	const { blogs }: { blogs: Blog[] } = $props();
</script>

{#if blogs.length}
	<section id="blog" class="bg-tertiary text-white">
		<div class="container py-8 md:py-16">
			<SectionHeader title="blog" class="pb-8 text-center" />
			<div class="flex flex-col items-center gap-6">
				{#each blogs as b}
					<a
						href="/blogs/{b.id}"
						class="group min-h-16 max-w-152 py-1"
						data-sveltekit-preload-data="tap"
					>
						<div class="flex flex-row justify-start gap-3 text-sm text-white/50">
							<p>{b.released}</p>
							<p>|</p>
							<p>{b.tags?.join(' • ').toLowerCase()}</p>
						</div>

						<div
							class="mt-2 text-2xl font-extrabold tracking-wide transition-all ease-in-out group-hover:pl-1.5"
						>
							{b.title}
						</div>
						<p class="mt-2 text-white/80">{b.description}</p>
					</a>
				{/each}
			</div>
		</div>
	</section>
{/if}
