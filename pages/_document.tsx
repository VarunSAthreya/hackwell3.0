import { Head, Html, Main, NextScript } from 'next/document';

export default function Document() {
    return (
        <Html className="scroll-smooth" style={{ scrollBehavior: 'smooth' }}>
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
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    );
}
