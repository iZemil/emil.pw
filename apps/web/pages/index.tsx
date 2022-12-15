import Head from 'next/head';
import * as React from 'react';

import { CV } from '../components/CV';
import { DATA } from '../components/CV/consts';

export function Index() {
	return (
		<>
			<Head>
				<meta property="og:url" content="https://emil.pw" />
				<meta property="og:image" content="https://emil.pw/emil.jpg" />
				<meta property="og:type" content="website" />
				<meta property="og:title" content={DATA.title} />
				<meta property="og:description" content={DATA.description} />
				<meta property="og:site_name" content="emil.pw" />
			</Head>

			<CV />
		</>
	);
}

export default Index;
