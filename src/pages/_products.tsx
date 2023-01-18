import React from 'react';
import Layout from '@theme/Layout';

export default function Home() {
	return (
		<Layout title="My Products" description="Emil's product list">
			<head>
				<meta property="og:url" content="https://emil.pw" />
				<meta property="og:image" content="https://emil.pw/img/emil.jpg" />
				<meta property="og:type" content="website" />
				<meta property="og:site_name" content="emil.pw" />
			</head>

			<main>
				<ul>
					<li>bllng.com</li>
					<li>job.js.org</li>
					<li>telegram bots</li>
					<li>NPM package</li>
					<li>react-aui</li>
				</ul>
			</main>
		</Layout>
	);
}
