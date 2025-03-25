<script lang="ts">
	import Icon from '@iconify/svelte';

	const { icons } = $props<{ icons: string[] }>();
</script>

<div class="flex flex-row items-center gap-2 overflow-hidden">
	{#each icons as icon}
		<Icon {icon} />
	{/each}
</div>
