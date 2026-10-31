<script lang="ts">
	import { reveal } from '#lib/actions/reveal.js';
	import { track } from '#lib/analytics/umami.js';
	import { CONTACT_EMAIL, GITHUB_URL, LINKEDIN_URL } from '#lib/contact.js';
	import Icon from '@iconify/svelte';

	const SUBJECT = 'Nachricht über michaelholley.de';
	const [mailbox, domain] = CONTACT_EMAIL.split('@');

	let message = $state('');

	// Opens the visitor's mail program with the message already written. Without JavaScript the
	// form submits to the same mailto: address on its own.
	function compose(event: SubmitEvent) {
		event.preventDefault();
		track('contact-submit', { location: 'footer' });
		const params = `subject=${encodeURIComponent(SUBJECT)}&body=${encodeURIComponent(message)}`;
		window.location.href = `mailto:${CONTACT_EMAIL}?${params}`;
	}
</script>

<footer id="contact" class="bg-primary text-black" aria-labelledby="contact-title">
	<div class="page-grid container gap-y-12 pt-[clamp(4.5rem,2.5rem+8vw,10rem)] pb-8">
		<div class="col-span-12 lg:col-span-5" use:reveal>
			<h2 id="contact-title" class="text-lead font-medium">Kontakt</h2>
			<form
				class="mt-8"
				action="mailto:{CONTACT_EMAIL}"
				method="get"
				enctype="text/plain"
				onsubmit={compose}
			>
				<input type="hidden" name="subject" value={SUBJECT} />
				<label for="contact-message" class="text-lead block font-medium">
					<span class="block opacity-70">Ein Projekt, eine Stelle, eine Frage?</span>
					<span class="block">Schreib mir ein paar Zeilen.</span>
				</label>
				<div class="relative mt-7">
					<input
						id="contact-message"
						name="body"
						type="text"
						autocomplete="off"
						bind:value={message}
						placeholder="Hallo Michael, …"
						aria-describedby="contact-hint"
						class="placeholder:text-tertiary h-16 w-full bg-white pr-16 pl-5 text-black outline-none focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-inset"
					/>
					<button
						type="submit"
						class="press hover:bg-tertiary absolute top-1/2 right-2.5 flex size-11 -translate-y-1/2 items-center justify-center bg-black text-white"
						aria-label="Nachricht im E-Mail-Programm öffnen"
					>
						<Icon icon="ic:baseline-arrow-forward" class="size-5" aria-hidden="true" />
					</button>
				</div>
				<p id="contact-hint" class="text-small mt-4">
					Öffnet dein E-Mail-Programm mit dieser Nachricht.
				</p>
			</form>
		</div>

		<dl
			class="col-span-12 grid grid-cols-[auto_1fr] content-end gap-x-8 gap-y-3 lg:col-span-6 lg:col-start-7"
			use:reveal={90}
		>
			<dt class="opacity-70">GitHub</dt>
			<dd>
				<a
					class="link-underline font-medium"
					href={GITHUB_URL}
					target="_blank"
					rel="noreferrer"
					onclick={() => track('social-click', { network: 'github', location: 'footer' })}
				>
					github.com/MichaelHolley
				</a>
			</dd>
			<dt class="opacity-70">LinkedIn</dt>
			<dd>
				<a
					class="link-underline font-medium"
					href={LINKEDIN_URL}
					target="_blank"
					rel="noreferrer"
					onclick={() => track('social-click', { network: 'linkedin', location: 'footer' })}
				>
					linkedin.com/in/michael-holley
				</a>
			</dd>
		</dl>

		<p class="col-span-12 mt-[clamp(2rem,8vw,7rem)]" use:reveal={140}>
			<a
				class="email display link-underline block"
				href="mailto:{CONTACT_EMAIL}"
				onclick={() => track('contact-click', { location: 'footer' })}
			>
				<span class="block">{mailbox}</span>
				<span class="block">@{domain}</span>
			</a>
		</p>

		<div
			class="text-small col-span-12 flex flex-wrap items-baseline justify-between gap-x-8 gap-y-2"
		>
			<p>&copy; {new Date().getFullYear()} Michael Holley</p>
			<a class="link-underline inline-flex min-h-11 items-center" href="#top">Nach oben</a>
		</div>
	</div>
</footer>

<style>
	/* Fills the width on a phone; the poster size from there on. */
	.email {
		font-size: min(var(--text-poster), 10vw);
		line-height: 0.9;
		overflow-wrap: anywhere;
	}
</style>
