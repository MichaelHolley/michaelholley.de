<script lang="ts">
	import Blogs from '$lib/components/sections/BlogsSection.svelte';
	import Dev from '$lib/components/sections/DevSection.svelte';
	import Experience from '$lib/components/sections/ExperienceSection.svelte';
	import Header from '$lib/components/sections/HeaderSection.svelte';
	import Projects from '$lib/components/sections/ProjectsSection.svelte';
</script>

<svelte:head>
	<title>Michael Holley</title>
	<meta
		name="description"
		content="FullStack Developer mit Leidenschaft für innovative Weblösungen. Schau rein!"
	/>
	<meta property="og:title" content="Michael Holley" />
	<meta property="og:type" content="website" />
	<meta
		property="og:description"
		content="FullStack Developer mit Leidenschaft für innovative Weblösungen. Schau rein!"
	/>
	<meta property="og:image" content="/MichaelHolleyBanner.webp" />
	<meta property="og:url" content="https://michaelholley.de" />
</svelte:head>

<Header />
<Dev />
<Experience />
<Projects />
<Blogs />
