// https://github.com/martpie/next-transpile-modules#readme
const withTM = require('next-transpile-modules')(['react-aui', 'react-syntax-highlighter']); // pass the modules you would like to see transpiled
const { withNx } = require('@nrwl/next/plugins/with-nx');

/**
 * @type {import('@nrwl/next/plugins/with-nx').WithNxOptions}
 **/
const nextConfig = {
	nx: {
		// Set this to true if you would like to to use SVGR
		// See: https://github.com/gregberge/svgr
		svgr: false,
	},
	compiler: {
		// Enables the styled-components SWC transform
		styledComponents: true,
	},
	images: {
		unoptimized: true,
	},
	webpack: (config, options) => {
		config.module.rules.push({
			test: /\.css$/,
			use: [{ loader: 'style-loader' }, { loader: 'css-loader' }],
		});

		if (config.module.generator?.asset?.filename) {
			if (!config.module.generator['asset/resource']) {
				config.module.generator['asset/resource'] = config.module.generator.asset;
			}
			delete config.module.generator.asset;
		}

		return config;
	},
};

module.exports = withTM(withNx(nextConfig));
