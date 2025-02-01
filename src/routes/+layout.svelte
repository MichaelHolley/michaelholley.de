<script lang="ts">
	import Footer from '$lib/components/sections/Footer.svelte';
	import type { Snippet } from 'svelte';
	import '../app.css';

	const { children }: { children: Snippet } = $props();
</script>

<main>
	{@render children()}
	<Footer />
</main>
