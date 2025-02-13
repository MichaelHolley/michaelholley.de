<script>
	import Icon from '@iconify/svelte';
	import DotPattern from '$lib/components/shared/misc/DotPattern.svelte';
</script>

<footer class="relative bg-black">
	<div class="container space-y-6 pb-4 pt-8 text-white">
		<div class="flex flex-col justify-center gap-8 sm:flex-row">
			<div class="space-y-2 text-right">
				<p class="text-4xl leading-10">Code</p>
				<p class="text-4xl leading-10">mit</p>
				<p class="text-4xl leading-10">Leidenschaft.</p>
			</div>

			<div class="flex flex-row justify-center">
				<div
					class="flex flex-col items-start justify-center gap-x-10 gap-y-2 sm:gap-x-0 sm:gap-y-3"
				>
					<a
						class="flex flex-row items-center justify-start gap-2 leading-9 transition-all hover:scale-105 sm:justify-center"
						href="mailto:michael.philipp.holley@gmail.com"
						aria-label="GitHub-Profile"
					>
						<div class="transition-all group-hover:scale-110">
							<Icon icon="tdesign:mail-filled" class="text-2xl" />
						</div>
						Contact me
					</a>
					<a
						class="flex flex-row items-center justify-start gap-2 leading-9 transition-all hover:scale-105 sm:justify-center"
						href="https://github.com/MichaelHolley"
						target="_blank"
						rel="noreferrer"
						aria-label="GitHub-Profile"
					>
						<div class="transition-all group-hover:scale-110">
							<Icon icon="fa:github" class="text-2xl" />
						</div>
						GitHub
					</a>
					<a
						class="flex flex-row items-center justify-start gap-2 leading-9 transition-all hover:scale-105 sm:justify-center"
						href="https://www.linkedin.com/in/michael-holley-791a64228/"
						target="_blank"
						rel="noreferrer"
						aria-label="LinkedIn-Profile"
					>
						<div class="transition-all group-hover:scale-110">
							<Icon icon="fa:linkedin-square" class="text-2xl" />
						</div>
						LinkedIn
					</a>
				</div>
			</div>
		</div>
		<p class="text-center text-sm">&copy; {new Date().getFullYear()} Michael Holley</p>
	</div>

	<DotPattern
		width={20}
		height={20}
		cx={10}
		cy={10}
		cr={1}
		class="[mask-image:linear-gradient(to_bottom_left,white,transparent,transparent)] "
	/>
</footer>
