<script lang="ts">
	import BlurFade from '$lib/components/shared/misc/BlurFade.svelte';
	import SectionHeader from '$lib/components/shared/SectionHeader.svelte';
	import type { Project } from '$lib/server/projects';
	import { cn } from '$lib/utils';
	import Icon from '@iconify/svelte';

	const { projects } = $props<{ projects: Project[] }>();
	let selectedIndex = $state(-1);

	function selectProject(index: number) {
		selectedIndex = index;
	}
</script>

<section id="projects" class="bg-tertiary text-white">
	<div class="container py-8 md:py-16">
		<SectionHeader title="Projekte" class="text-center md:text-start" />
		<div class="mt-6 flex flex-col gap-4 md:flex-row">
			<div>
				{#each projects as p, i}
					<BlurFade delay={0.08 * i}>
						<button
							class="group mb-1 w-full transition-all hover:scale-[1.03] hover:cursor-pointer"
							tabindex="0"
							onclick={() => selectProject(i)}
							onkeyup={(e) => {
								if (e.key == 'Enter') selectProject(i);
							}}
						>
							<h3
								class="text-center text-2xl font-bold uppercase transition-all duration-200 md:text-start lg:text-3xl xl:text-4xl {i ===
								selectedIndex
									? 'text-primary'
									: 'text-white'}"
							>
								{p.title}
							</h3>
						</button>
					</BlurFade>
				{/each}
			</div>
			<div class={cn('h-[380px] w-full', selectedIndex != -1 ? 'overflow-y-auto pr-1' : '')}>
				{#if selectedIndex >= 0 && selectedIndex < projects.length}
					{#each projects as project, index}
						{#if index === selectedIndex}
							<div class="flex flex-col">
								<div class="pr-4 text-lg">
									{#each project.description as descr, i}
										<p class={cn(i != 0 ? 'mt-4' : '')}>
											{descr}
										</p>
									{/each}
								</div>
								<div class="mt-3 flex flex-row justify-center p-2">
									{#if !!project.github && projects[selectedIndex].github != ''}
										<a
											class="transition-all hover:scale-110"
											href={project.github}
											target="_blank"
											rel="noreferrer"
											aria-label="GitHub-Repository"
										>
											<Icon icon="fa:github" style="font-size:2.5rem" />
										</a>
									{/if}
								</div>
							</div>
						{/if}
					{/each}
				{:else}
					<div class="flex flex-row justify-center">
						<span class="text-center text-xl">Wählen Sie ein Projekt</span>
					</div>
				{/if}
			</div>
		</div>
	</div>
</section>

<style>
	/* Firefox */
	* {
		scrollbar-width: thin;
		scrollbar-color: var(--color-white) transparent;
	}

	/* Chrome, Edge, and Safari */
	*::-webkit-scrollbar {
		width: 4px;
	}

	*::-webkit-scrollbar-track {
		background: transparent;
	}

	*::-webkit-scrollbar-thumb {
		background-color: var(--color-white);
	}
</style>
