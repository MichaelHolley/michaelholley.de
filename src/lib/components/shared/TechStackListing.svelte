<script lang="ts">
	import { cn } from '$lib/utils';
	import Icon from '@iconify/svelte';
	import BlurFade from './misc/BlurFade.svelte';

	export let icons: string[] = [];
</script>

<div class={cn('flex flex-row items-center gap-2 overflow-hidden', $$props.class)}>
	{#each icons as icon, i}
		<BlurFade delay={0.15 * i} once={false}>
			<Icon {icon} /></BlurFade
		>
	{/each}
</div>
