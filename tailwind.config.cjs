/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		listStyleType: {
			none: 'none',
			disc: 'disc',
			decimal: 'decimal',
			square: 'square'
		},
		colors: {
			black: '#141414',
			white: '#F5F5F5',
			gray: '#616161',
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
		},
		extend: {}
	},
	plugins: []
};
