import colors from 'tailwindcss/colors';

export const tech: TechMap = {
	dotnet: {
		icon: 'logos:dotnet',
		color: colors.indigo[600],
		name: '.NET'
	},
	aspnet: {
		icon: 'logos:dotnet',
		color: colors.indigo[600],
		name: 'ASP.NET'
	},
	Java: {
		icon: 'devicon:java',
		color: colors.red[600],
		name: 'Java'
	},
	HTML: {
		icon: 'devicon:html5',
		color: colors.orange[600],
		name: 'HTML'
	},
	TypeScript: {
		icon: 'devicon:typescript',
		color: colors.sky[600],
		name: 'TypeScript'
	},
	tailwindcss: {
		icon: 'devicon:tailwindcss',
		color: colors.sky[400],
		name: 'Tailwind CSS'
	},
	Svelte: {
		icon: 'devicon:svelte',
		color: colors.orange[600],
		name: 'Svelte'
	},
	React: {
		icon: 'devicon:react',
		color: colors.cyan[300],
		name: 'React'
	},
	Vue: {
		icon: 'devicon:vuejs',
		color: colors.emerald[400],
		name: 'Vue'
	},
	Python: {
		icon: 'devicon:python',
		color: colors.yellow[300],
		name: 'Python'
	},
	GitLab: {
		icon: 'devicon:gitlab',
		color: colors.orange[500],
		name: 'GitLab'
	},
	Docker: {
		icon: 'devicon:docker',
		color: colors.cyan[500],
		name: 'Docker'
	},
	GitHub: {
		icon: 'fa:github',
		color: colors.white,
		name: 'GitHub'
	},
	Git: {
		icon: 'devicon:git',
		color: colors.red[500],
		name: 'Git'
	},
	Azure: {
		icon: 'lineicons:azure',
		color: colors.sky[500],
		name: 'Azure'
	},
	prisma: {
		icon: 'lineicons:prisma',
		color: colors.white,
		name: 'Prisma'
	}
};

export interface Tech {
	icon: string;
	color: string;
	name: string;
}

export interface TechMap {
	[key: string]: Tech;
}
