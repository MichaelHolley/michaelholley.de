<script lang="ts">
	import { page } from '$app/state';
	import Icon from '@iconify/svelte';

	const isNotFound = $derived(page.status === 404);
	const title = $derived(isNotFound ? 'This page is missing.' : 'This page broke.');
	const description = $derived(
		isNotFound
			? 'Nothing lives at this address. It may have moved, or the link that sent you here is out of date.'
			: 'The server hit an unexpected error while building this page. Reloading sometimes helps.'
	);
</script>

<svelte:head>
	<title>Michael Holley | {title}</title>
	<meta name="robots" content="noindex" />
</svelte:head>

<section class="flex min-h-svh flex-col justify-center">
	<div class="container w-full max-w-3xl py-24">
		<div class="flex items-center gap-4 font-mono text-xs tracking-[0.3em] uppercase">
			<span class="text-primary">Error {page.status}</span>
			<span class="h-px flex-1 bg-white/15"></span>
		</div>

		<h1 class="mt-6 text-4xl font-extrabold tracking-tight text-balance sm:text-6xl">
			{title}
		</h1>

		<p class="mt-5 max-w-lg leading-relaxed text-neutral-400">
			{description}
		</p>

		<div class="border-primary/60 mt-8 border-l-2 py-1 pl-4">
			<p class="font-mono text-xs tracking-widest text-neutral-500 uppercase">You requested</p>
			<p class="mt-1 font-mono text-sm break-all text-neutral-200 sm:text-base">
				michaelholley.de<span class="text-primary">{page.url.pathname}</span>
			</p>
		</div>

		<div class="mt-10 flex flex-wrap items-center gap-x-8 gap-y-4">
			<a
				href="/"
				class="bg-primary hover:bg-primary-hover focus-visible:outline-secondary group inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold text-black transition-colors focus-visible:outline-2 focus-visible:outline-offset-4"
			>
				<Icon
					icon="ic:baseline-arrow-back"
					class="transition-transform group-hover:-translate-x-0.5"
				/>
				Back to home
			</a>
		</div>
	</div>
</section>
