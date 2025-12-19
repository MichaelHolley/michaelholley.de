<script lang="ts">
	import { dev } from '$app/environment';
	import Footer from '$lib/components/sections/Footer.svelte';
	import type { Snippet } from 'svelte';
	import { RenderScan } from 'svelte-render-scan';
	import '../app.css';
	import { onNavigate } from '$app/navigation';

	const { children }: { children: Snippet } = $props();

	onNavigate((navigate) => {
		if (!document.startViewTransition) return;

		return new Promise((resolve) => {
			document.startViewTransition(async () => {
				resolve();
				await navigate.complete;
			});
		});
	});
</script>

{#if dev}
	<RenderScan />
{/if}
<main>
	{@render children()}
	<Footer />
</main>
