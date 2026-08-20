<script lang="ts">
	import BoxReveal from '$lib/components/shared/misc/BoxReveal.svelte';
	import Grainient from '$lib/components/shared/misc/Grainient.svelte';
	import { cn } from '$lib/utils';
	import Icon from '@iconify/svelte';
</script>

<section class="relative isolate overflow-hidden">
	<div class="absolute inset-0 -z-10 w-full" aria-hidden="true">
		<Grainient color1="#dd7373" color3="#000" color2="#51a3a3" zoom={0.85} />
	</div>
	<div class="container pt-32 pb-22">
		<div class="flex flex-col items-center justify-center text-center">
			<div class="text-shadow-lg">
				<h1 class="text-5xl font-extrabold tracking-tight sm:text-7xl">Michael Holley</h1>
			</div>
			<div class="pt-2">
				<BoxReveal duration={0.6}>
					<span class="text-xl text-shadow-md">Software Engineer</span>
				</BoxReveal>
				<div
					class={cn(
						'mt-2 flex h-11 flex-row justify-center gap-4',
						'*:motion-translate-y-in-75 *:motion-blur-in-md'
					)}
				>
					<a
						class={cn('transition-all hover:scale-110', 'motion-delay-50')}
						href="https://www.linkedin.com/in/michael-holley-791a64228/"
						target="_blank"
						rel="noreferrer"
						aria-label="LinkedIn-Profile"
					>
						<Icon icon="fa:linkedin-square" class="text-4xl drop-shadow-md" />
					</a>
					<a
						class={cn('transition-all hover:scale-110', 'motion-delay-150')}
						href="https://github.com/MichaelHolley"
						target="_blank"
						rel="noreferrer"
						aria-label="GitHub-Profile"
					>
						<Icon icon="fa:github" class="text-4xl drop-shadow-md" />
					</a>
					<a
						class={cn('transition-all hover:scale-110', 'motion-delay-250')}
						href="mailto:michael.philipp.holley@gmail.com"
						aria-label="Contact me via Mail"
					>
						<Icon icon="tdesign:mail-filled" class="text-4xl drop-shadow-md" />
					</a>
				</div>
			</div>
		</div>
	</div>
</section>
