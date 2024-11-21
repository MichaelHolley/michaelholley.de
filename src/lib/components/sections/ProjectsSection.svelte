<script lang="ts">
	import Icon from '@iconify/svelte';
	import { iconMap } from '../shared/data/icons';
	import { projects } from '../shared/data/projects';
</script>

<section id="projects" class="h-v bg-tertiary text-white">
	<div class="container py-8 md:py-16">
		<div class="flex flex-col md:flex-row gap-4 py-32 relative">
			<div class="flex flex-col gap-24 md:gap-64">
				{#each projects as project}
					<div class="flex flex-col gap-4 revealing">
						<h3 class="text-center text-3xl font-light tracking-widest uppercase text-neutral-800">
							{project.title}
						</h3>
						{#if !!project.tech && project.tech.length > 0}
							<div class="flex flex-row gap-2 justify-center">
								{#each project.tech as techIcon}
									<Icon icon={techIcon} class="text-3xl" />
								{/each}
							</div>
						{/if}
						<div class="space-y-4 text-lg">
							{#each project.description as descr, i}
								<p>
									{descr}
								</p>
							{/each}
						</div>
						{#if !!project.github}
							<div class="mt-3 p-2 flex flex-row justify-center">
								<a
									class="hover:scale-110 transition-all"
									href={project.github}
									target="_blank"
									rel="noreferrer"
									aria-label="GitHub-Repository"
								>
									<Icon icon={iconMap.github} style="font-size:2.5rem" />
								</a>
							</div>
						{/if}
					</div>
				{/each}
			</div>
		</div>
	</div>
</section>

<style>
	@media (prefers-reduced-motion: no-preference) {
		@supports (animation-timeline: view()) {
			.revealing {
				animation: autoBlurAnimation linear both;
				animation-timeline: view();
			}
		}
	}

	@keyframes autoBlurAnimation {
		0%,
		30% {
			opacity: 0;
			filter: blur(5px);
			translate: 0 100px;
		}
		35%,
		65% {
			opacity: 1;
			filter: blur(0px);
			translate: 0 0;
		}
		70%,
		100% {
			opacity: 0;
			filter: blur(5px);
			translate: 0 -100px;
		}
	}
</style>
