<script lang="ts">
	import { dev } from '$app/environment';
	import { initAnalytics } from '$lib/analytics';
	import Footer from '$lib/components/sections/Footer.svelte';
	import { onMount, type Snippet } from 'svelte';
	import { RenderScan } from 'svelte-render-scan';
	import '../app.css';

	const { children } = $props<{ children: Snippet }>();

	onMount(() => {
		initAnalytics();
	});
</script>

{#if dev}
	<RenderScan />
{/if}
<main>
	{@render children()}
	<Footer />
</main>
