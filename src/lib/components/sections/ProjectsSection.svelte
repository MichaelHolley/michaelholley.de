<script lang="ts">
	import { cn } from '$lib/utils';
	import BentoCard from '../projects/BentoCard.svelte';
	import BentoGrid from '../projects/BentoGrid.svelte';
	import { projects } from '../shared/data/projects';
	import SectionHeader from '../shared/SectionHeader.svelte';

	let gridDivRef: HTMLElement;
	let selectedIndex = -1;
</script>

<section id="projects" class="bg-black text-white">
	<div class="container py-8 md:py-16">
		<SectionHeader title="Projekte" class="pb-8" />
		<div class="flex flex-col justify-center items-center gap-24 md:gap-64" bind:this={gridDivRef}>
			<BentoGrid>
				{#each projects as card, i}
					<BentoCard
						name={card.title}
						subheader={card.shortDescription}
						description={card.description}
						icon={card.icon}
						expanded={selectedIndex === i}
						on:click={() => {
							if (selectedIndex === i) selectedIndex = -1;
							else selectedIndex = i;
							gridDivRef.scrollIntoView({ behavior: 'smooth' });
						}}
						class={cn(
							card.class,
							selectedIndex === i && '-order-1 !col-span-full row-span-2',
							selectedIndex != i && selectedIndex != -1 && 'col-span-1 lg:col-span-1'
						)}
					/>
				{/each}
			</BentoGrid>
		</div>
	</div>
</section>
