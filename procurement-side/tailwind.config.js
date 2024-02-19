/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			colors: {
				'dark-blue': '#1F2544',
				'brand-purple': '#7077A1',
				'brand-blue': '#1F8FF9',
				'purple-light': '#6962AD',
			},
		},
		plugins: [],
	},
}
