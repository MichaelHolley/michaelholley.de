<script lang="ts">
	import { track } from '#lib/analytics/umami.js';
	import { CONTACT_EMAIL, GITHUB_URL, LINKEDIN_URL } from '#lib/contact.js';
	import Icon from '@iconify/svelte';
</script>

<footer id="contact" class="bg-black text-white" aria-labelledby="contact-title">
	<div class="container py-12 md:py-16">
		<div class="flex flex-wrap items-end justify-between gap-x-12 gap-y-8">
			<div>
				<h2 id="contact-title" class="display text-[clamp(2.5rem,1.5rem+4vw,4.5rem)] leading-none">
					Sag mal <span class="text-primary">Hallo.</span>
				</h2>
				<a
					class="group link-underline sm:text-lead mt-4 inline-flex max-w-full items-center gap-3 font-medium"
					href="mailto:{CONTACT_EMAIL}"
					onclick={() => track('contact-click', { location: 'footer' })}
				>
					<span class="wave inline-block" aria-hidden="true">👋</span>
					<span class="min-w-0 [overflow-wrap:anywhere]">{CONTACT_EMAIL}</span>
				</a>
			</div>

			<ul class="flex flex-wrap gap-x-6 gap-y-2">
				<li>
					<a
						class="group link-underline inline-flex min-h-11 items-center gap-1 font-medium"
						href={GITHUB_URL}
						target="_blank"
						rel="noreferrer"
						onclick={() => track('social-click', { network: 'github', location: 'footer' })}
					>
						GitHub
						<Icon
							icon="ic:baseline-arrow-outward"
							class="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
							aria-hidden="true"
						/>
					</a>
				</li>
				<li>
					<a
						class="group link-underline inline-flex min-h-11 items-center gap-1 font-medium"
						href={LINKEDIN_URL}
						target="_blank"
						rel="noreferrer"
						onclick={() => track('social-click', { network: 'linkedin', location: 'footer' })}
					>
						LinkedIn
						<Icon
							icon="ic:baseline-arrow-outward"
							class="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
							aria-hidden="true"
						/>
					</a>
				</li>
			</ul>
		</div>

		<div
			class="text-small text-muted mt-12 flex flex-wrap items-baseline justify-between gap-x-8 gap-y-2"
		>
			<p>&copy; {new Date().getFullYear()} Michael Holley</p>
			<a
				class="group link-underline inline-flex min-h-11 items-center gap-1 hover:text-white"
				href="#top"
			>
				Nach oben
				<Icon
					icon="ic:baseline-arrow-upward"
					class="size-4 transition-transform group-hover:-translate-y-1"
					aria-hidden="true"
				/>
			</a>
		</div>
	</div>
</footer>

<style>
	/* The hand waves when the email link is hovered or focused. */
	:global(.group:hover) > .wave,
	:global(.group:focus-visible) > .wave {
		animation: wave 0.9s ease-in-out;
		transform-origin: 70% 70%;
	}

	@keyframes wave {
		0%,
		100% {
			transform: rotate(0);
		}
		20%,
		60% {
			transform: rotate(16deg);
		}
		40%,
		80% {
			transform: rotate(-8deg);
		}
	}

	@media (prefers-reduced-motion: reduce) {
		:global(.group:hover) > .wave,
		:global(.group:focus-visible) > .wave {
			animation: none;
		}
	}
</style>
