import colors from 'tailwindcss/colors';

export const tech: Tech[] = [
	{
		icon: 'devicon:dot-net',
		color: colors.indigo[600],
		label: '.NET'
	},
	{
		label: 'Java',
		icon: 'devicon:java',
		color: colors.red[600]
	},
	{
		label: 'HTML',
		icon: 'devicon:html5',
		color: colors.orange[600]
	},
	{
		icon: 'devicon:typescript',
		color: colors.sky[600],
		label: 'TypeScript'
	},
	{
		icon: 'devicon:tailwindcss',
		color: colors.sky[400],
		label: 'TailwindCSS'
	},
	{
		icon: 'devicon:svelte',
		color: colors.orange[600],
		label: 'Svelte'
	},
	{
		icon: 'devicon:react',
		color: colors.cyan[300],
		label: 'React'
	},
	{ label: 'Angular', icon: 'devicon:angular', color: colors.fuchsia[500] },
	{ label: 'Vue', icon: 'devicon:vuejs', color: colors.emerald[400] },
	{
		icon: 'devicon:python',
		color: colors.yellow[300],
		label: 'Python'
	},
	{
		label: 'GitLab',
		icon: 'devicon:gitlab',
		color: colors.orange[500]
	},
	{
		label: 'Docker',
		icon: 'devicon:docker',
		color: colors.cyan[500]
	},
	{
		label: 'GitHub',
		icon: 'devicon:github',
		invertIconColor: true,
		color: colors.white
	},
	{
		label: 'MongoDB',
		icon: 'devicon:mongodb',
		color: colors.green[600]
	},
	{
		label: 'MySQL',
		icon: 'devicon:mysql',
		color: colors.sky[800]
	}
];

interface Tech {
	icon: string;
	color: string;
	label: string;
	invertIconColor?: boolean;
}
