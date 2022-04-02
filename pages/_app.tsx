import { ChakraProvider } from '@chakra-ui/react';
import { AppProps } from 'next/app';
import theme from '../styles/theme';
import Navigation from '../components/Navigation/Navigation';
import Footer from '../components/Footer/Footer';

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
