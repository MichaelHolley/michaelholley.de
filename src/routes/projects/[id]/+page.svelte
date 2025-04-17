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
		<h1 class="my-8 text-4xl font-bold lg:mt-20">{data.title}</h1>
		<div class="max-w-5xl">
			{#each data.description as p}
				<p class="mt-4 text-lg">{p}</p>
			{/each}
			{#if data.tech}
				<div class="mt-6 flex flex-row gap-6">
					{#each data.tech as t}
						<div class="group flex flex-row items-center gap-1 text-neutral-400">
							{#if typeof t === 'object'}
								<Icon icon={t.icon} class="text-neutral-400 " style="color: {t.color};" />
							{/if}
							<span class="transition-all duration-300 group-hover:text-neutral-100">
								{#if typeof t === 'string'}
									{t}
								{:else}
									{t.name}
								{/if}
							</span>
						</div>
					{/each}
				</div>
			{/if}
		</div>
	</div>
</div>
