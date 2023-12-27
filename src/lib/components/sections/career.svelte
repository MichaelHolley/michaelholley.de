<script>
	import SectionHeader from '../shared/sectionHeader.svelte';
	import Step from '../career/step.svelte';
</script>

<section id="taetigkeiten" class={`bg-white text-black p-8 md:p-16 selection:bg-primary`}>
	<SectionHeader title="Tätigkeiten" class="text-center" />
	<div class="flex flex-col justify-center text-lg text-left">
		<Step period="Seit Jan. 2022" title="Software Developer" workplace="AraCom IT Services AG">
			<span class="block mt-2 text-justify">
				Teambasierte Entwicklung von Individual-Software für Kunden aus unterschiedlichsten Branchen
				unter Einsatz neuester Technologien.
			</span>
		</Step>
		<Step
			period="Sept. 2019 - Jan. 2022"
			title="Ausbildung zum Fachinformatiker für Anwendungsentwicklung"
			workplace="AraCom IT Services AG"
		>
			<span class="block mt-2 text-justify">Berufsschule abgeschlossen mit 1,0</span>
			<span class="block text-justify">
				IHK Prüfung abgelegt mit <strong>96 von 100</strong> Punkten gesamt
			</span>
		</Step>
	</div>
</section>
