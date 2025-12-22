<script lang="ts">
	import type { TechItem } from '$lib/server/types';
	import Icon from '@iconify/svelte';

	const { header, tech }: { header: string; tech?: TechItem[] } = $props();
</script>

<div class="flex flex-row justify-start gap-6 pb-1">
	<h3 class="text-2xl text-neutral-500">{header}</h3>
	{#if !!tech}
		<div class="flex flex-row items-center gap-2">
			{#each tech as t (t.name)}
				<Icon
					icon={t.icon}
					class={'text-xl opacity-70 saturate-0 transition-all duration-300 hover:rotate-8 hover:opacity-100 hover:saturate-100'}
				/>
			{/each}
		</div>
	{/if}
</div>
