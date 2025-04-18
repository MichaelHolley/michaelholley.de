<script lang="ts">
	import { cn } from '$lib/utils';
	import type { Snippet } from 'svelte';

	const { class: className, children }: { class?: string; children: Snippet } = $props();
</script>

<div class={cn('grid w-full auto-rows-[20rem] grid-cols-3 gap-4', className)}>
	{@render children()}
</div>
