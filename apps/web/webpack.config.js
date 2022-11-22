const { DefinePlugin } = require('webpack');
const nrwlConfig = require('@nrwl/react/plugins/webpack.js');
const CompressionPlugin = require('compression-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const packageJson = require('../../package.json');

module.exports = (config, context) => {
	const { configuration } = context;

	nrwlConfig(config);

	const commonConfig = {
		...config,
		node: {
			global: true,
		},
		plugins: [
			...config.plugins,
			// uncomment to analyze bundle size
			// new BundleAnalyzerPlugin()
		],
	};
	const definePlugin = commonConfig.plugins.find((plugin) => plugin instanceof DefinePlugin);
	if (definePlugin) {
		definePlugin.definitions['process.env']['NX_VERSION'] = JSON.stringify(packageJson.version);
	} else {
		throw new Error('DefinePlugin or process.env are not defined');
	}

	if (configuration === 'production') {
		return {
			...commonConfig,
			plugins: [
				...commonConfig.plugins,
				new CompressionPlugin({
					test: /\.js(\?.*)?$/i,
				}),
			],
		};
	}

	return commonConfig;
};
