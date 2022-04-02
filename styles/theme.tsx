import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
    styles: {
        global: {
            body: {
                fontFamily: 'body',
                color: 'black',
            },
        },
    },
    /*CHANGE COLORS*/
    colors: {
        black: '#111827',
        white: '#F9FAFB',
        grey: '#D1D5DB',
        red: '#9D174D',
    },
    /*CHANGE FONTS*/
    fonts: {
        heading: `'Times New Roman', sans-serif`,
        body: `'Helvetica', sans-serif`,
    },
    components: {
        Button: {
            baseStyle: {
                fontWeight: '600',
                textTransform: 'uppercase',
                borderRadius: 'md',
            },
            sizes: {
                md: {
                    fontSize: 'md',
                    px: 6,
                    py: 4,
                },
                lg: {
                    fontSize: 'lg',
                    px: 8,
                    py: 6,
                },
            },
            variants: {
                outline: {
                    border: '3px solid',
                    borderColor: 'red',
                    color: 'red',
                    _hover: {
                        bg: 'red',
                        color: 'white',
                    },
                },
                solid: {
                    bg: 'red',
                    color: 'white',
                    _hover: {
                        bg: 'red',
                    },
                },
            },
            defaultProps: {
                size: 'md',
                variant: 'outline',
            },
        },
    },
});

export default theme;
