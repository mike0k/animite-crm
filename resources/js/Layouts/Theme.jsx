import React from 'react';

import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import primary from '@mui/material/colors/pink';
import secondary from '@mui/material/colors/indigo';

import Config from '../config/Config';
import * as UTool from '../util/Tool';

let theme = createTheme();

const font = {
    fontStyle: 'normal',
    fontDisplay: 'swap',
    fontWeight: 400,
};

const head1Reg = {
    ...font,
    fontFamily: 'Poiret One',
    src: `url("/media/font/PoiretOne-Regular.ttf") format('truetype')`,
};
const body1Reg = {
    ...font,
    fontFamily: 'Montserrat',
    src: `url("/media/font/Montserrat-Regular.ttf") format('truetype')`,
};

const primaryColor = theme.palette.augmentColor({
    color: {
        main: '#1C84C6',
    },
});
const secondaryColor = theme.palette.augmentColor({
    color: {
        main: '#00796B',
    },
});

theme = createTheme({
    components: {
        MuiCssBaseline: {
            styleOverrides: {
                html: [
                    { '@font-face': head1Reg },
                    { '@font-face': body1Reg },
                    //{ fontSize: '10px' },
                ],
            },
        },
        MuiButton: {
            styleOverrides: {
                root: {
                    textTransform: 'none',
                },
            },
        },
    },
    typography: {
        fontFamily: Config.font.body1,
        //fontWeight: 400,
        //fontSize: 16,

        h1: {
            fontFamily: Config.font.head1,
            fontSize: '4rem',
        },
        h2: {
            fontFamily: Config.font.head1,
            fontSize: '3rem',
        },
        h3: {
            fontFamily: Config.font.head1,
            fontSize: '2.5rem',
        },
        h4: {
            fontFamily: Config.font.head1,
            fontSize: '2rem',
        },
        h5: {
            fontFamily: Config.font.head1,
            fontSize: '1.5rem',
        },
        h6: {
            fontFamily: Config.font.head1,
            fontSize: '1rem',
        },
        subtitle1: {
            fontFamily: Config.font.head1,
            fontSize: '1.5rem',
            textTransform: 'uppercase',
        },
        subtitle2: {
            fontFamily: Config.font.head1,
            fontSize: '1rem',
        },
        body1: {
            fontSize: '1.25rem',
        },
        button: {
            fontFamily: Config.font.body1,
            //fontSize: '1.5rem',
        },
    },
});

const themeLight = createTheme({
    ...theme,
    palette: {
        mode: 'light',
        primary: primaryColor,
        secondary: secondaryColor,
        background: {
            default: '#EEEEEE',
        },
    },
});

const themeDark = createTheme({
    ...theme,
    palette: {
        mode: 'dark',
        primary: primaryColor,
        secondary: secondaryColor,
        background: {
            default: '#111821',
        },
    },
});

const VTheme = ({ children }) => {
    const style = UTool.useAppSelector((state) => state.layout.style);

    return (
        <ThemeProvider theme={style === 'light' ? themeDark : themeLight}>
            <CssBaseline />
            {children}
        </ThemeProvider>
    );
};

export default VTheme;
