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
			{#each experienceSection.Steps as step (step.id)}
				<Step
					period={step.Timeframe}
					title={step.Role}
					workplace={step.Employer ?? ''}
					freeText={step.FreeText}
					items={step.Work}
				/>
			{/each}
		</div>
	</section>
{/if}
