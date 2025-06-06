import 'styled-components';

declare module 'styled-components' {
    export interface DefaultTheme {
        colors: {
            background: string;
            primary: string;
            secondary: string;
            text: string;
            accent: string;
        };
        fonts: {
            primary: string;
            secondary: string;
        };
        breakpoints: {
            sm: string;
            md: string;
            lg: string;
            xl: string;
        };
    }
}
