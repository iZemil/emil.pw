// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
	title: 'emil.pw',
	tagline: 'Full-Stack Developer',
	url: 'https://emil.pw',
	baseUrl: '/',
	trailingSlash: true,
	onBrokenLinks: 'throw',
	onBrokenMarkdownLinks: 'warn',
	favicon: 'img/favicon.ico',

	// GitHub pages deployment config.
	// If you aren't using GitHub pages, you don't need these.
	organizationName: 'izemil', // Usually your GitHub org/user name.
	projectName: 'emil.pw', // Usually your repo name.

	// Even if you don't use internalization, you can use this field to set useful
	// metadata like html lang. For example, if your site is Chinese, you may want
	// to replace "en" with "zh-Hans".
	i18n: {
		defaultLocale: 'en',
		locales: ['en'],
	},

	presets: [
		[
			'classic',
			/** @type {import('@docusaurus/preset-classic').Options} */
			({
				// docs: {
				// 	sidebarPath: require.resolve('./sidebars.js'),
				// },
				docs: false,
				theme: {
					customCss: require.resolve('./src/css/custom.css'),
				},
			}),
		],
	],

	themeConfig:
		/** @type {import('@docusaurus/preset-classic').ThemeConfig} */
		({
			navbar: {
				hideOnScroll: true,
				title: 'Emil',
				// logo: {
				// 	alt: 'Emil Logo',
				// 	src: 'img/logo.svg',
				// },
				items: [
					// { to: '/products', label: 'Products', position: 'left' },
					{
						href: 'https://github.com/izemil',
						label: 'GitHub',
						position: 'right',
					},
				],
			},
			prism: {
				theme: lightCodeTheme,
				darkTheme: darkCodeTheme,
			},
		}),
};

module.exports = config;
