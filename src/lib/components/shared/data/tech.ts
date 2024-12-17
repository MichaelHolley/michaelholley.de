import colors from 'tailwindcss/colors';

export const tech: Tech[] = [
	{
		icon: 'devicon:dot-net',
		color: colors.indigo[600]
	},
	{
		icon: 'devicon:java',
		color: colors.red[600]
	},
	{
		icon: 'devicon:html5',
		color: colors.orange[600]
	},
	{
		icon: 'devicon:typescript',
		color: colors.sky[600]
	},
	{
		icon: 'devicon:tailwindcss',
		color: colors.sky[400]
	},
	{
		icon: 'devicon:svelte',
		color: colors.orange[600]
	},
	{
		icon: 'devicon:react',
		color: colors.cyan[300]
	},
	{
		icon: 'devicon:vuejs',
		color: colors.emerald[400]
	},
	{
		icon: 'devicon:css3',
		color: colors.sky[400]
	},
	{
		icon: 'devicon:nodejs',
		color: colors.green[600]
	},
	{
		icon: 'devicon:python',
		color: colors.yellow[300]
	},
	{
		icon: 'devicon:gitlab',
		color: colors.orange[500]
	},
	{
		icon: 'devicon:docker',
		color: colors.cyan[500]
	},
	{
		icon: 'devicon:github',
		invertIconColor: true,
		color: colors.white
	},
	{
		icon: 'devicon:mongodb',
		color: colors.green[600]
	},
	{
		icon: 'devicon:mysql',
		color: colors.sky[800]
	},
	{
		icon: 'devicon:git',
		color: colors.red[500]
	}
];

interface Tech {
	icon: string;
	color: string;
	invertIconColor?: boolean;
}
