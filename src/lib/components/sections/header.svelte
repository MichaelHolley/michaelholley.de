<script>
	import MeImg from '$lib/assets/images/image.jpg';
</script>

<section class="flex flex-col lg:flex-row header-bg">
	<div class="basis-3/5 p-10 py-16 flex flex-col justify-center ">
		<h1 class="text-5xl sm:text-8xl font-bold">Michael</h1>
		<h1 class="text-5xl sm:text-8xl font-bold">Holley</h1>
		<h3 class="text-xl pl-1 mt-6">Fullstack-Developer</h3>
	</div>
	<div class="basis-2/5 p-10 pt-0 lg:pt-10 flex flex-col justify-center">
		<img src={MeImg} alt="Michael Holley" class="w-[250px] lg:w-3/5 align-middle mx-auto lg:mx-0" />
	</div>
</section>

<style>
	.header-bg {
		background-image: linear-gradient(
			-30deg,
			theme('colors.mhPrimary') 33%,
			theme('colors.mhSecondary') 0%
		);
	}
</style>
