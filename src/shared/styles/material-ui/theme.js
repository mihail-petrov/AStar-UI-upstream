import { createTheme } from "@mui/material/styles";

export const theme = createTheme({ 
    palette: { 
        primary: { 
            main: '#9B51E0',
            dark: '#801FCD',
        }
    },
    typography: { 
        fontFamily: [
            'Nunito Sans', 
            'sans-serif',
        ].join(',')
    },
    components: { 
        MuiButtonBase: {
            defaultProps: {
                disableRipple: true,
                disableTouchRipple: true,
            },
        },
    }
})