<script lang="ts">
	import { track } from '#lib/analytics/umami.js';
	import { getProjectBySlug } from '#lib/api/projects.remote.js';
	import ContentPageComponent from '#lib/components/shared/ContentPageComponent.svelte';
	import { getImageUrl } from '#lib/components/shared/util/getImageUrl.js';
	import Icon from '@iconify/svelte';

	const { params } = $props();
	const { project } = $derived(await getProjectBySlug(params.slug));
</script>

<svelte:head>
	<title>{project.title} | Michael Holley</title>
	<meta name="description" content={project.description} />
	<meta property="og:title" content={project.title} />
	<meta property="og:type" content="website" />
	<meta property="og:description" content={project.description} />
	<meta name="twitter:card" content={project.teaserImage ? 'summary_large_image' : 'summary'} />
	<meta name="twitter:title" content={project.title} />
	<meta name="twitter:description" content={project.description} />
	{#if project.teaserImage}
		<meta property="og:image" content={project.teaserImage.url} />
		<meta name="twitter:image" content={project.teaserImage.url} />
	{/if}
</svelte:head>

<ContentPageComponent>
	<header class="page-grid mt-12 gap-y-8 md:mt-20">
		<h1 class="display text-poster col-span-12 hyphens-auto">{project.title}</h1>
		<div class="col-span-12 lg:col-span-5">
			<p class="text-lead max-w-[40ch]">{project.description}</p>

			{#if project.url || project.github_ref}
				<div class="mt-8 flex flex-wrap items-center gap-x-8 gap-y-3">
					{#if project.url}
						<a
							href={project.url}
							target="_blank"
							rel="noreferrer"
							class="press hover:bg-tertiary dark:hover:bg-tertiary-active inline-flex h-11 items-center gap-2 bg-black px-5 font-medium text-white dark:bg-white dark:text-black"
							onclick={() =>
								track('project-link-click', { project: project.title, target: 'demo' })}
						>
							<Icon icon="bi:globe" class="size-4" aria-hidden="true" />
							Live-Demo öffnen
						</a>
					{/if}
					{#if project.github_ref}
						<a
							href={project.github_ref}
							target="_blank"
							rel="noreferrer"
							class="link-underline inline-flex min-h-11 items-center gap-2 font-medium"
							onclick={() =>
								track('project-link-click', { project: project.title, target: 'github' })}
						>
							<Icon icon="fa:github" class="size-5" aria-hidden="true" />
							Code auf GitHub
						</a>
					{/if}
				</div>
			{/if}
		</div>

		{#if project.teaserImage}
			<img
				src={getImageUrl(project.teaserImage, 'large')}
				alt={project.teaserImage.alternativeText || ''}
				width="1000"
				height="625"
				class="bg-paper-surface dark:bg-surface col-span-12 aspect-16/10 w-full object-cover lg:col-span-7 lg:col-start-6"
			/>
		{/if}
	</header>

	<div class="page-grid mt-16 gap-y-12 md:mt-24">
		<article class="prose dark:prose-invert col-span-12 max-w-none lg:col-span-7">
			<!-- eslint-disable svelte/no-at-html-tags -->
			{@html project.content}
			<!-- eslint-enable svelte/no-at-html-tags -->
		</article>

		{#if project.tech && project.tech.length > 0}
			<aside class="col-span-12 lg:col-span-4 lg:col-start-9" aria-labelledby="tech-title">
				<h2 id="tech-title" class="text-lead font-medium">Gebaut mit</h2>
				<ul class="mt-4 space-y-2">
					{#each project.tech as t (t.techLabel)}
						<li class="flex items-center gap-3">
							{#if t.icon?.iconIdentifier}
								<Icon icon={t.icon.iconIdentifier} class="size-5" aria-hidden="true" />
							{/if}
							{t.techLabel}
						</li>
					{/each}
				</ul>
			</aside>
		{/if}
	</div>
</ContentPageComponent>
