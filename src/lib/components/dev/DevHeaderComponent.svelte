<script lang="ts">
	import Icon from '@iconify/svelte';

	const { header, icons }: { header: string; icons?: string[] } = $props();
</script>

<div class="flex flex-row justify-start gap-4 pb-1">
	<h3 class="text-2xl text-neutral-500">{header}</h3>
	{#if !!icons}
		<div class="flex flex-row items-center gap-1">
			{#each icons as icon}
				<Icon
					{icon}
					class="size-5 opacity-70 saturate-0 transition-all duration-300 hover:rotate-8 hover:opacity-100 hover:saturate-100"
				/>
			{/each}
		</div>
	{/if}
</div>
