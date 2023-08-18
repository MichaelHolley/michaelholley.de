<script>
	import SectionHeader from '../misc/sectionHeader.svelte';
	import AnimatedSectionWrapper from './animatedSectionWrapper.svelte';
</script>

<section id="taetigkeiten" class={`bg-mhAlt p-8 md:p-16 selection:bg-mhPrimary`}>
	<AnimatedSectionWrapper>
		<SectionHeader title="Tätigkeiten" class="text-center" />
		<div class="flex flex-col justify-center text-lg text-left">
			<div class="w-10/12 lg:w-2/5 mx-auto my-6">
				<div class="pl-5 text-xl">Seit Jan. 2022</div>
				<h4 class="text-2xl font-bold">Software Developer</h4>
				<div>AraCom IT Services AG</div>
				<div class="text-justify">
					Teambasierte Entwicklung von Individual-Software für Kunden aus unterschiedlichsten
					Branchen unter Einsatz neuester Technologien.
				</div>
			</div>
			<div class="w-10/12 lg:w-2/5 mx-auto my-6 ">
				<div class="pl-5 text-xl">Sept. 2019 - Jan. 2022</div>
				<h4 class="text-2xl font-bold">
					Ausbildung zum Fachinformatiker für Anwendungsentwicklung
				</h4>
				<div>AraCom IT Services AG</div>
				<div class="text-justify">Berufsschule abgeschlossen mit 1,0</div>
				<div class="text-justify">
					IHK Prüfung abgelegt mit <strong>96 von 100</strong> Punkten gesamt
				</div>
			</div>
		</div>
	</AnimatedSectionWrapper>
</section>
