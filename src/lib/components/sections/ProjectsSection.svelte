<script lang="ts">
	import SectionHeader from '$lib/components/shared/SectionHeader.svelte';
	import type { Project } from '$lib/server/projects';
	import BentoCardComponent from '../shared/BentoGrid/BentoCardComponent.svelte';
	import BentoGridComponent from '../shared/BentoGrid/BentoGridComponent.svelte';

	const { projects }: { projects: Project[] } = $props();
</script>

<section id="projects" class="bg-black text-white">
	<div class="container py-8 md:py-16">
		<SectionHeader title="Projekte" class="pb-8" />
		<div class="flex flex-col items-center justify-center gap-24 md:gap-64">
			<BentoGridComponent class="grid-cols-1 lg:grid-cols-3">
				{#each projects as p, i}
					<BentoCardComponent
						name={p.title}
						description={p.short}
						icon={p.icon}
						href="/projects/{p.id}"
						cta={'Read more'}
						class={p.class}
					/>
				{/each}
			</BentoGridComponent>
		</div>
	</div>
</section>

<style>
	/* Firefox */
	* {
		scrollbar-width: thin;
		scrollbar-color: var(--color-white) transparent;
	}

	/* Chrome, Edge, and Safari */
	*::-webkit-scrollbar {
		width: 4px;
	}

	*::-webkit-scrollbar-track {
		background: transparent;
	}

	*::-webkit-scrollbar-thumb {
		background-color: var(--color-white);
	}
</style>
