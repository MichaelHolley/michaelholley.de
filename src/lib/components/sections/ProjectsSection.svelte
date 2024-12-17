<script lang="ts">
	import { cn } from '$lib/utils';
	import { projects } from '../shared/data/projects';
	import BentoCard from '../shared/misc/BentoCard.svelte';
	import BentoGrid from '../shared/misc/BentoGrid.svelte';
	import SectionHeader from '../shared/SectionHeader.svelte';

	let selectedIndex = -1;
	$: cards =
		selectedIndex === -1
			? projects
			: [projects[selectedIndex], ...projects.filter((_, i) => i !== selectedIndex)];
</script>

<section id="projects" class="bg-black text-white">
	<div class="container py-8 md:py-16">
		<SectionHeader title="Projekte" class="pb-8" />
		<div class="flex flex-col justify-center items-center gap-24 md:gap-64">
			<BentoGrid>
				{#each cards as card, i}
					<BentoCard
						name={card.title}
						description={card.shortDescription}
						icon={card.icon}
						class={cn(
							card.class,
							selectedIndex != -1 && i === 0 && '!col-span-full row-span-2',
							selectedIndex != -1 && 'col-span-1 lg:col-span-1'
						)}
						cta="Learn more"
						selected={selectedIndex === i}
						on:click={() => {
							if (selectedIndex === i) selectedIndex = -1;
							else selectedIndex = i;
						}}
					/>
				{/each}
			</BentoGrid>
		</div>
	</div>
</section>
