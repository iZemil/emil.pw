/* eslint-disable react/display-name */
import Document, { DocumentContext, DocumentInitialProps, Head, Html, Main, NextScript } from 'next/document';
import * as React from 'react';
import { ServerStyleSheet } from 'styled-components';

export default class CustomDocument extends Document {
	static async getInitialProps(ctx: DocumentContext): Promise<DocumentInitialProps> {
		const originalRenderPage = ctx.renderPage;

		const sheet = new ServerStyleSheet();

		ctx.renderPage = () =>
			originalRenderPage({
				enhanceApp: (App) => (props) => sheet.collectStyles(<App {...props} />),
				enhanceComponent: (Component) => Component,
			});

		const intialProps = await Document.getInitialProps(ctx);
		const styles = sheet.getStyleElement();

		return { ...intialProps, styles };
	}

	render() {
		return (
			<Html>
				<Head>
					{/* <link rel="icon" type="image/x-icon" href="favicon.ico" /> */}
					<link rel="shortcut icon" href="/favicon.png" />

					<meta property="mobile-web-app-capable" content="yes" />
					<meta property="og:locale" content="en_US" />

					{this.props.styles}
				</Head>
				<body>
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}
