<script lang="ts">
	import { cn } from '$lib/utils';
	import { projects } from '../shared/data/projects';
	import BentoCard from '../shared/misc/BentoCard.svelte';
	import BentoGrid from '../shared/misc/BentoGrid.svelte';
	import SectionHeader from '../shared/SectionHeader.svelte';

	let gridDivRef: HTMLElement;

	let selectedId: string | undefined = undefined;
	const cardsMap = new Map<string, any>();
	projects.forEach((p) => cardsMap.set(crypto.randomUUID(), p));

	$: cards =
		selectedId === undefined
			? [...cardsMap.entries()]
			: [
					[selectedId, cardsMap.get(selectedId)],
					...Array.from(cardsMap.entries()).filter(([id, c]) => selectedId != id)
			  ];
</script>

<section id="projects" class="bg-black text-white">
	<div class="container py-8 md:py-16">
		<SectionHeader title="Projekte" class="pb-8" />
		<div class="flex flex-col justify-center items-center gap-24 md:gap-64" bind:this={gridDivRef}>
			<BentoGrid>
				{#each cards as card, i}
					<BentoCard
						name={card[1].title}
						description={card[1].shortDescription}
						icon={card[1].icon}
						class={cn(
							card[1].class,
							selectedId === card[0] && i === 0 && '!col-span-full row-span-2',
							selectedId != undefined && 'col-span-full lg:col-span-1'
						)}
						cta="Learn more"
						selected={selectedId === card[0]}
						on:click={() => {
							if (selectedId != card[0]) selectedId = card[0];
							else selectedId = undefined;

							gridDivRef.scrollIntoView({ behavior: 'smooth' });
						}}
					/>
				{/each}
			</BentoGrid>
		</div>
	</div>
</section>
