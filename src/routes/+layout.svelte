<script lang="ts">
	import Footer from '$lib/components/sections/Footer.svelte';
	import type { Snippet } from 'svelte';
	import '../app.css';

	const { children } = $props<{ children: Snippet }>();
</script>

<main>
	{@render children()}
	<Footer />
</main>
