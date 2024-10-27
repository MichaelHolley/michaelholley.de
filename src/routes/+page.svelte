<script>
	import Experience from '$lib/components/sections/ExperienceSection.svelte';
	import Dev from '$lib/components/sections/DevSection.svelte';
	import Header from '$lib/components/sections/HeaderSection.svelte';
	import Projects from '$lib/components/sections/ProjectsSection.svelte';
</script>

<main class="selection:bg-primary">
	<Header />
	<Dev />
	<Experience />
	<Projects />
</main>
