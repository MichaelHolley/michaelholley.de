<script lang="ts">
	import { getExperienceSection } from '$lib/api/experience-section.remote';
	import Step from '$lib/components/career/Step.svelte';
	import SectionHeader from '$lib/components/shared/SectionHeader.svelte';

	const { experienceSection } = await getExperienceSection();
</script>

{#if experienceSection && experienceSection.Steps.length > 0}
	<section id="experience" class="bg-white text-black">
		<div class="container py-8 md:py-16 md:pt-12 2xl:px-64">
			<SectionHeader title="Experience" class="pb-8 text-center" />
			<div class="text-left text-lg">
				{#each experienceSection.Steps as step (step.id)}
					<Step period={step.Timeframe} title={step.Role} workplace={step.Employer ?? ''}>
						{#if step.FreeText}
							<p>{step.FreeText}</p>
						{/if}
						{#if step.Work && step.Work.length > 0}
							<ul class="list-square list-inside *:py-1">
								{#each step.Work as item (item.id)}
									<li>{item.WorkEntry}</li>
								{/each}
							</ul>
						{/if}
					</Step>
				{/each}
			</div>
		</div>
	</section>
{/if}

<style>
	.list-square li::marker {
		color: var(--color-secondary);
	}

	.list-square li {
		padding-left: 1.5rem;
		text-indent: -1.5rem;
	}
</style>
