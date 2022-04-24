import { ChakraProvider } from '@chakra-ui/react';
import { AppProps } from 'next/app';
import Footer from '../components/Footer/Footer';
import Navigation from '../components/Navigation/Navigation';
import theme from '../styles/theme';

const App = ({ Component, pageProps }: AppProps) => {
    return (
        <ChakraProvider theme={theme}>
            <Navigation />
            <Component {...pageProps} />
            <Footer />
        </ChakraProvider>
    );
};

export default App;
