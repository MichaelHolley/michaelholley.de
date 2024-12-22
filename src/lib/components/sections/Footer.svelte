<script>
	import Icon from '@iconify/svelte';
	import DotPattern from '$lib/components/shared/misc/DotPattern.svelte';
</script>

<footer class="relative bg-black">
	<div class="container pt-8 pb-4 text-white space-y-6">
		<div class="flex flex-col sm:flex-row gap-8 justify-center">
			<div class="text-right space-y-2">
				<p class="leading-10 text-4xl">Code</p>
				<p class="leading-10 text-4xl">mit</p>
				<p class="leading-10 text-4xl">Leidenschaft.</p>
			</div>

			<div
				class="flex flex-row sm:flex-col flex-wrap justify-center sm:items-start gap-x-10 sm:gap-x-0 gap-y-3"
			>
				<a
					class="flex flex-row gap-2 justify-start sm:justify-center hover:scale-105 transition-all items-center leading-9"
					href="mailto:michael.philipp.holley@gmail.com"
					aria-label="GitHub-Profile"
				>
					<div class="group-hover:scale-110 transition-all">
						<Icon icon="tdesign:mail-filled" class="text-2xl" />
					</div>
					Contact me
				</a>
				<a
					class="flex flex-row gap-2 justify-start sm:justify-center hover:scale-105 transition-all items-center leading-9"
					href="https://github.com/MichaelHolley"
					target="_blank"
					rel="noreferrer"
					aria-label="GitHub-Profile"
				>
					<div class="group-hover:scale-110 transition-all">
						<Icon icon="fa:github" class="text-2xl" />
					</div>
					GitHub
				</a>
				<a
					class="flex flex-row gap-2 justify-start sm:justify-center hover:scale-105 transition-all items-center leading-9"
					href="https://www.linkedin.com/in/michael-holley-791a64228/"
					target="_blank"
					rel="noreferrer"
					aria-label="LinkedIn-Profile"
				>
					<div class="group-hover:scale-110 transition-all">
						<Icon icon="fa:linkedin-square" class="text-2xl" />
					</div>
					LinkedIn
				</a>
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
