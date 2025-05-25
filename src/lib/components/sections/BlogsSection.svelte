<script lang="ts">
	import SectionHeader from '$lib/components/shared/SectionHeader.svelte';
	import type { Blog } from '$lib/server/blogs';

	const { blogs }: { blogs: Blog[] } = $props();
</script>

{#if blogs.length}
	<section id="blog" class="bg-tertiary text-white">
		<div class="container py-8 md:py-16">
			<SectionHeader title="blog" class="pb-8 text-center" />
			<div class="ml-1 flex flex-col items-center gap-4">
				{#each blogs as b}
					<a href="/blogs/{b.id}" class="group min-h-16 max-w-152 py-1">
						<span class="group-hover:text-secondary mb-2 font-bold">{b.title}</span>
						<p class="text-white/40">{b.tags?.join(', ')}</p>
						<p class="text-white/80">{b.description}</p>
					</a>
				{/each}
			</div>
		</div>
	</section>
{/if}
