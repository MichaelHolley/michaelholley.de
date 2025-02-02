import type { Config } from 'tailwindcss';

export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		container: {
			center: true,
			padding: {
				DEFAULT: '2rem',
				sm: '3rem',
				lg: '4rem'
			}
		},
		listStyleType: {
			none: 'none',
			disc: 'disc',
			decimal: 'decimal',
			square: 'square'
		},
		extend: {
			colors: {
				white: '#F5F5F5',
				primary: {
					DEFAULT: '#DD7373',
					hover: '#FF9595',
					active: '#FFBFBF'
				},
				secondary: {
					DEFAULT: '#51A3A3',
					hover: '#73C3C3',
					active: '#95E3E3'
				},
				tertiary: {
					DEFAULT: '#586F6B',
					hover: '#7E8E8A',
					active: '#A4ADA9'
				}
			}
		}
	},
	plugins: []
} satisfies Config;
