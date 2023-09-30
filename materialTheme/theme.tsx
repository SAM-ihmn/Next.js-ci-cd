import { createTheme, responsiveFontSizes } from '@mui/material/styles';
import localFont from 'next/font/local';

// local font
const dana = localFont({
	src: [
		{
			path: '../public/fonts/dana/Dana-Regular.ttf',
			weight: 'bold',
		},
	],
	variable: '--font-dana',
});

declare module '@mui/material/styles' {
	interface Palette {
		gray: Palette['primary'];
	}

	interface PaletteOptions {
		gray?: PaletteOptions['primary'];
	}
}

// initial theme (palette, fonts, breakpoints)
let theme = createTheme({
	palette: {
		primary: {
			main: '#1D2335',
		},
		secondary: {
			main: '#d0cd0c',
		},
	},

	breakpoints: {
		values: {
			xs: 0,
			sm: 660,
			md: 660,
			lg: 974,
			xl: 1440,
		},
	},

	typography: {
		fontFamily: dana.style.fontFamily,
	},
});

// custom color
theme = createTheme(theme, {
	palette: {
		gray: theme.palette.augmentColor({
			color: {
				main: '#7B8BB7',
				light: '#DEE2ED',
				dark: '#BDC5DB',
			},
			name: 'gray',
		}),
		red: theme.palette.augmentColor({
			color: {
				main: '#d32f2f',
			},
			name: 'red',
		}),
		success: theme.palette.augmentColor({
			color: {
				main: '#21DEAF',
				dark: '#985bb7'
			},
			name: 'success',
		}),
	},
});

// components
theme = createTheme(theme, {
	components: {
		MuiTextField: {
			variants: [
				// variants will help you define the props given by Mui and the styles you want to apply for it
				{
					// props: { variant: 'filled', disabled: true },
					props: { variant: 'filled' },
					style: {
						'& .MuiInputBase-root': {
							borderRadius: 7
						},
						'& .mui-novyny-MuiInputBase-root-MuiFilledInput-root:before': {
							borderBottom: '0px !important'
						}
					},
				},
			],

			styleOverrides: {
				root: {
					fontSize: '16px !important', //? for prevent to zooming conflictin iphones (must be at least 16px in font size)
					fontFamily: dana.style.fontFamily,
					borderRadius: '7px',
					direction: 'rtl',
					width: '100%',

					'& .MuiFormHelperText-root': {
						marginInline: '0px !important',
						textAlign: 'right',
					},

					'& input': {
						padding: '11px 10px 8px 10px !important',
						[theme.breakpoints.up('md')]: {
							padding: '14px 10px 9px 10px !important',
						},
					},

					'& .MuiOutlinedInput-root': {
						'&:hover fieldset': {
							borderColor: theme.palette.gray.main,
						},
						'&.Mui-focused fieldset': {
							borderColor: theme.palette.gray.main,
							borderWidth: 1,
						},
					},

					// '& label': {
					// 	fontSize: '14px',
					// 	color: '#898484',
					// 	'&.Mui-focused': {
					// 		fontSize: '15px',
					// 		padding: '0 3px !important',
					// 	},
					// },
				},
			},
		},

		MuiSelect: {
			styleOverrides: {
				root: {
					fontSize: '16px !important', //? for prevent to zooming conflictin iphones (must be at least 16px in font size)
					fontFamily: dana.style.fontFamily,
					direction: 'rtl',
					width: '100%',

					'& .MuiOutlinedInput-input': {
						// padding: '.8em 1.5em',
						padding: '11px 10px 8px 10px !important',
						[theme.breakpoints.up('md')]: {
							padding: '14px 10px 12px 10px !important',
						},
					},

					'& .mui-10d36jd-MuiSvgIcon-root-MuiSelect-icon': {
						left: '7px !important',
						right: 'unset',
						position: 'absolute',
					},

					'& .mui-5ajf1d-MuiSvgIcon-root-MuiSelect-icon': {
						left: '7px !important',
						right: 'unset',
						position: 'absolute',
					},

					'& .MuiOutlinedInput-root': {
						'&:hover fieldset': {
							borderColor: theme.palette.gray.main,
						},
						'&.Mui-focused fieldset': {
							borderColor: theme.palette.gray.main,
							borderWidth: 1,
						},
					},
					'& .mui-ilir57-MuiInputBase-root-MuiOutlinedInput-root-MuiSelect-root.Mui-focused .MuiOutlinedInput-notchedOutline': {
						borderColor: 'red !important',

						'& fieldset': {
							borderColor: 'red !important',
						},

						'&:hover fieldset': {
							borderColor: theme.palette.gray.main,
						},
						'&.Mui-focused fieldset': {
							borderColor: theme.palette.gray.main,
							borderWidth: 1,
						},
					},

					'& .MuiOutlinedInput-notchedOutline': {
						// borderRadius: '.6em',
						borderRadius: '5px !important',
					},
				},
			},
		},

		MuiButton: {
			variants: [
				// variants will help you define the props given by Mui and the styles you want to apply for it
				{
					props: { variant: 'outlined', disabled: true },
					style: {
						// backgroundColor: theme.palette.inputDisabledColor.main,
						// color: theme.palette.textGray2.main
					},
				},
				{
					props: { variant: 'contained', color: 'secondary' },
					style: {
						// backgroundColor: theme.palette.inputDisabledColor.main,
						// color: theme.palette.textGray2.main
					},
				},
			],

			styleOverrides: {
				root: {
					//* mobile
					paddingTop: '10px',
					fontSize: '14px !important',
					borderRadius: '7px',
					width: '100%',

					//* desktop
					[theme.breakpoints.up('md')]: {
						padding: '12px 0 9px 0',
						fontSize: '16px !important',
					},
				},
				contained: {},
				outlined: {},
			},
		},

		MuiDrawer: {
			styleOverrides: {
				root: {
					width: '100%',

					'& .MuiPaper-root': {
						borderTopLeftRadius: '1rem',
						borderTopRightRadius: '1rem',
						maxWidth: theme.breakpoints.values.md,
						marginInline: 'auto'
					},

					'& .MuiBackdrop-root': {
						backgroundColor: 'unset !important'
					},
				},
				contained: {},
				outlined: {},
			},
		}
	},
});

theme = responsiveFontSizes(theme);
export default theme;
