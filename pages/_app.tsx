import { ChakraProvider } from '@chakra-ui/react';
import { AppProps } from 'next/app';
import Head from 'next/head';
import Footer from '../components/Footer/Footer';
import Navigation from '../components/Navigation/Navigation';
import theme from '../styles/theme';

const App = ({ Component, pageProps }: AppProps) => {
    return (
        <>
            <Head>
                <title>Hackwell 3.0</title>
                <meta
                    name="viewport"
                    content="minimum-scale=1, initial-scale=1, width=device-width"
                />
                <meta
                    name="description"
                    content="Hackwell 3.0 is a 48-hour Hackathon hosted by JSSATE in association with honeywell."
                />
                <meta name="robots" content="all" />
                <link rel="shortcut icon" href="/favicon.ico" />
            </Head>
            <ChakraProvider theme={theme}>
                <Navigation />
                <Component {...pageProps} />
                <Footer />
            </ChakraProvider>
        </>
    );
};

export default App;
