import type { AppProps } from "next/app";
import GlobalStyle from "../styles/globalstyles";
import Head from "next/head";

export default function App({ Component, pageProps }: AppProps) {
    return (
        <>
            <Head>
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1.0"
                />
                <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
                <title>devlinks</title>
            </Head>
            <GlobalStyle />
            <Component {...pageProps} />
        </>
    );
}
