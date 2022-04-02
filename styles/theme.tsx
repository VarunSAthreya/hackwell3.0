import { extendTheme } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";

const theme = extendTheme({
    styles: {
        global: (props: any) => ({
            body: {
                bg: mode("#f8f9fa", "#121212")(props),
            },
        }),
    },
    config: {
        initialColorMode: "dark",
        useSystemColorMode: false,
    },
});

export default theme;
