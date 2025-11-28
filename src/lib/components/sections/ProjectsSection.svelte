<script lang="ts">
	import BentoCardComponent from '$lib/components/shared/BentoCardComponent.svelte';
	import SectionHeader from '$lib/components/shared/SectionHeader.svelte';
	import type { Project } from '$lib/server/types';
	import { cn } from '$lib/utils';

	const { projects }: { projects: Project[] } = $props();
</script>

<section id="projects" class="bg-black text-white">
	<div class="container py-8 md:py-16">
		<SectionHeader title="Projekte" class="pb-8" />
		<div class="flex flex-col items-center justify-center gap-24 md:gap-64">
			<div class="grid w-full auto-rows-[20rem] grid-cols-1 gap-4 lg:grid-cols-3">
				{#each projects as p}
					<BentoCardComponent
						id={p.documentId}
						name={p.title}
						description={p.description}
						icon={p.iconIdentifier}
						href="/projects/{p.slug}"
						cta={'Mehr'}
						class={cn("col-span-1", p.highlight && "col-span-2")}
						backgroundImgUrl={p.thumbnail.formats.small.url}
					/>
				{/each}
			</div>
		</div>
	</div>
</section>
