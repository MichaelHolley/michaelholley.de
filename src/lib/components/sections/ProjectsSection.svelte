<script lang="ts">
	import { projects } from '../shared/data/projects';
	import BentoCard from '../shared/misc/BentoCard.svelte';
	import BentoGrid from '../shared/misc/BentoGrid.svelte';
	import SectionHeader from '../shared/SectionHeader.svelte';
</script>

<section id="projects" class="bg-black text-white">
	<div class="container py-8 md:py-16">
		<SectionHeader title="Projekte" class="pb-8" />
		<div class="flex flex-col justify-center items-center gap-24 md:gap-64">
			<BentoGrid>
				{#each projects as project}
					<BentoCard
						name={project.title}
						description={project.shortDescription}
						icon={project.icon}
						class={project.class}
						cta="Learn more"
					/>
				{/each}
			</BentoGrid>
		</div>
	</div>
</section>
