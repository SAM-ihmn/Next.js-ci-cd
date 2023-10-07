import type { Config } from 'tailwindcss';
import plugin from 'tailwindcss/plugin';

const config: Config = {
	content: ['./pages/**/*.{js,ts,jsx,tsx,mdx}', './components/**/*.{js,ts,jsx,tsx,mdx}', './app/**/*.{js,ts,jsx,tsx,mdx}'],
	theme: {
		screens: {
			sm: { max: '660px' },
			md: { min: '661px', max: '975px' },
			lg: '976px',
		},

		colors: {
			// btn
			redBtn: '#F73859',
			greenBtn: '#21DEAF',
			navyBlueBtn: '#1D2335',

			grayBorder: '#DEE2ED',
			grayIcon: '#8080809e',

			// bg
			whiteBg: '#FFF',
			grayBg: '#F5F6FA',
			greenBg: '#D2F9EF',
			redBg: '#FEE6EA',


			// text
			grayText: '#7B8BB7',
			whiteText: '#FFF',
			orangeText: '#F6490D',
			redText: '#d32f2f',
			blackText: '#000',
			navyBlueText: '#1D2335',
			greenText: '#1AB28C',
			blueText: '#2427DB',
			blueText2: '#181BB4',
			violetText: '#985bb7',
		},
	},
	corePlugins: {
		preflight: false,
	},

	plugins: [
		plugin(function ({ addVariant }: { addVariant: any }) {
			addVariant('xs-only', "@media screen and (max-width: theme('screens.md'))"); // instead of hard-coded 640px use sm breakpoint value from config. Or anything
		}),
	],
};
export default config;
