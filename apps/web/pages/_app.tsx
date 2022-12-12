import { AppProps } from 'next/app';
import Head from 'next/head';
import * as React from 'react';
import { AUIProvider, GlobalStyles, IAUI } from 'react-aui';

const theme: IAUI = {
	mode: 'light',
	colors: {
		// good color palette:
		// https://www.theverge.com/23438982/hp-victus-15-gaming-laptop-review-specs-price
		main: '#000000',
		text: '#000000',
		bg: '#ffffff',

		red: '#e1233c',
		green: '#00e78c',
		blue: '#03a9f4',
		orange: '#c99400',

		white: '#ffffff',
		black: '#000000',
		grey: '#888888',
	},
	paddings: {
		small: 5,
		medium: 10,
		large: 20,
	},
	borderRadius: 4,
	globalStyles: `
		h1, h2, h3, h4 {
			margin: 0;
		}
	`,
};

function CustomApp({ Component, pageProps }: AppProps) {
	return (
		<>
			<Head>
				<title>Emil Zaripov</title>
			</Head>

			<main className="app">
				<AUIProvider themes={[theme]}>
					<GlobalStyles />
					<Component {...pageProps} />
				</AUIProvider>
			</main>
		</>
	);
}

export default CustomApp;
