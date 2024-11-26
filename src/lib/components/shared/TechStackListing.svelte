<script lang="ts">
	import { cn } from '$lib/utils';
	import Icon from '@iconify/svelte';

	export let icons: string[] = [];
</script>

<div class={cn('flex flex-row items-center gap-2 overflow-hidden', $$props.class)}>
	{#each icons as icon, i}
		<Icon {icon} />
	{/each}
</div>
