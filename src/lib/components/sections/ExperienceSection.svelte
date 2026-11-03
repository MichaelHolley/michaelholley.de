<script lang="ts">
	import { reveal } from '#lib/actions/reveal.js';
	import { track, trackOnce } from '#lib/analytics/umami.js';
	import { getExperienceSection } from '#lib/api/experience-section.remote.js';
	import { formatTimeframe, groupStations } from '#lib/components/career/stations.js';

	const { experienceSection } = await getExperienceSection();
	const stations = groupStations(experienceSection?.Steps ?? []);
</script>

{#if stations.length > 0}
	<section
		id="experience"
		class="section-space bg-white text-black"
		aria-labelledby="experience-title"
		use:trackOnce={() => track('section-view', { section: 'experience' })}
	>
		<div class="container">
			<h2 id="experience-title" class="text-lead font-medium" use:reveal>Experience</h2>

			<ol class="mt-8 space-y-[clamp(4.5rem,8vw,8rem)] md:mt-12">
				{#each stations as station (station.steps[0].id)}
					<li>
						<h3 class="display text-poster" use:reveal>{station.name}</h3>

						<ol class="mt-8 space-y-12 md:mt-12 lg:space-y-14">
							{#each station.steps as step (step.id)}
								<li id="station-{step.id}" class="page-grid gap-y-3" use:reveal={140}>
									<div class="col-span-12 lg:col-span-4">
										<h4 class="text-lead font-medium text-balance">{step.Role}</h4>
										<p class="text-tertiary mt-1 tabular-nums">
											{formatTimeframe(step.Timeframe)}
										</p>
									</div>
									<div class="col-span-12 max-w-[62ch] lg:col-span-7 lg:col-start-6">
										{#if step.FreeText}
											<p>{step.FreeText}</p>
										{/if}
										{#if step.Work?.length}
											<ul class="space-y-2 {step.FreeText ? 'mt-3' : ''}">
												{#each step.Work as item (item.id)}
													<li class="marker:text-tertiary list-square ml-5">{item.WorkEntry}</li>
												{/each}
											</ul>
										{/if}
									</div>
								</li>
							{/each}
						</ol>
					</li>
				{/each}
			</ol>
		</div>
	</section>
{/if}
