<script lang="ts">
	import { page } from '$app/state';

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

<section class="flex min-h-svh flex-col justify-center bg-black text-white">
	<div class="container py-24">
		<h1 class="display text-poster">{title}</h1>

		<p class="text-lead mt-8 max-w-[44ch]">{description}</p>

		<p class="text-muted mt-6 break-all">
			Fehler {page.status} · Angefragt: michaelholley.de{page.url.pathname}
		</p>

		<a
			href="/"
			class="press bg-primary hover:bg-primary-hover mt-10 inline-flex h-11 items-center px-5 font-medium text-black"
		>
			Zur Startseite
		</a>
	</div>
</section>
