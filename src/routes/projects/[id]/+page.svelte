<script lang="ts">
	import Icon from '@iconify/svelte';
	import type { PageServerData } from './$types';

	const { data }: { data: PageServerData } = $props();
</script>

<div class="container min-h-screen py-10">
	<div>
		<a href="/" class=" flex flex-row items-center gap-1">
			<Icon icon="ic:baseline-arrow-back" class="text-secondary" />
			Zurück
		</a>
		<h1 class="my-8 text-4xl font-bold lg:mt-24">{data.title}</h1>
		<div class="max-w-5xl">
			{#each data.description as p}
				<p class="mt-4 text-lg">{p}</p>
			{/each}
		</div>
	</div>
</div>
