<script lang="ts">
	import Icon from '@iconify/svelte';

	const { icons }: { icons: string[] } = $props();
</script>

<div class="flex flex-row items-center gap-2 overflow-hidden">
	{#each icons as icon, i}
		<Icon {icon} />
	{/each}
</div>
