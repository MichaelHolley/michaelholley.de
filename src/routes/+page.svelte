<script lang="ts">
	import Blogs from '$lib/components/sections/BlogsSection.svelte';
	import Dev from '$lib/components/sections/DevSection.svelte';
	import Experience from '$lib/components/sections/ExperienceSection.svelte';
	import Header from '$lib/components/sections/HeaderSection.svelte';
	import Projects from '$lib/components/sections/ProjectsSection.svelte';
	import type { PageServerData } from './$types';

	const { data } = $props<{ data: PageServerData }>();
</script>

<Header />
<Dev tech={data.tech} />
<Experience />
<Projects projects={data.projects} />
{#if data.blogs?.length}
	<Blogs blogs={data.blogs} />
{/if}
