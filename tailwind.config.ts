import type { Config } from 'tailwindcss';
import plugin from 'tailwindcss/plugin';

const config: Config = {
	content: ['./pages/**/*.{js,ts,jsx,tsx,mdx}', './components/**/*.{js,ts,jsx,tsx,mdx}', './app/**/*.{js,ts,jsx,tsx,mdx}'],
	theme: {
		screens: {
			xs: {max:'400px'},
			sm: { max: '660px' },
			md: { min: '661px', max: '1200px' },
			lg: '1201px',
		},

		colors: {

			powderBlue: '#BCDEDF',
			blackText: '#2C2C2C',
			solidBlack: '#000',
			grayBackground: '#F2F2F2',
			grayBackgroundDarker: '#E4E4E4', 
			salmonPink: '#FF9A8A',
			grayText: '#ADADAD',
			white: '#FFF',
		},
		extend : {
			flex: {
				'1': '1 1 0%',
				'2':'2 2 0%',
				'3':'3 3 0%',
				'5': '5 5 0%'
			}
		}
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
