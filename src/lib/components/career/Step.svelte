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
	<div class="xs:flex-row xs:gap-2 flex flex-col justify-start text-base text-neutral-500">
		<div class="flex flex-row justify-start gap-2">
			<span>{workplace}</span>
			<span class="xs:block hidden text-neutral-300">&#x2022;</span>
		</div>
		<div>
			<span class="xs:text-base flex text-right text-sm">{period}</span>
		</div>
	</div>
	<h3 class="text-xl font-bold sm:text-2xl">{title}</h3>
	<span class="mt-1 block text-lg">
		{@render children()}
	</span>
</div>
