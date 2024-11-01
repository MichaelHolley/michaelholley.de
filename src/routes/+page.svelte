<script>
	import Experience from '$lib/components/sections/ExperienceSection.svelte';
	import Dev from '$lib/components/sections/DevSection.svelte';
	import Header from '$lib/components/sections/HeaderSection.svelte';
	import Projects from '$lib/components/sections/ProjectsSection.svelte';
	import Footer from '$lib/components/shared/Footer.svelte';
</script>

<main class="selection:bg-primary">
	<Header />
	<Dev />
	<Experience />
	<Projects />
	<Footer />
</main>
