<script lang="ts">
	import type { Tech } from '$lib/server/tech';
	import { cn } from '$lib/utils';
	import Icon from '@iconify/svelte';

	const { header, tech } = $props<{ header: string; tech?: Tech[] }>();
</script>

<div class="flex flex-row justify-start gap-6 pb-1">
	<h3 class="text-2xl tracking-widest text-neutral-500">{header}</h3>
	{#if !!tech}
		<div class="flex flex-row items-center gap-2">
			{#each tech as t, i}
				<Icon
					icon={t.icon}
					class={'text-xl saturate-0 transition-all duration-300 hover:rotate-8 hover:saturate-100'}
				/>
			{/each}
		</div>
	{/if}
</div>
