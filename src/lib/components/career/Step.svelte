<script lang="ts">
	export let period: string;
	export let title: string;
	export let workplace: string;
</script>

<div class="mx-auto py-4 relative">
	<span class="inline-flex gap-2 text-base text-neutral-500">
		<span>{workplace}</span>
		<span class="text-neutral-300">|</span>
		<span>{period}</span>
	</span>
	<h4 class="text-2xl font-bold">{title}</h4>
	<span class="block mt-1 text-lg">
		<slot />
	</span>
</div>
