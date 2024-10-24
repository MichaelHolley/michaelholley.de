<script lang="ts">
	export let period: string;
	export let title: string;
	export let workplace: string;
</script>

<div class="mx-auto py-4 pl-8 border-l-2 border-neutral-500 relative">
	<span class="inline-flex gap-2 text-base text-neutral-500">
		<span>{workplace}</span>
		<span class="text-neutral-300">|</span>
		<span>{period}</span>
	</span>
	<div class="relative">
		<h4 class="text-2xl font-bold">{title}</h4>
		<div
			class="h-4 w-4 bg-neutral-500 rounded-full absolute top-[50%] -translate-y-1/2 -left-[41px]"
		/>
	</div>
	<span class="block mt-1 text-lg">
		<slot />
	</span>
</div>
