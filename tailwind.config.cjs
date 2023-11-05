/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		colors: {
			black: '#141414',
			white: '#F5F5F5',
			primary: {
				DEFAULT: '#DD7373',
				hover: '#FF9595',
				focus: '#FFBFBF'
			},
			secondary: {
				DEFAULT: '#51A3A3',
				hover: '#73C3C3',
				focus: '#95E3E3'
			},
			tertiary: {
				DEFAULT: '#586F6B',
				hover: '#7E8E8A',
				focus: '#A4ADA9'
			}
		},
		extend: {}
	},
	plugins: []
};
