/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
	safelist: [
		{
			// pattern: /text-(info|error|success|warning)-(100|200|300)/,
			pattern: /(text|border)-(info|error|success|warning)/,
			// variants: ['lg', 'hover', 'focus', 'lg:hover'],
		}
	],
	theme: {
		extend: {
			// colors: {
			// 	'primary' : '#1e5b8a',
			// 	'primary-focus' : '#17486A',
			// 	'primary-content' : '#E0F2FF',
	 
			// 	'secondary' : '#f4b966',
			// 	'secondary-focus' : '#E07A3D',
			// 	'secondary-content' : '#FFF7E6',
	 
			// 	'accent' : '#2A9D8F',
			// 	'accent-focus' : '#22766C',
			// 	'accent-content' : '#E6F5F3',
	 
			// 	'neutral' : '#264653',
			// 	'neutral-focus' : '#1B323E',
			// 	'neutral-content' : '#DCE4E8',
	 
			// 	'base-100' : '#F0F4F8',
			// 	'base-200' : '#DDE1E6',
			// 	'base-300' : '#BCC4CC',
			// 	'base-content' : '#334E68',
	 
			// 	'info' : '#3B82F6',
			// 	'success' : '#4CAF50',
			// 	'warning' : '#F9C74F',
			// 	'error' : '#E63946',
			// },
			colors: {
				'primary': '#1e5b8a',
				'primary-focus': '#164265',
				'primary-content': '#B3D8F5',
				
				'secondary': '#d18b42',
				'secondary-focus': '#B36F33',
				'secondary-content': '#FFE1C2',
				
				'accent': '#22766C',
				'accent-focus': '#1C5D54',
				'accent-content': '#CDEAE5',
				
				'neutral': '#1F2D35',
				'neutral-focus': '#172229',
				'neutral-content': '#AEBBC1',
				
				'base-100': '#181D20',
				'base-200': '#23282C',
				'base-300': '#30373D',
				'base-content': '#CDD3D8',
				
				'info': '#3B82F6',
				'success': '#3A8D46',
				'warning': '#F08B24',
				'error': '#D83A3F',      
			},
		},
	},
	plugins: [
		require('daisyui'),
	],
}

