import React from 'react';
import Layout from '@theme/Layout';

import { Resume } from '@site/src/components/Resume';

export default function Home() {
	return (
		<Layout title="Resume" description="Full-Stack Javascript Developer">
			<head>
				<meta property="og:url" content="https://emil.pw" />
				<meta property="og:image" content="https://emil.pw/img/emil.jpg" />
				<meta property="og:type" content="website" />
				<meta property="og:site_name" content="emil.pw" />
			</head>

			<main>
				<Resume />
			</main>
		</Layout>
	);
}
