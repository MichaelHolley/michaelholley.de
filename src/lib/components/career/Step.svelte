<script lang="ts">
	import type { Snippet } from 'svelte';

	const {
		period,
		title,
		workplace,
		children
	}: { period: string; title: string; workplace: string; children: Snippet } = $props();
</script>

<div class="relative mx-auto py-4">
	<span class="inline-flex gap-2 text-base text-neutral-500">
		<span>{workplace}</span>
		<span class="text-neutral-300">//</span>
		<span>{period}</span>
	</span>
	<h4 class="text-xl font-bold sm:text-2xl">{title}</h4>
	<span class="mt-1 block text-lg">
		{@render children()}
	</span>
</div>
