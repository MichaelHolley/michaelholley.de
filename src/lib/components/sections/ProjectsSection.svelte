<script lang="ts">
	import { getProjects } from '$lib/api/projects.remote';
	import BentoCardComponent from '$lib/components/shared/BentoCardComponent.svelte';
	import ProjectCardMobileComponent from '$lib/components/shared/ProjectCardMobileComponent.svelte';
	import SectionHeader from '$lib/components/shared/SectionHeader.svelte';
	import { cn } from '$lib/utils';
	import { getThumbnailImageUrl } from '../shared/util/getThumbnailImageUrl';

	const { projects } = await getProjects();
</script>

{#if projects && projects.length > 0}
	<section id="projects" class="bg-black text-white">
		<div class="container py-8 md:py-16">
			<SectionHeader title="Projekte" class="pb-8 text-center lg:text-left" />
			<div class="hidden flex-col items-center justify-center gap-24 md:gap-64 lg:flex">
				<div class="grid w-full auto-rows-[20rem] grid-cols-1 gap-4 lg:grid-cols-3">
					{#each projects as p (p.id)}
						<BentoCardComponent
							id={p.documentId}
							name={p.title}
							description={p.description}
							icon={p.projectIcon?.iconIdentifier}
							href="/projects/{p.slug}"
							cta="Mehr"
							class={cn('col-span-1', p.highlight && 'lg:col-span-2')}
							backgroundImgUrl={getThumbnailImageUrl(p.teaserImage)}
						/>
					{/each}
				</div>
			</div>

			<div class="flex flex-col gap-4 lg:hidden">
				{#each projects as p (p.id)}
					<ProjectCardMobileComponent
						id={p.documentId}
						name={p.title}
						description={p.description}
						icon={p.projectIcon?.iconIdentifier}
						href="/projects/{p.slug}"
						cta="Mehr"
						backgroundImgUrl={getThumbnailImageUrl(p.teaserImage)}
					/>
				{/each}
			</div>
		</div>
	</section>
{/if}
