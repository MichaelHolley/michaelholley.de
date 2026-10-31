<script lang="ts">
	import { track } from '#lib/analytics/umami.js';
	import { CONTACT_EMAIL, GITHUB_URL, LINKEDIN_URL } from '#lib/contact.js';
</script>

<footer id="contact" class="bg-primary text-black" aria-labelledby="contact-title">
	<div class="container py-12 md:py-16">
		<div class="flex flex-wrap items-end justify-between gap-x-12 gap-y-8">
			<div>
				<h2 id="contact-title" class="text-lead font-medium">Kontakt</h2>
				<a
					class="link-underline text-lead mt-2 inline-block font-medium"
					href="mailto:{CONTACT_EMAIL}"
					onclick={() => track('contact-click', { location: 'footer' })}
				>
					{CONTACT_EMAIL}
				</a>
			</div>

			<ul class="flex flex-wrap gap-x-6 gap-y-2">
				<li>
					<a
						class="link-underline inline-flex min-h-11 items-center font-medium"
						href={GITHUB_URL}
						target="_blank"
						rel="noreferrer"
						onclick={() => track('social-click', { network: 'github', location: 'footer' })}
					>
						GitHub
					</a>
				</li>
				<li>
					<a
						class="link-underline inline-flex min-h-11 items-center font-medium"
						href={LINKEDIN_URL}
						target="_blank"
						rel="noreferrer"
						onclick={() => track('social-click', { network: 'linkedin', location: 'footer' })}
					>
						LinkedIn
					</a>
				</li>
			</ul>
		</div>

		<div class="text-small mt-10 flex flex-wrap items-baseline justify-between gap-x-8 gap-y-2">
			<p>&copy; {new Date().getFullYear()} Michael Holley</p>
			<a class="link-underline inline-flex min-h-11 items-center" href="#top">Nach oben</a>
		</div>
	</div>
</footer>
