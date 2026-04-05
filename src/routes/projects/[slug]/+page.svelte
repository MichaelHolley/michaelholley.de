<script lang="ts">
	import { getProjectBySlug } from '$lib/api/projects.remote.js';
	import ContentPageComponent from '$lib/components/shared/ContentPageComponent.svelte';
	import MarkdownComponent from '$lib/components/shared/MarkdownComponent.svelte';
	import { serifStore } from '$lib/stores/serifFontStore';
	import { cn } from '$lib/utils';
	import Icon from '@iconify/svelte';

	const { params } = $props();
	const { project } = await getProjectBySlug(params.slug);

	const serifFont = serifStore;
</script>

<svelte:head>
	<title>Michael Holley | {project?.title}</title>
	<meta name="description" content={project?.description} />
	<meta property="og:title" content={project?.title} />
	<meta property="og:type" content="website" />
	<meta property="og:description" content={project?.description} />
	<meta name="twitter:card" content={project?.teaserImage ? 'summary_large_image' : 'summary'} />
	<meta name="twitter:title" content={project?.title} />
	<meta name="twitter:description" content={project?.description} />
	{#if project?.teaserImage}
		<meta property="og:image" content={project.teaserImage.url} />
		<meta name="twitter:image" content={project.teaserImage.url} />
	{/if}
</svelte:head>

<ContentPageComponent>
	{#if project}
		<header class="mt-10 lg:mt-20">
			<h1
				class="text-5xl font-bold tracking-tight lg:text-6xl"
				style:view-transition-name="heading-project-{project.slug}"
			>
				{project.title}
			</h1>

			<p
				class="motion-opacity-in-0 motion-translate-y-in-[20px] motion-duration-700 motion-delay-100 mt-4 max-w-2xl text-base leading-relaxed text-neutral-500 dark:text-neutral-400"
			>
				{project.description}
			</p>

			{#if project.url || project.github_ref}
				<div
					class="motion-opacity-in-0 motion-duration-700 motion-delay-200 mt-6 flex flex-row flex-wrap gap-3"
				>
					{#if project.url}
						<a
							href={project.url}
							target="_blank"
							class="group hover:border-primary hover:text-primary dark:hover:border-primary dark:hover:text-primary inline-flex items-center gap-2 rounded-full border border-neutral-200 px-4 py-1.5 text-sm text-neutral-600 transition-all duration-200 dark:border-neutral-700 dark:text-neutral-400"
							aria-label="Open URL"
						>
							<Icon
								icon="bi:globe"
								class="size-3.5 transition-transform duration-200 group-hover:scale-110"
							/>
							Live Demo
						</a>
					{/if}
					{#if project.github_ref}
						<a
							href={project.github_ref}
							target="_blank"
							class="group inline-flex items-center gap-2 rounded-full border border-neutral-200 px-4 py-1.5 text-sm text-neutral-600 transition-all duration-200 hover:border-neutral-500 dark:border-neutral-700 dark:text-neutral-400 dark:hover:border-neutral-400 dark:hover:text-neutral-200"
							aria-label="GitHub Repository"
						>
							<Icon
								icon="fa:github"
								class="size-3.5 transition-transform duration-200 group-hover:scale-110"
							/>
							GitHub
						</a>
					{/if}
				</div>
			{/if}
		</header>

		<div class="motion-opacity-in-0 motion-duration-700 motion-delay-350 mt-8">
			<article
				class={cn(
					'prose dark:prose-invert prose-neutral max-w-none',
					serifFont.current && 'font-serif'
				)}
			>
				<MarkdownComponent content={project.content!} />
			</article>
		</div>

		{#if project.tech && project.tech.length > 0}
			<div
				class="motion-opacity-in-0 motion-duration-700 motion-delay-450 mt-12 border-t border-neutral-200 pt-8 dark:border-neutral-800"
			>
				<p class="mb-4 text-xs tracking-widest text-neutral-400 uppercase">Built with</p>
				<div class="flex flex-row flex-wrap gap-x-6 gap-y-3">
					{#each project.tech as t (t.techLabel)}
						<div
							class="group flex flex-row items-center gap-2 text-neutral-500 dark:text-neutral-500"
						>
							{#if t.icon?.iconIdentifier}
								<Icon
									icon={t.icon.iconIdentifier}
									class="size-4 text-neutral-400 dark:text-neutral-600"
								/>
							{/if}
							<span
								class="text-sm transition-colors duration-200 group-hover:text-black dark:group-hover:text-neutral-200"
							>
								{t.techLabel}
							</span>
						</div>
					{/each}
				</div>
			</div>
		{/if}
	{:else}
		<p class="mt-16 text-center text-neutral-500">Unable to load project content.</p>
	{/if}
</ContentPageComponent>
