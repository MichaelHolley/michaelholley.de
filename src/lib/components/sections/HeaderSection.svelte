<script>
	import BoxReveal from '$lib/components/shared/misc/BoxReveal.svelte';
	import Icon from '@iconify/svelte';
</script>

<section class="header-bg">
	<div class="container py-20 pb-16">
		<div class="flex flex-col justify-center">
			<div class="text-shadow-md">
				<BoxReveal duration={0.6}>
					<h1 class="text-5xl font-bold sm:text-7xl">Michael</h1>
				</BoxReveal>
				<BoxReveal duration={0.4}>
					<h1 class="pb-4 text-5xl font-bold sm:text-7xl">Holley</h1>
				</BoxReveal>
			</div>
			<div>
				<BoxReveal duration={0.8}>
					<span class="pl-1 text-xl text-shadow-sm">Software Entwickler</span>
				</BoxReveal>
				<div
					class="*motion-opacity-in-0 *:motion-translate-y-in-75 *:motion-blur-in-md mt-2 flex h-11 flex-row pl-1"
				>
					<a
						class="motion-delay-50 transition-all hover:scale-110"
						href="https://www.linkedin.com/in/michael-holley-791a64228/"
						target="_blank"
						rel="noreferrer"
						aria-label="LinkedIn-Profile"
					>
						<Icon icon="fa:linkedin-square" class="text-4xl drop-shadow-md" />
					</a>
					<a
						class="motion-delay-150 ml-3 transition-all hover:scale-110"
						href="https://github.com/MichaelHolley"
						target="_blank"
						rel="noreferrer"
						aria-label="GitHub-Profile"
					>
						<Icon icon="fa:github" class="text-4xl drop-shadow-md" />
					</a>
					<a
						class="motion-delay-250 ml-3 transition-all hover:scale-110"
						href="mailto:michael.philipp.holley@gmail.com"
						aria-label="GitHub-Profile"
					>
						<Icon icon="tdesign:mail-filled" class="text-4xl drop-shadow-md" />
					</a>
				</div>
			</div>
		</div>
	</div>
</section>

<style>
	@property --p {
		syntax: '<percentage>';
		inherits: false;
		initial-value: 0%;
	}

	@property --angle {
		syntax: '<angle>';
		inherits: false;
		initial-value: 0deg;
	}

	@keyframes animate-gradient {
		to {
			--p: 33%;
			--angle: -30deg;
		}
	}

	.header-bg {
		background-image: linear-gradient(
			var(--angle),
			var(--color-primary) var(--p),
			var(--color-secondary) 0%
		);
		animation: animate-gradient 0.55s ease-out forwards;
	}
</style>
