<script>
	import Career from '$lib/components/sections/career.svelte';
	import Dev from '$lib/components/sections/dev.svelte';
	import Header from '$lib/components/sections/header.svelte';
	import Projects from '$lib/components/sections/projects.svelte';
</script>

<main class="selection:bg-primary">
	<Header />
	<Dev />
	<Projects />
	<Career />
</main>
