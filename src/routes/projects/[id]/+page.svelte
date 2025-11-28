<script lang="ts">
	import ContentPageComponent from '$lib/components/shared/ContentPageComponent.svelte';
	import MarkdownComponent from '$lib/components/shared/MarkdownComponent.svelte';
	import { serifStore } from '$lib/stores/serifFontStore';
	import { getTech, tech } from '$lib/tech-icons';
	import Icon from '@iconify/svelte';

	const { data } = $props();

	const serifFont = serifStore;
</script>

<ContentPageComponent>
	<div class="my-8 flex flex-row flex-wrap items-end justify-between gap-4">
		<h1 class="text-4xl font-bold break-all lg:mt-20">{data.project.title}</h1>
		<div
			class="*:motion-blur-in-md *:motion-opacity-in-0 *:motion-delay-50 flex flex-row items-center gap-3"
		>
			{#if data.project.url}
				<a
					href={data.project.url}
					target="_blank"
					class="group flex flex-row items-center gap-1"
					aria-label="Open URL"
				>
					<div class="transition-all group-hover:scale-110">
						<Icon icon="bi:globe" class="text-4xl" />
					</div>
				</a>
			{/if}
			{#if data.project.github_ref}
				<a
					href={data.project.github_ref}
					target="_blank"
					class="group flex flex-row items-center gap-1"
					aria-label="GitHub Repository"
				>
					<div class="transition-all group-hover:scale-110">
						<Icon icon="fa:github" class="text-4xl" />
					</div>
				</a>
			{/if}
		</div>
	</div>
	<div>
		<article
				class="{serifFont.current
					? 'serif-font'
					: ''} prose max-w-5xl dark:prose-invert prose-neutral"
			>
			<MarkdownComponent content={data.project.content} />
		</article>

		{#if data.project.tech}
			<div class="mt-8 flex flex-row flex-wrap justify-center gap-x-5 gap-y-2">
				{#each data.project.tech as t}
					<div
						class="group flex flex-row items-center gap-1 text-neutral-600 dark:text-neutral-400"
					>
						{#if !!t && t in tech}
							{@const tIcon = getTech(t)}
								{#if !!tIcon}
									<Icon icon={tIcon.icon} class="text-neutral-400 " style="color: {tIcon.color};" />
									<span
										class="transition-all duration-300 group-hover:text-black group-hover:dark:text-neutral-100"
									>
										{#if typeof t === 'string'}
											{t}
										{:else}
											{tIcon.name}
										{/if}
									</span>
								{/if}
						{/if}
					</div>
				{/each}
			</div>
		{/if}
	</div>
</ContentPageComponent>
