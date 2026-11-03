<script lang="ts">
	import { reveal } from '#lib/actions/reveal.js';
	import { track, trackOnce } from '#lib/analytics/umami.js';
	import { getProjects } from '#lib/api/projects.remote.js';
	import { getImageUrl } from '#lib/components/shared/util/getImageUrl.js';

	const { projects } = await getProjects();

	// The project whose picture the frame shows: the first by default, then whichever
	// name was last pointed at or focused.
	let active = $state(0);
	const shown = $derived(projects[active]);

	const techOf = (tech: { techLabel: string }[] | undefined) =>
		(tech ?? [])
			.slice(0, 3)
			.map((t) => t.techLabel)
			.join(', ');
</script>

{#if projects && projects.length > 0}
	<section
		id="projects"
		class="section-space bg-black text-white"
		aria-labelledby="projects-title"
		use:trackOnce={() => track('section-view', { section: 'projects' })}
	>
		<div class="page-grid container gap-y-8">
			<h2 id="projects-title" class="text-lead col-span-12 font-medium" use:reveal>Projekte</h2>

			<ul class="col-span-12 space-y-12 lg:col-span-8 lg:space-y-0">
				{#each projects as p, i (p.id)}
					<li use:reveal={i * 70}>
						<a
							href="/projects/{p.slug}"
							class="group block lg:py-2.5"
							data-sveltekit-preload-data="tap"
							onpointerenter={() => (active = i)}
							onfocus={() => (active = i)}
							onclick={() => track('project-open', { project: p.title })}
						>
							{#if p.teaserImage}
								<img
									src={getImageUrl(p.teaserImage, 'medium')}
									alt=""
									width="750"
									height="469"
									loading="lazy"
									class="bg-surface mb-5 aspect-16/10 w-full object-cover lg:hidden"
								/>
							{/if}
							<span
								class={[
									'display text-poster block transition-colors duration-200',
									'group-hover:text-primary group-focus-visible:text-primary',
									i === active ? 'text-white' : 'lg:text-muted'
								]}
							>
								{p.title}
							</span>
							<span class="mt-3 block max-w-[62ch] lg:sr-only">{p.description}</span>
							{#if p.tech?.length}
								<span class="text-muted mt-2 block lg:sr-only">{techOf(p.tech)}</span>
							{/if}
						</a>
					</li>
				{/each}
			</ul>

			<div class="hidden lg:col-span-4 lg:block" aria-hidden="true">
				<div class="sticky top-[15vh]">
					<div class="bg-surface relative aspect-4/3 overflow-clip">
						{#each projects as p, i (p.id)}
							{#if p.teaserImage}
								<img
									src={getImageUrl(p.teaserImage, 'large')}
									alt=""
									width="1000"
									height="750"
									loading="lazy"
									class={[
										'absolute inset-0 size-full object-cover transition-[opacity,transform] duration-500 ease-(--ease-out)',
										i === active ? 'scale-100 opacity-100' : 'scale-[1.04] opacity-0'
									]}
								/>
							{/if}
						{/each}
					</div>
					<p class="mt-5 max-w-[48ch]">{shown.description}</p>
				</div>
			</div>
		</div>
	</section>
{/if}
