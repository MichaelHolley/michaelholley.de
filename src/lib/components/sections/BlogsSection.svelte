<script lang="ts">
	import SectionHeader from '$lib/components/shared/SectionHeader.svelte';

	const { blogs }: { blogs: any[] } = $props();
</script>

{#if blogs.length}
	<section id="blogs" class="bg-tertiary text-white">
		<div class="container py-8 md:py-16">
			<SectionHeader title="blogs" class="pb-8 text-center" />
			<div class="ml-1 flex flex-col gap-4">
				{#each blogs as b}
					<a
						href="/blog/{b.id}"
						class="hover:border-primary min-h-16 border-l-4 border-white/50 py-1 pl-4"
					>
						<p class="font-bold">{b.title}</p>
						<p>{b.description}</p>
					</a>
				{/each}
			</div>
		</div>
	</section>
{/if}
