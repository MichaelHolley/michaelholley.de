<script lang="ts">
	import { page } from '$app/state';
	import Blogs from '$lib/components/sections/BlogsSection.svelte';
	import Dev from '$lib/components/sections/DevSection.svelte';
	import Experience from '$lib/components/sections/ExperienceSection.svelte';
	import Header from '$lib/components/sections/HeaderSection.svelte';
	import Projects from '$lib/components/sections/ProjectsSection.svelte';
	import { jsonLdScript } from '$lib/seo/jsonLd';

	const title = 'Michael Holley – Software Engineer';
	const description =
		'Michael Holley, Full-Stack Software Engineer: Webanwendungen mit .NET, Java, Vue und Svelte. Projekte, Werdegang und Artikel über Webentwicklung.';
	const origin = $derived(page.url.origin);

	const structuredData = $derived(
		jsonLdScript({
			'@graph': [
				{
					'@type': 'WebSite',
					'@id': `${origin}/#website`,
					url: `${origin}/`,
					name: 'Michael Holley',
					inLanguage: 'de',
					publisher: { '@id': `${origin}/#person` }
				},
				{
					'@type': 'Person',
					'@id': `${origin}/#person`,
					name: 'Michael Holley',
					url: `${origin}/`,
					jobTitle: 'Software Engineer',
					image: `${origin}/logo310.png`,
					sameAs: [
						'https://www.linkedin.com/in/michael-holley-791a64228/',
						'https://github.com/MichaelHolley'
					],
					knowsAbout: ['Webentwicklung', 'Software-Architektur', '.NET', 'Java', 'Vue', 'Svelte']
				}
			]
		})
	);
</script>

<svelte:head>
	<title>{title}</title>
	<meta name="description" content={description} />
	<meta property="og:title" content={title} />
	<meta property="og:type" content="website" />
	<meta property="og:description" content={description} />
	<meta property="og:image" content={`${origin}/MichaelHolleyBanner.png`} />
	<meta property="og:image:width" content="593" />
	<meta property="og:image:height" content="329" />
	<meta property="og:image:alt" content="Michael Holley – Software Entwickler" />
	<meta name="twitter:card" content="summary_large_image" />
	<!-- eslint-disable-next-line svelte/no-at-html-tags -->
	{@html structuredData}
</svelte:head>

<Header />
<Dev />
<Experience />
<Projects />
<Blogs />
