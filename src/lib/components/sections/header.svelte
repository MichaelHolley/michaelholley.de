<script>
	import MeImg from '$lib/assets/images/image.jpg';
	import colors from 'tailwindcss/colors';
	import GithubIcon from '../misc/icons/githubIcon.svelte';
	import LinkedinIcon from '../misc/icons/linkedinIcon.svelte';
	import MailIcon from '../misc/icons/mailIcon.svelte';
	import AnimatedSectionWrapper from './animatedSectionWrapper.svelte';
</script>

<section class="header-bg">
	<AnimatedSectionWrapper from="right">
		<div class="flex flex-col justify-between lg:flex-row md:pl-16">
			<div class="px-8 md:px-7 pt-10 lg:pt-0 flex flex-col justify-center ">
				<h1 class="text-5xl sm:text-8xl font-bold">Michael</h1>
				<h1 class="text-5xl sm:text-8xl font-bold">Holley</h1>
				<h2 class="text-xl pl-1 mt-6">Fullstack-Developer</h2>
				<div class="h-11 flex flex-row mt-6 pl-1">
					<a
						class="hover:scale-110 transition-all"
						href="https://www.linkedin.com/in/michael-holley-791a64228/"
						target="_blank"
						rel="noreferrer"
						aria-label="LinkedIn-Profile"
					>
						<LinkedinIcon color={colors.white} height={45} />
					</a>
					<a
						class="ml-3 hover:scale-110 transition-all"
						href="https://github.com/MichaelHolley"
						target="_blank"
						rel="noreferrer"
						aria-label="GitHub-Profile"
					>
						<GithubIcon color={colors.white} height={45} />
					</a>
					<a
						class="ml-3 hover:scale-110 transition-all"
						href="mailto:michael.philipp.holley@gmail.com"
						aria-label="GitHub-Profile"
					>
						<MailIcon color={colors.white} height={45} />
					</a>
				</div>
			</div>
			<div class="p-10 lg:pr-52 flex flex-col justify-center">
				<img
					src={MeImg}
					alt="Michael Holley"
					class="w-[250px] lg:w-[350px] align-middle mx-auto lg:mx-0 shadow-2xl header-img"
				/>
			</div>
		</div>
	</AnimatedSectionWrapper>
</section>

<style>
	.header-bg {
		background-image: linear-gradient(
			-30deg,
			theme('colors.mhPrimary') 33%,
			theme('colors.mhSecondary') 0%
		);
	}

	.header-img {
		box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px,
			rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px,
			rgba(0, 0, 0, 0.09) 0px -3px 5px;
	}
</style>
