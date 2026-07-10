<script lang="ts">
	import { dev } from '$app/environment';
	import { page } from '$app/state';
	import Footer from '$lib/components/sections/Footer.svelte';
	import type { Snippet } from 'svelte';
	import { RenderScan } from 'svelte-render-scan';
	import '../app.css';

	const { children }: { children: Snippet } = $props();

</script>

<svelte:head>
	<link rel="canonical" href={`${page.url.origin}${page.url.pathname}`} />
	<meta property="og:url" content={`${page.url.origin}${page.url.pathname}`} />
</svelte:head>

{#if dev}
	<RenderScan />
{/if}
<main>
	{@render children()}
	<Footer />
</main>
