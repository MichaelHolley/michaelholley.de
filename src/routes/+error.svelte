<script lang="ts">
	import { page } from '$app/state';
	import Icon from '@iconify/svelte';

	const isNotFound = $derived(page.status === 404);
	const title = $derived(isNotFound ? 'Page not found' : 'Something went wrong');
	const description = $derived(
		isNotFound
			? 'The page you are looking for does not exist or may have moved.'
			: 'An unexpected error occurred while loading this page.'
	);
</script>

<svelte:head>
	<title>Michael Holley | {title}</title>
	<meta name="robots" content="noindex" />
</svelte:head>

<section class="flex flex-col items-center justify-center py-16 text-center">
	<p class="text-primary text-sm font-semibold tracking-[0.2em] uppercase">{page.status}</p>
	<h1 class="mt-4 text-4xl font-extrabold tracking-tight sm:text-5xl">{title}</h1>
	<p class="mt-4 max-w-md text-neutral-500 dark:text-neutral-400">{description}</p>
	<a
		href="/"
		class="bg-primary hover:bg-primary/90 mt-8 inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium text-white transition-colors"
	>
		<Icon icon="ic:baseline-arrow-back" class="text-secondary" />
		Back to home
	</a>
</section>
