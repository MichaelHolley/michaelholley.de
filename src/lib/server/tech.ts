import colors from 'tailwindcss/colors';

export const tech = {
	dotnet: {
		icon: 'devicon:dot-net',
		color: colors.indigo[600],
		name: '.NET'
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
	CSS: {
		icon: 'devicon:css3',
		color: colors.sky[400],
		name: 'CSS'
	},
	nodejs: {
		icon: 'devicon:nodejs',
		color: colors.green[600],
		name: 'Node.js'
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
		icon: 'devicon:github',
		invertIconColor: true,
		color: colors.white,
		name: 'GitHub'
	},
	MongoDB: {
		icon: 'devicon:mongodb',
		color: colors.green[600],
		name: 'MongoDB'
	},
	MySQL: {
		icon: 'devicon:mysql',
		color: colors.sky[800],
		name: 'MySQL'
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
	invertIconColor?: boolean;
	name: string;
}
