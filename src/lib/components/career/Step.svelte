<script lang="ts">
	import type { Snippet } from 'svelte';

	const { period, title, workplace, children } = $props<{
		period: string;
		title: string;
		workplace: string;
		children: Snippet;
	}>();
</script>

<div class="relative mx-auto py-4">
	<div class="xs:justify-start flex flex-row justify-between gap-2 text-base text-neutral-500">
		<div class="flex flex-row justify-start gap-2">
			<span>{workplace}</span>
			<span class="text-neutral-300">//</span>
		</div>
		<div>
			<span class="flex text-right">{period}</span>
		</div>
	</div>
	<h3 class="text-xl font-bold sm:text-2xl">{title}</h3>
	<span class="mt-1 block text-lg">
		{@render children()}
	</span>
</div>
