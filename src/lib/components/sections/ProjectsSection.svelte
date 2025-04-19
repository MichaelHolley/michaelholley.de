<script lang="ts">
	import SectionHeader from '$lib/components/shared/SectionHeader.svelte';
	import type { Project } from '$lib/server/projects';
	import BentoCardComponent from '../shared/BentoCardComponent.svelte';

	const { projects }: { projects: Project[] } = $props();
</script>

{#snippet backgroundImg(url?: string)}
	{#if url}
		<img src={url} alt="background" class="h-full w-full object-cover object-left-top" />
	{/if}
{/snippet}

<section id="projects" class="bg-black text-white">
	<div class="container py-8 md:py-16">
		<SectionHeader title="Projekte" class="pb-8" />
		<div class="flex flex-col items-center justify-center gap-24 md:gap-64">
			<div class="grid w-full auto-rows-[20rem] grid-cols-1 gap-4 lg:grid-cols-3">
				{#each projects as p}
					<BentoCardComponent
						id={p.id}
						name={p.title}
						description={p.short}
						icon={p.icon}
						href="/projects/{p.id}"
						cta={'Mehr'}
						class={p.class}
						backgroundImgUrl={p.previewImg}
					/>
				{/each}
			</div>
		</div>
	</div>
</section>
