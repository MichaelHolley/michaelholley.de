<script lang="ts">
	import ContentPageComponent from '$lib/components/shared/ContentPageComponent.svelte';
	import { useSerifFont } from '$lib/stores/serifFontStore';
	import Icon from '@iconify/svelte';
	import type { PageServerData } from './$types';

	const { data }: { data: PageServerData } = $props();
</script>

<ContentPageComponent>
	<div class="my-8 flex flex-row flex-wrap items-end justify-between gap-4">
		<h1 class="text-4xl font-bold break-all lg:mt-20">{data.title}</h1>
		<div
			class="*:motion-blur-in-md *:motion-opacity-in-0 *:motion-delay-50 flex flex-row items-center gap-3"
		>
			{#if data.url}
				<a
					href={data.url}
					target="_blank"
					class="group flex flex-row items-center gap-1"
					aria-label="Open URL"
				>
					<div class="transition-all group-hover:scale-110">
						<Icon icon="bi:globe" class="text-4xl" />
					</div>
				</a>
			{/if}
			{#if data.github}
				<a
					href={data.github}
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
		<div class={$useSerifFont ? 'serif-font' : ''}>
			{#each data.description as p}
				<p class="mt-4 text-lg">{p}</p>
			{/each}
		</div>

		{#if data.tech}
			<div class="mt-8 flex flex-row flex-wrap justify-center gap-x-5 gap-y-2">
				{#each data.tech as t}
					<div
						class="group flex flex-row items-center gap-1 text-neutral-600 dark:text-neutral-400"
					>
						{#if typeof t === 'object'}
							<Icon icon={t.icon} class="text-neutral-400 " style="color: {t.color};" />
						{/if}
						<span
							class="transition-all duration-300 group-hover:text-black group-hover:dark:text-neutral-100"
						>
							{#if typeof t === 'string'}
								{t}
							{:else}
								{t.name}
							{/if}
						</span>
					</div>
				{/each}
			</div>
		{/if}
	</div>
</ContentPageComponent>
