<script lang="ts">
	import { track } from '#lib/analytics/umami.js';
	import { getExperienceSection } from '#lib/api/experience-section.remote.js';
	import Grainient from '#lib/components/shared/misc/Grainient.svelte';
	import { CONTACT_EMAIL, GITHUB_URL, LINKEDIN_URL } from '#lib/contact.js';
	import Icon from '@iconify/svelte';

	const { experienceSection } = await getExperienceSection();

	// The newest station from the CMS says what Michael does today.
	const current = experienceSection?.Steps[0];
	const role = current
		? current.Employer
			? `${current.Role} bei ${current.Employer}`
			: current.Role
		: 'Software Engineer';

	const sections = [
		{ href: '#experience', label: 'Werdegang' },
		{ href: '#projects', label: 'Projekte' },
		{ href: '#blog', label: 'Artikel' }
	];
</script>

{#snippet name()}
	<span class="line"><span data-line style="--i: 0">Michael</span></span>
	<span class="line"><span data-line style="--i: 1">Holley</span></span>
{/snippet}

<section class="hero relative isolate flex min-h-svh flex-col bg-black">
	<div class="field absolute inset-x-0 top-0 -z-10 bg-white" aria-hidden="true">
		<Grainient color1="#dd7373" color2="#51a3a3" color3="#f5f5f5" zoom={1.0} />
	</div>

	<header class="relative z-10 container flex h-20 items-center justify-between gap-6 text-black">
		<a href="/" class="press -m-1 block p-1" aria-label="Michael Holley, Startseite">
			<img src="/MichaelHolleyIcon.svg" alt="" width="40" height="40" class="size-10" />
		</a>
		<nav aria-label="Seitenbereiche" class="flex items-center gap-8">
			<ul class="hidden items-center gap-7 font-medium md:flex">
				{#each sections as s (s.href)}
					<li><a class="link-underline" href={s.href}>{s.label}</a></li>
				{/each}
			</ul>
			<a
				class="press inline-flex h-11 items-center bg-black px-5 font-medium text-white transition-colors hover:bg-white hover:text-black"
				href="mailto:{CONTACT_EMAIL}"
				onclick={() => track('contact-click', { location: 'header' })}
			>
				E-Mail<span class="hidden sm:inline">&nbsp;schreiben</span>
			</a>
		</nav>
	</header>

	<!-- The name is set twice inside the one h1: ink on the Grainient above the seam, paper on the
	     ground below it. Screen readers get the lower copy only. -->
	<h1 class="name display">
		<span class="name-copy name-copy--above" aria-hidden="true">
			<span class="name-block">{@render name()}</span>
		</span>
		<span class="name-copy name-copy--below">
			<span class="name-block">{@render name()}</span>
		</span>
	</h1>

	<div class="intro relative container flex flex-col items-center pb-12 text-center">
		<p class="text-lead max-w-[40ch] text-white" data-load style="--d: 420ms">
			{role}. Ich entwickle Webanwendungen vom Datenmodell bis zur Oberfläche, mit .NET, Java, Vue
			und Svelte.
		</p>
		<ul class="mt-6 flex items-center gap-8 font-medium" data-load style="--d: 480ms">
			<li>
				<a
					class="link-underline inline-flex min-h-11 items-center gap-2"
					href={GITHUB_URL}
					target="_blank"
					rel="noreferrer"
					onclick={() => track('social-click', { network: 'github', location: 'header' })}
				>
					<Icon icon="fa:github" class="size-5" aria-hidden="true" />
					GitHub
				</a>
			</li>
			<li>
				<a
					class="link-underline inline-flex min-h-11 items-center gap-2"
					href={LINKEDIN_URL}
					target="_blank"
					rel="noreferrer"
					onclick={() => track('social-click', { network: 'linkedin', location: 'header' })}
				>
					<Icon icon="fa:linkedin-square" class="size-5" aria-hidden="true" />
					LinkedIn
				</a>
			</li>
		</ul>
	</div>
</section>

<style>
	.hero {
		/* Where the Grainient meets the ground, and the size of the name across it. */
		--seam: 46svh;
		--size: min(28vw, 26svh);
		--lh: 0.86;
	}

	@media (min-width: 768px) {
		.hero {
			--seam: 50svh;
			--size: min(24vw, 30svh);
		}
	}

	.field {
		height: var(--seam);
	}

	.name {
		position: absolute;
		inset: 0;
		margin: 0;
		font-size: var(--size);
		line-height: var(--lh);
		letter-spacing: -0.005em;
	}

	/* Line one stands on the Grainient; the seam cuts line two through its upper third. */
	.name-block {
		position: absolute;
		inset-inline: 0;
		top: calc(var(--seam) - var(--size) * var(--lh) * 4 / 3);
		text-align: center;
	}

	.name-copy {
		position: absolute;
		inset: 0;
	}

	.name-copy--above {
		color: var(--color-black);
		clip-path: inset(0 0 calc(100% - var(--seam)) 0);
	}

	.name-copy--below {
		color: var(--color-white);
		clip-path: inset(var(--seam) 0 0 0);
	}

	/* The sentence sits 40px under the name, on the ground. */
	.intro {
		margin-top: calc(var(--seam) - 5rem + var(--size) * var(--lh) * 2 / 3 + 2.5rem);
	}

	.line {
		display: block;
		overflow: hidden;
		padding-block: 0.06em;
		margin-block: -0.06em;
	}

	[data-line] {
		display: block;
	}

	@media (prefers-reduced-motion: no-preference) {
		[data-line] {
			transform: translateY(105%);
			animation: line-up 900ms var(--ease-expo) forwards;
			animation-delay: calc(var(--i) * 110ms + 150ms);
		}

		[data-load] {
			opacity: 0;
			transform: translateY(12px);
			animation: load-rise 500ms var(--ease-out) forwards;
			animation-delay: var(--d);
		}
	}

	@keyframes line-up {
		to {
			transform: none;
		}
	}

	@keyframes load-rise {
		to {
			opacity: 1;
			transform: none;
		}
	}
</style>
