<script lang="ts">
	import { dev } from '$app/environment';
	import Footer from '$lib/components/sections/Footer.svelte';
	import type { Snippet } from 'svelte';
	import { RenderScan } from 'svelte-render-scan';
	import '../app.css';

	const { children }: { children: Snippet } = $props();
</script>

{#if dev}
	<RenderScan />
{/if}
<main>
	{@render children()}
	<Footer />
</main>
