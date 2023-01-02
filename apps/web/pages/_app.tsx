import { AppProps } from 'next/app';
import Head from 'next/head';
import * as React from 'react';
import { AUIProvider, GlobalStyles, ITheme, color } from 'react-aui';

const theme: ITheme = {
	key: 'light',
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
};

function CustomApp({ Component, pageProps }: AppProps) {
	return (
		<>
			<Head>
				<title>Emil Zaripov</title>
			</Head>

			<AUIProvider theme={theme}>
				<main className="app">
					<GlobalStyles normalize>
						{(t) => `
					* {
						box-sizing: border-box;
					}

					body {
						font-family: Arial, sans-serif;
						background-color: ${color('bg')({ theme: t })};
						color: ${color('text')({ theme: t })};
						transition: 0.3s background;
					}

					${(() => {
						let headers = '';
						Array.from({ length: 5 }).forEach((_, index) => {
							const header = index + 1;

							headers += `
								h${header} {
									font-size: ${30 - 2 * header}px;
									font-weight: 400;
								}
							`;
						});

						return headers;
					})()}

					ul, ol {
						margin: 0;
					}
				`}
					</GlobalStyles>

					<Component {...pageProps} />
				</main>
			</AUIProvider>
		</>
	);
}

export default CustomApp;