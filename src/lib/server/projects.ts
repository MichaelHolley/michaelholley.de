export const projects: Project[] = [
	{
		title: 'Treuepunkte App',
		description: [
			'Als Team-Lead des Frontend übernahm ich die Verantwortung und Leitung einer umfangreichen Bonuspunkte-App einschließlich Web-Anwendung einer führenden Lebensmittelkette mit mehreren zehntausend aktiven Nutzern. Meine Tätigkeiten begannen, als die App bereits in der Betriebsphase war, mit dem Ziel neue Features zu implementieren und Optimierungen bzgl. Stabilität, Performance und UX durchzuführen.',
			'Während der Projektlaufzeit waren mein Team und ich in der Lage, die App zur Zufriedenheit des Kunden weiterzuentwickeln, sowie eine erhebliche Verbesserung der Bewertung in den App-Stores zu erreichen. Ich bin stolz darauf, einen Beitrag zu einem so bedeutenden Projekt geleistet zu haben.'
		],
		tech: ['React Native', 'React', 'TypeScript', 'Azure', 'ASP.NET']
	},
	{
		title: 'Coding 2025',
		description: [
			'Die Coding Challenge 2025 ist ein persönliches Langzeitprojekt mit dem Ziel, täglich zu coden und kontinuierlich die eigenen Fähigkeiten als Entwickler zu verbessern. Seit Beginn des Jahres 2025 wird – mit Ausnahme von Urlaubs- und Krankheitstagen sowie seltenen Ausnahmefällen – jeden Tag programmiert.',
			'Im Rahmen dieser Challenge entstehen verschiedene Projekte, darunter die App Ascent, die Portfolio-Website, Tshopper und weitere Anwendungen. Diese dienen nicht nur zur praktischen Umsetzung neuer Ideen, sondern auch zur Erprobung moderner Technologien und zur gezielten Weiterentwicklung technischer Fähigkeiten.'
		],
		github: 'https://github.com/MichaelHolley'
	},
	{
		title: 'Wissenschaftspreis',
		description: [
			'Mit unserem Projekt haben wir mehrere Ziele erreicht. Erstens haben wir erfolgreich CO₂-Daten mit einem Raspberry Pi und einem CO₂-Sensor gemessen und gespeichert. Zweitens haben wir eine REST-API erstellt, mit der wir auf die CO₂-Daten zugreifen und sie in einer Webanwendung anzeigen konnten. Drittens haben wir eine benutzerfreundliche Webanwendung erstellt, die die CO₂-Daten im Zeitverlauf auf optisch ansprechende Weise anzeigt.',
			'Insgesamt hat unser Projekt unsere Fähigkeiten in den Bereichen Programmierung, Webentwicklung und Datenanalyse unter Beweis gestellt. Außerdem sammelten wir wertvolle Erfahrungen bei der Arbeit im Team und bei der Zusammenarbeit an einem Projekt. Unser zweiter Platz beim Wissenschaftspreis Augsburger Schulen 2021 war ein Beweis für unsere harte Arbeit und unsere Hingabe, welche mit einem Preisgeld von 1000€ belohnt wurde.'
		],
		tech: ['Raspberry Pi', 'Python', 'ASP.NET', 'HTML', 'JavaScript']
	},
	{
		title: 'Ascent',
		description: [
			'Ascent ist eine Habit-Tracking-App, die Nutzern dabei hilft, ihre täglichen Routinen zu überwachen und positive Verhaltensweisen zu etablieren. Die Entwicklung dieser Anwendung hat nicht nur meine technischen Fähigkeiten erweitert, sondern auch meine Kompetenzen im Projektmanagement und in der Problemlösung gestärkt.​',
			'Während des Entwicklungsprozesses habe ich gelernt, komplexe Anforderungen zu analysieren, effektive Lösungen zu entwerfen und den gesamten Lebenszyklus einer Anwendung zu steuern. Diese Erfahrungen haben mein Verständnis für Softwarearchitektur vertieft und meine Fähigkeit verbessert, Projekte effizient zu planen und umzusetzen.​',
			'Die App ermöglicht es den Nutzern, individuelle Ziele zu setzen und ihren Fortschritt durch detaillierte Statistiken und Analysen zu visualisieren. Durch diese Funktionen wird eine benutzerfreundliche und motivierende Erfahrung geschaffen, die es den Nutzern ermöglicht, ihre persönlichen Ziele effektiv zu erreichen.​',
			'Durch die Arbeit an Ascent habe ich nicht nur meine technischen Fähigkeiten erweitert, sondern auch wertvolle Einblicke in die Bedeutung von Nutzerzentrierung und kontinuierlichem Feedback im Entwicklungsprozess gewonnen. Diese Erkenntnisse werden zweifellos in zukünftigen Projekten von großem Nutzen sein.'
		],
		github: 'https://github.com/MichaelHolley/Ascent',
		url: 'https://ascent.michaelholley.de',
		tech: ['SvelteKit', 'Svelte', 'Tailwindcss', 'TypeScript', 'Docker']
	},
	{
		title: 'michaelholley.de',
		description: [
			'Diese Portfolio-Website wurde entwickelt, um Fachwissen und Fähigkeiten als Fullstack-Entwickler ansprechend zu präsentieren. Im Laufe der Zeit entstanden mehrere Versionen mit unterschiedlichen Technologien, um verschiedene Ansätze und Frameworks zu erproben.',
			'Die aktuelle Umsetzung basiert auf SvelteKit und Tailwind CSS und legt den Fokus auf eine schlanke, performante und interaktive Benutzererfahrung. Moderne Web-Technologien sorgen für eine optimierte User-Experience und hinterlassen einen positiven Eindruck bei potenziellen Kunden und Arbeitgebern.'
		],
		github: 'https://github.com/MichaelHolley/michaelholley.de',
		tech: ['SvelteKit', 'Svelte', 'Tailwindcss', 'TypeScript', 'Docker']
	}
];

export interface Project {
	title: string;
	description: string[];
	tech?: string[];
	github?: string;
	url?: string;
}
