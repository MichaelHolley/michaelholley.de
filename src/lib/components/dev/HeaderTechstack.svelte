<script lang="ts">
	import TechStackListing from '$lib/components/shared/TechStackListing.svelte';

	export let header: string;
	export let icons: string[] = [];
</script>

<div class="flex flex-row gap-3 mb-2 text-neutral-500 text-2xl">
	<h2 class="tracking-widest">{header}</h2>
	<h2 class="text-neutral-800">//</h2>
	<TechStackListing {icons} />
</div>
