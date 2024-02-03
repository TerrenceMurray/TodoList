import type { Config } from 'tailwindcss';

const config: Config = {
	content: [
		'./src/pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/components/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {
			backgroundImage: {
				'dotted-pattern':
					'url("../../public/dotted background pattern 2.png")',
			},
			backgroundSize: {
				'10%': '10%',
			},
			colors: {
				white: {
					50: '#F7F7F7',
					100: '#EDEDED',
					200: '#DFDFDF',
					400: '#ABABAB',
					600: '#888888',
					800: '#676767',
					950: '#363636',
				},
				purple: {
					50: '#EDEFFF',
					100: '#DEE3FF',
					200: '#C4CBFF',
					400: '#7B7BFF',
					600: '#573DEE',
					800: '#845EF7',
				},
				red: {
					50: '#FDF3F3',
					100: '#FDE3E4',
					200: '#FBCDCF',
					400: '#EF666B',
					600: '#D23036',
					800: '#922226',
				},
				background: {
					DEFAULT: 'var(--surface-background)',
					secondary: 'var(--surface-secondary)',
					tertiary: 'var(--surface-tertiary)',
					accent: 'var(--surface-accent)',
				},
				primary: {
					DEFAULT: 'var(--text-primary)',
				},
				secondary: {
					DEFAULT: 'var(--text-secondary)',
				},
				accent: {
					DEFAULT: 'var(--text-accent)',
				},
			},
		},
	},
	plugins: [],
};
export default config;
