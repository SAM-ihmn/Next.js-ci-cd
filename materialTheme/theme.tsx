"use client";
import { createTheme } from "@mui/material/styles";

declare module "@mui/material/styles" {
  interface Palette {
    blue: {
      main: string;
    };
    pink: {
      main: string;
      light: string
    };
    greyColor: {
      light: string;
      dark: string;
    };
    white: {
      main: string;
    };
    black: {
      light: string;
      dark: string;
    };
  }
}

declare module '@mui/material/styles' {
  interface BreakpointOverrides {
    xs: true;
    sm: true;
    md: true;
    lg: true;
    xl: false
  }
}


// initial theme (palette, fonts, breakpoints)
let theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
			sm: 401,
			md: 661,
			lg: 1201,
    }
  },
  typography: {
    fontFamily: "yekan",
    fontSize: 14,
  },
});

// custom color
theme = createTheme(theme, {
  palette: {
    blue: {
      main: "#BCDEDF", //powderBlue
    },
    pink: {
      main: "#FF9A8A", // salmonPink
      light: '#ffc6bd'
    },
    greyColor: {
      light: "#F2F2F2",
      dark: "#E4E4E4",
    },
    white: {
      main: "#ffffff",
    },
    black: {
      light: "#2C2C2C",
      dark: "#000",
    },
  },
});

// components
theme = createTheme(theme, {
  components: {
		MuiButton: {
      styleOverrides: {
				root :{
					backgroundColor: theme.palette.pink.main,
					color: theme.palette.black.light,
					fontSize: 16,
					width: '100%',
					height: '100%',
          '&:hover': {
            backgroundColor: theme.palette.pink.light,
          },
				},
      },
    },
		MuiInputBase : {
			styleOverrides: {
				root: {
          backgroundColor : theme.palette.greyColor.light,
					'& .mui-1lkr5rz-MuiInputBase-input-MuiOutlinedInput-input':{
						padding: '.5rem',
					},
					'& .mui-q9qgoj-MuiSelect-select-MuiInputBase-input-MuiOutlinedInput-input' : {
						padding: '.5rem'
					},
				},
			}
		},
}});



export default theme;
