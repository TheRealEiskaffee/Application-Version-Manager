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
			colors: {
				'primary': '#1e5b8a',
				'primary-focus': '#164265',
				'primary-content': '#FFF',
				
				'secondary': '#1f6e76',
				'secondary-focus': '#16585D',
				'secondary-content': '#E1F4F5',

				
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

