<script lang="ts">
	import { getBlogs } from '$lib/api/blogs.remote';
	import SectionHeader from '$lib/components/shared/SectionHeader.svelte';
	import Icon from '@iconify/svelte';
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
			<div class="flex flex-row justify-center pt-8">
				<a
					href="/blogs"
					class="group flex flex-row items-center gap-1 underline-offset-4 transition-all hover:underline"
				>
					Alle Artikel
					<Icon
						icon="ic:baseline-arrow-back"
						class="rotate-180 transition-transform group-hover:translate-x-0.5"
					/>
				</a>
			</div>
		</div>
	</section>
{/if}
