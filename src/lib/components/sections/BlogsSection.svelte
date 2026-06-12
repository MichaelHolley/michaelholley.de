<script lang="ts">
	import { getBlogs } from '$lib/api/blogs.remote';
	import SectionHeader from '$lib/components/shared/SectionHeader.svelte';
	import BlogCardComponent from '../shared/BlogCardComponent.svelte';

	const { blogs } = await getBlogs();
</script>

{#if blogs && blogs.length > 0}
	<section id="blog" class="bg-tertiary">
		<div class="container py-8 md:py-16">
			<SectionHeader title="blog" class="pb-8 text-center" />
			<div class="flex flex-row justify-center">
				<div class="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
					{#each blogs as b (b.id)}
						<BlogCardComponent blog={b} />
					{/each}
				</div>
			</div>
		</div>
	</section>
{/if}
