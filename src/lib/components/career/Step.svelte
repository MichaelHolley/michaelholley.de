<script lang="ts">
	import type { ExperienceWorkItem } from '$lib/server/types';

	const {
		period,
		title,
		workplace,
		freeText,
		items
	}: {
		period: string;
		title: string;
		workplace: string;
		freeText?: string;
		items?: ExperienceWorkItem[];
	} = $props();
</script>

<article class="grid gap-x-10 gap-y-2 py-8 md:grid-cols-[1fr_2.2fr]">
	<header>
		<p class="text-secondary pt-2 text-sm font-extrabold tracking-widest uppercase">
			{workplace}
		</p>
		<p class="mt-2 text-sm text-neutral-500 italic">{period}</p>
	</header>
	<div>
		<h3 class="text-3xl leading-tight font-semibold tracking-tight text-balance sm:text-4xl">
			{title}
		</h3>
		{#if freeText}
			<p class="mt-4 max-w-[62ch] text-lg leading-8 text-neutral-700">{freeText}</p>
		{/if}
		{#if items?.length}
			<ul class="mt-4 max-w-[62ch] space-y-1 text-lg leading-8 text-neutral-700">
				{#each items as item (item.id)}
					<li class="marker:text-secondary list-square ml-5 list-outside">
						{item.WorkEntry}
					</li>
				{/each}
			</ul>
		{/if}
	</div>
</article>
