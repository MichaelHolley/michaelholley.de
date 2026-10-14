<script lang="ts">
	import { page } from '$app/state';
	import Icon from '@iconify/svelte';

	const isNotFound = $derived(page.status === 404);
	const title = $derived(isNotFound ? 'Diese Seite fehlt.' : 'Diese Seite ist kaputt.');
	const description = $derived(
		isNotFound
			? 'Unter dieser Adresse gibt es nichts. Vielleicht wurde die Seite verschoben, oder der Link, der dich hierher geführt hat, ist veraltet.'
			: 'Beim Laden dieser Seite ist ein unerwarteter Fehler aufgetreten. Neu laden hilft manchmal.'
	);
</script>

<svelte:head>
	<title>Michael Holley | {title}</title>
	<meta name="robots" content="noindex" />
</svelte:head>

<section class="flex min-h-svh flex-col justify-center">
	<div class="container w-full max-w-3xl py-24">
		<div class="flex items-center gap-4 font-mono text-xs tracking-[0.3em] uppercase">
			<span class="text-primary">Fehler {page.status}</span>
			<span class="h-px flex-1 bg-white/15"></span>
		</div>

		<h1 class="mt-6 text-4xl font-extrabold tracking-tight text-balance sm:text-6xl">
			{title}
		</h1>

		<p class="mt-5 max-w-lg leading-relaxed text-neutral-400">
			{description}
		</p>

		<div class="border-primary/60 mt-8 border-l-2 py-1 pl-4">
			<p class="font-mono text-xs tracking-widest text-neutral-500 uppercase">Angefragt</p>
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
				Zur Startseite
			</a>
		</div>
	</div>
</section>
