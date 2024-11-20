<script lang="ts">
	import BlurFade from '$lib/components/shared/misc/BlurFade.svelte';
	import SectionHeader from '$lib/components/shared/SectionHeader.svelte';
	import { cn } from '$lib/utils';
	import Icon from '@iconify/svelte';
	import { inview } from 'svelte-inview';
	import type { ObserverEventDetails } from 'svelte-inview';
	import { projects } from '../shared/projects';
	import { iconMap } from '../shared/icons';

	let selectedIndex = -1;

	function handleEntry({ detail }: CustomEvent<ObserverEventDetails>) {
		const index = detail.node.id.substring(1);
		selectedIndex = parseInt(index);
	}

	function selectProject(index: number) {
		const element = document.getElementById(`p${index}`);
		if (element) element.scrollIntoView({ behavior: 'smooth', block: 'center', inline: 'center' });
	}
</script>

<section id="projects" class="h-v bg-tertiary text-white">
	<div class="container py-8 md:py-16">
		<div class="mt-6 flex flex-col md:flex-row gap-4 py-64 relative">
			<div>
				<div class="sticky top-0 md:top-1/2 translate-y-0 md:-translate-y-1/2 flex flex-col gap-1">
					<SectionHeader title="Projekte" class="text-center md:text-start" />
					{#each projects as p, i}
						<BlurFade delay={0.08 * i} once={true}>
							<button
								class="flex-grow hover:scale-[1.03] transition-all group"
								tabindex="0"
								on:click={() => selectProject(i)}
							>
								<h4
									class="text-2xl lg:text-3xl xl:text-4xl text-center md:text-start font-bold uppercase transition-all duration-200 {i ===
									selectedIndex
										? 'text-primary'
										: 'text-white'}"
								>
									{p.title}
								</h4>
							</button>
						</BlurFade>
					{/each}
				</div>
			</div>
			<div class="flex-grow">
				<div class="flex flex-col gap-64">
					{#each projects as project, i}
						<div
							class="flex flex-col revealing"
							id={'p' + i}
							use:inview={{ threshold: 1 }}
							on:inview_enter={handleEntry}
						>
							<div class="text-lg pr-4">
								{#each project.description as descr, i}
									<p class={cn(i != 0 ? 'mt-4' : '')}>
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
							{#if !!project.tech && project.tech.length > 0}
								<div class="mt-3 flex flex-row gap-2 justify-center">
									{#each project.tech as techIcon}
										<Icon icon={techIcon} class="text-4xl" />
									{/each}
								</div>
							{/if}
						</div>
					{/each}
				</div>
			</div>
		</div>
	</div>
</section>

<style>
	.revealing {
		animation: autoBlurAnimation linear both;
		animation-timeline: view();
	}

	@keyframes autoBlurAnimation {
		0%,
		30% {
			filter: blur(5px);
		}
		35%,
		65% {
			filter: blur(0px);
		}
		70%,
		100% {
			filter: blur(5px);
		}
	}
</style>
