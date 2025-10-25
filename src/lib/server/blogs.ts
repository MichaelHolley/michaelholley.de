export interface Blog {
	id: string;
	title: string;
	description: string;
	released: string;
	tags?: string[];
}

export const blogs: Blog[] = [
	{
		id: 'install-web-app',
		title: 'Web-Apps installieren',
		description:
			'Verwandeln Sie Ihre Webanwendung in ein natives App-Erlebnis. Dieser Leitfaden zeigt Ihnen Schritt für Schritt, wie Sie möglichst einfach mit nur einer Datei Ihre Web-App installieren können.',
		released: '2025-07-18',
		tags: ['web', 'mobile', 'app']
	}
];
