<script>
	import MeImg from '$lib/assets/images/image.webp';
	import Blurfade from '$lib/components/shared/misc/BlurFade.svelte';
	import BoxReveal from '$lib/components/shared/misc/BoxReveal.svelte';
	import Icon from '@iconify/svelte';
</script>

<section class="header-bg">
	<div class="container flex flex-col lg:flex-row justify-between gap-6 lg:gap-12 py-10">
		<div class="flex flex-col justify-center">
			<div>
				<BoxReveal duration={0.6}>
					<h1 class="text-5xl sm:text-7xl font-bold">Michael</h1>
				</BoxReveal>
				<BoxReveal duration={0.4}>
					<h1 class="text-5xl sm:text-7xl font-bold pb-4">Holley</h1>
				</BoxReveal>
			</div>
			<div>
				<BoxReveal duration={0.8}>
					<h2 class="text-xl pl-1 mb-2">FullStack Developer</h2>
				</BoxReveal>
				<Blurfade delay={0.5} once>
					<div class="h-11 flex flex-row pl-1">
						<a
							class="hover:scale-110 transition-all"
							href="https://www.linkedin.com/in/michael-holley-791a64228/"
							target="_blank"
							rel="noreferrer"
							aria-label="LinkedIn-Profile"
						>
							<Icon icon="fa:linkedin-square" class="text-4xl" />
						</a>
						<a
							class="ml-3 hover:scale-110 transition-all"
							href="https://github.com/MichaelHolley"
							target="_blank"
							rel="noreferrer"
							aria-label="GitHub-Profile"
						>
							<Icon icon="fa:github" class="text-4xl" />
						</a>
						<a
							class="ml-3 hover:scale-110 transition-all"
							href="mailto:michael.philipp.holley@gmail.com"
							aria-label="GitHub-Profile"
						>
							<Icon icon="tdesign:mail-filled" class="text-4xl" />
						</a>
					</div>
				</Blurfade>
			</div>
		</div>
		<div class="flex flex-col justify-center items-center">
			<img
				src={MeImg}
				alt="Michael Holley"
				class="max-w-[280px] lg:max-w-[350px] shadow-2xl header-img"
			/>
		</div>
	</div>
</section>

<style>
	.header-bg {
		background-image: linear-gradient(
			-30deg,
			theme('colors.primary.DEFAULT') 33%,
			theme('colors.secondary.DEFAULT') 0%
		);
	}

	.header-img {
		box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px,
			rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px,
			rgba(0, 0, 0, 0.09) 0px -3px 5px;
		clip-path: polygon(17% 0, 100% 0%, 83% 100%, 0% 100%);
	}
</style>
