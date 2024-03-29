import React from 'react';
import Layout from '@theme/Layout';
import Head from '@docusaurus/Head';

import { Resume } from '../components/Resume';
import { RESUME } from '../components/Resume/consts';

export default function Home() {
	return (
		<Layout title="Resume" description={RESUME.title}>
			<Head>
				<meta property="og:url" content="https://emil.pw" />
				<meta property="og:image" content="https://emil.pw/img/emil.jpg" />
				<meta property="og:type" content="website" />
				<meta property="og:site_name" content="emil.pw" />
			</Head>

			<main>
				<Resume />
			</main>
		</Layout>
	);
}
