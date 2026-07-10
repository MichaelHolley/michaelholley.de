<script lang="ts">
	import Icon from '@iconify/svelte';

	const {
		id,
		name,
		href,
		description,
		cta,
		icon,
		backgroundImgUrl
	}: {
		id: string;
		name: string;
		href: string;
		description: string;
		cta: string;
		icon?: string;
		backgroundImgUrl?: string;
	} = $props();
</script>

<a
	{id}
	{href}
	class="group flex w-full transform-gpu flex-row items-stretch overflow-hidden rounded-xl border border-white/10 bg-black transition-all active:scale-98"
	data-sveltekit-preload-data="tap"
>
	{#if !!backgroundImgUrl}
		<div class="aspect-[4/3] w-32 shrink-0 self-center overflow-hidden">
			<img
				src={backgroundImgUrl}
				alt="background"
				class="h-full w-full object-cover object-center transition-all duration-300 group-hover:scale-103"
			/>
		</div>
	{/if}

	<div class="flex min-w-0 flex-1 flex-col justify-center gap-1 p-4">
		<div class="flex flex-row items-center gap-1.5">
			{#if !!icon}
				<Icon
					{icon}
					class="-ml-0.5 shrink-0 text-xl text-neutral-700 transition-all group-hover:text-neutral-400"
				/>
			{/if}
			<h3 class="truncate font-bold text-white">
				{name}
			</h3>
		</div>
		<p class="line-clamp-2 text-sm text-neutral-400 transition-colors group-hover:text-white">
			{description}
		</p>
		<span class="mt-1 flex items-center text-xs text-neutral-500">
			{cta}
			<Icon icon="ic:baseline-arrow-forward" />
		</span>
	</div>
</a>
